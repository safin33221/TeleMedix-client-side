/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useActionState } from "react";
import { Mail, Lock, Shield } from "lucide-react";

import {
    FieldSet,
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loginUser } from "@/services/auth/loginUser";

export default function LoginForm({ redirect }: { redirect: string }) {
    const [state, formAction, isPending] = useActionState(loginUser, null);
    console.log("state", state);

    const getFieldError = (fieldName: string) => {
        if (!state?.errors) return null;

        const error = state.errors.find((err: any) => err.field === fieldName);
        return error?.message || null;
    };

    console.log(state);

    return (
        <div className="max-w-3xl mx-auto w-full">
            <Card className="p-6 shadow-sm border rounded-xl">
                <form action={formAction} className="space-y-5">
                    {
                        redirect && <input type="hidden" name="redirect" value={redirect} />

                    }
                    <FieldSet className="space-y-3">
                        <FieldGroup className="space-y-2">
                            {/* Email */}
                            <Field>
                                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                                <div className="relative">
                                    <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                                {getFieldError("email") && (
                                    <FieldDescription className="text-red-500">
                                        {getFieldError("email")}
                                    </FieldDescription>
                                )}
                            </Field>

                            {/* Password */}
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <div className="relative">
                                    <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="pl-10"
                                        required
                                    />
                                </div>
                                {getFieldError("password") && (
                                    <FieldDescription className="text-red-500">
                                        {getFieldError("password")}
                                    </FieldDescription>
                                )}
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                    {/* Remember Me */}
                    <label className="flex items-center space-x-2 cursor-pointer pt-2">
                        <input
                            type="checkbox"
                            name="remember"
                            className="w-4 h-4 text-sky-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">Remember me</span>
                    </label>

                    {/* Login Button */}
                    <Button disabled={isPending} variant="outline" className="w-full mt-2">
                        {isPending ? "Signing In..." : "Sign In"}
                    </Button>
                </form>

                {/* Register Link */}
                <p className="mt-4 text-center text-gray-600 text-sm">
                    Don’t have an account{" "}
                    <Link
                        href="/register"
                        className="text-sky-600 hover:text-sky-700 font-semibold"
                    >
                        Create Account
                    </Link>
                </p>

                {/* Security */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span>Your information is secure</span>
                    </div>
                </div>
            </Card>
        </div>
    );
}
