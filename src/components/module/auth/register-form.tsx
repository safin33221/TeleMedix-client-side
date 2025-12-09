/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Mail, Lock, Home, User, Shield } from "lucide-react";
import {
    FieldSet,
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { registerPatient } from "@/services/auth/registerPatient";

export default function RegisterForm() {
    const [state, formAction, isPending] = useActionState(registerPatient, null);

    const getFieldError = (fieldName: string) => {
        if (!state?.errors) return null;

        const error = state.errors.find((err: any) => err.field === fieldName);
        return error?.message || null;
    };

    console.log(state);

    return (
        <div className="max-w-2xl mx-auto w-full">
            <Card className="lg:max-w-3xl p-6 shadow-sm border rounded-xl">
                <form action={formAction} className="space-y-4">
                    <FieldSet className="space-y-1">
                        <FieldGroup className="space-y-1">

                            {/* Name + Address */}
                            <div className="flex gap-3">
                                {/* Full Name */}
                                <Field className="w-full">
                                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                    <div className="relative">
                                        <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            className="pl-10"
                                        />
                                    </div>

                                    {getFieldError("name") && (
                                        <FieldDescription className="text-red-500">
                                            {getFieldError("name")}
                                        </FieldDescription>
                                    )}
                                </Field>

                                {/* Address */}
                                <Field className="w-full">
                                    <FieldLabel htmlFor="address">Address</FieldLabel>
                                    <div className="relative">
                                        <Home className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="address"
                                            name="address"
                                            placeholder="Your address"
                                            className="pl-10"
                                        />
                                    </div>

                                    {getFieldError("address") && (
                                        <FieldDescription className="text-red-500">
                                            {getFieldError("address")}
                                        </FieldDescription>
                                    )}
                                </Field>
                            </div>

                            {/* Email + Password */}
                            <div className="flex gap-3">
                                {/* Email */}
                                <Field className="w-full">
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <div className="relative">   
                                        <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="example@mail.com"
                                            className="pl-10"
                                        />
                                    </div>

                                    {getFieldError("email") && (
                                        <FieldDescription className="text-red-500">
                                            {getFieldError("email")}
                                        </FieldDescription>
                                    )}
                                </Field>

                                {/* Password */}
                                <Field className="w-full">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <div className="relative">
                                        <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="password"
                                            name="password"
                                            type="text"
                                            placeholder="Strong password"
                                            className="pl-10"
                                        />
                                    </div>

                                    {getFieldError("password") && (
                                        <FieldDescription className="text-red-500">
                                            {getFieldError("password")}
                                        </FieldDescription>
                                    )}
                                </Field>
                            </div>
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

                    {/* Submit */}
                    <Button disabled={isPending} variant="outline" className="w-full mt-2">
                        {isPending ? "Creating..." : "Create Account"}
                    </Button>
                </form>

                {/* Already have account */}
                <p className="mt-4 text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-sky-600 hover:text-sky-700 font-semibold"
                    >
                        Sign In
                    </Link>
                </p>

                {/* Security Notice */}
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
