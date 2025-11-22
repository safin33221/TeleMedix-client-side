"use client";

import React, { useState } from "react";
import { Mail, Lock, Home, User, Shield } from "lucide-react";

import {
    FieldSet,
    FieldGroup,
    Field,
    FieldLabel
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-2xl mx-auto w-full">
            <Card className="lg:max-w-3xl p-6 shadow-sm border rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <FieldSet className="space-y-1">


                        <FieldGroup className="space-y-1">


                            <div className="flex  gap-3">

                                {/* Full Name */}
                                <Field>
                                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                    <div className="relative">
                                        <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </Field>
                                {/* Address */}
                                <Field>
                                    <FieldLabel htmlFor="address">Address</FieldLabel>
                                    <div className="relative">
                                        <Home className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="address"
                                            placeholder="Your address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </Field>



                            </div>

                            <div className="flex gap-3">
                                {/* Email */}
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <div className="relative">
                                        <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="example@mail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </Field>

                                {/* Password */}

                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <div className="relative">
                                        <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Strong password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pl-10"
                                        />
                                    </div>
                                </Field>
                            </div>
                        </FieldGroup>
                    </FieldSet>

                    {/* Remember Me */}
                    <label className="flex items-center space-x-2 cursor-pointer pt-2">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-sky-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">Remember me</span>
                    </label>

                    {/* Submit */}
                    <Button variant={"outline"} className="w-full mt-2">Create Account</Button>
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
