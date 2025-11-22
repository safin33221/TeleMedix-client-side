"use client"
import React, { useState } from "react";

import { Video, MessageSquare, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function HeroSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            setShowSuggestion(true);
        }
    };

    return (
        <div className="w-full relative overflow-hidden">
            {/* Radial Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(150% 150% at 50% 90%, #ffffff 30%, #00A6F4 100%)",
                }}
            />

            <section className="relative py-24 md:py-10 px-4 border-b">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Content */}
                        <div className="z-10 space-y-2">
                            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                                Instant Telemedicine Care{" "}
                                <span className="text-sky-500">Anytime, Anywhere</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Connect with certified doctors, book consultations, and get
                                AI-powered health guidance instantly.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Button variant="outline" size="lg" className="px-6 py-5">
                                    <Video className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </Button>

                                <Button variant="secondary" size="lg" className="px-6 py-5">
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    Talk to AI Assistant
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-10 pt-6">
                                {[
                                    { value: "500+", label: "Certified Doctors" },
                                    { value: "50K+", label: "Happy Patients" },
                                    { value: "24/7", label: "Available" },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-3xl font-bold text-sky-500">
                                            {item.value}
                                        </div>
                                        <div className="text-sm text-gray-600">{item.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* AI Doctor Search */}
                            <Card className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-100 mt-4">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-sky-500" />
                                    <span className="font-semibold text-gray-900 text-base">
                                        AI Doctor Finder
                                    </span>
                                </div>

                                <div className="flex gap-3">
                                    <Input
                                        placeholder="Describe symptoms to find the right doctor..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="h-12 px-4"
                                    />

                                    <Button
                                        variant="secondary"
                                        onClick={handleSearch}
                                        className="h-12 px-6"
                                    >
                                        <Search className="w-5 h-5 mr-1" />
                                        Find
                                    </Button>
                                </div>

                                {showSuggestion && (
                                    <div className="mt-5 p-4 bg-sky-50 rounded-lg border border-sky-200 animate-fadeIn">
                                        <div className="flex items-start gap-3">
                                            <Sparkles className="w-5 h-5 text-sky-600 mt-1" />
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    Recommended: Cardiologist
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Dr. Sarah Johnson is available now
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        </div>

                        {/* Right Side Image */}
                        <div className="relative flex justify-center md:justify-end">
                            <div className="relative">
                                <Image
                                    width={400}
                                    height={100}
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                                    alt="Professional Doctor"
                                    className="rounded-3xl shadow-2xl object-cover"
                                />
                            </div>

                            {/* Soft Blurry Lights */}
                            <div className="absolute -top-6 -right-6 w-72 h-72 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
