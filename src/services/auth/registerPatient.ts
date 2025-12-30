/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";
import { loginUser } from "./loginUser";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/ZodValidator";
import { registerPatientZodValidation } from "@/zod/auth.validation";


export const registerPatient = async (_currentData: any, formData: any): Promise<any> => {
    try {
        // FormData থেকে values নিন
        const payload = {
            name: formData.get("name")?.toString() || "",
            email: formData.get("email")?.toString() || "",
            address: formData.get("address")?.toString() || "",
            password: formData.get("password")?.toString() || "",
        };

        console.log("Raw form data:", {
            name: formData.get("name"),
            email: formData.get("email"),
            address: formData.get("address"),
            password: formData.get("password"),
        });

        // Validation
        const validationResult = zodValidator(payload, registerPatientZodValidation);

        if (!validationResult.success) {
            console.log("Validation failed:", validationResult.errors);
            return {
                success: false,
                message: "Validation failed",
                errors: validationResult.errors
            };
        }

        // validatedPayload এর আগে check করুন
        const validatedPayload = validationResult.data;

        if (!validatedPayload) {
            throw new Error("Validated payload is undefined");
        }

        console.log("Validated payload:", validatedPayload);

        // Convert to backend structure - আগে check করুন
        const registerData = {
            password: validatedPayload.password,
            patient: {
                name: validatedPayload.name,
                address: validatedPayload.address,
                email: validatedPayload.email,
            }
        };

        console.log("Register data:", registerData);

        // FormData তৈরি করুন
        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(registerData));

        const file = formData.get("file");
        if (file) {
            newFormData.append("file", file as Blob);
        }

        // API call
        const res = await serverFetch.post("/user/create-patient", {
            body: newFormData
            // Note: FormData ব্যবহার করলে Content-Type header দেবেন না
        });

        const result = await res.json();
        console.log("API response:", result);

        if (result.success) {
            // Login করার জন্য নতুন FormData তৈরি করুন
            const loginFormData = new FormData();
            loginFormData.append("email", payload.email);
            loginFormData.append("password", payload.password);

            await loginUser(_currentData, loginFormData);
        }

        return result;

    } catch (error: any) {
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.error("Register error:", error);
        return {
            success: false,
            message: error.message || "Registration failed"
        };
    }
};
