/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { getDefaultDashboardRoute, isValidRedirectForRole, UserRole } from "@/lib/auth-utils";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/ZodValidator";
import { loginZodValidation } from "@/zod/auth.validation";

import { parse } from "cookie";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";
import { setCookie } from "./tokenHandler";




export const loginUser = async (_currentState: any, formData: any): Promise<any> => {
    try {
        let accessTokenObject: null | any = null;
        let refreshTokenObject: null | any = null;



        const redirectTo = formData.get('redirect') || null;

        // FormData থেকে values নিন
        const payload = {
            email: formData.get('email')?.toString() || '',
            password: formData.get('password')?.toString() || '',
        };
        console.log({ payload });

        console.log("Login payload:", payload);

        // Validation
        const validationResult = zodValidator(payload, loginZodValidation);
        console.log("Validation result:", validationResult);

        if (!validationResult.success) {
            // User-friendly error message তৈরি করুন
            const errorMessage = validationResult.errors?.[0]?.message || "Invalid email or password";

            return {
                success: false,
                message: errorMessage,
                errors: validationResult.errors
            };
        }

        const validatedPayload = validationResult.data;
        console.log("Validated payload:", validatedPayload);

        // API call
        const res = await serverFetch.post("/auth/login", {
            body: JSON.stringify(validatedPayload),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await res.json();
        console.log("API response:", result);

        if (!res.ok || !result.success) {
            throw new Error(result.message || "Login failed");
        }

        const setCookieHeaders = res.headers.getSetCookie();


        if (setCookieHeaders && setCookieHeaders.length > 0) {
            setCookieHeaders.forEach((cookie: string) => {
                const parsedCookie = parse(cookie);

                if (parsedCookie['accessToken']) {

                    accessTokenObject = parsedCookie;
                }
                if (parsedCookie['refreshToken']) {
                    refreshTokenObject = parsedCookie;
                }
            })
        } else {
            throw new Error("No Set-Cookie header found");
        }

        if (!accessTokenObject) {
            throw new Error("Tokens not found in cookies");
        }

        if (!refreshTokenObject) {
            throw new Error("Tokens not found in cookies");
        }
        console.log({ accessTokenObject, refreshTokenObject });

        const isProd = process.env.NODE_ENV === "production";

        await setCookie("accessToken", accessTokenObject.accessToken, {
            httpOnly: true,
            secure: isProd,               // ❗ FIX
            sameSite: isProd ? "none" : "lax", // ❗ FIX
            path: "/",
            maxAge: Number(accessTokenObject["Max-Age"]) || 3600,
        });

        await setCookie("refreshToken", refreshTokenObject.refreshToken, {
            httpOnly: true,
            secure: isProd,
            sameSite: isProd ? "none" : "lax",
            path: "/",
            maxAge: Number(accessTokenObject["Max-Age"]) || 7776000,
        });



        const decodedToken: JwtPayload | string = jwt.decode(accessTokenObject.accessToken) as JwtPayload;

        if (!decodedToken || typeof decodedToken === "string") {
            throw new Error("Invalid token format");
        }

        const userRole: UserRole = decodedToken.role;

        // Determine redirect destination
        let redirectDestination = getDefaultDashboardRoute(userRole);

        // Check if password change is needed
        if (result.data?.needPasswordChange) {
            redirectDestination = redirectTo && isValidRedirectForRole(redirectTo.toString(), userRole)
                ? `/reset-password?redirect=${redirectTo}`
                : "/reset-password";
        } else if (redirectTo) {
            // Use requested redirect if valid for user role
            const requestedPath = redirectTo.toString();
            redirectDestination = isValidRedirectForRole(requestedPath, userRole)
                ? `${requestedPath}?loggedIn=true`
                : `${redirectDestination}?loggedIn=true`;
        } else {
            // Default dashboard with loggedIn flag
            redirectDestination = `${redirectDestination}?loggedIn=true`;
        }

        redirect(redirectDestination);

    } catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : "Login Failed. You might have entered incorrect email or password."}` };
    }
}