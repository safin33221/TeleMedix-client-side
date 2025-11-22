import React from "react";
import { Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function DoctorProfileSection() {
    const doctors = [
        {
            name: "Dr. Sarah Johnson",
            specialization: "Cardiologist",
            experience: "15 years",
            rating: 4.9,
            image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
        },
        {
            name: "Dr. Michael Chen",
            specialization: "Pediatrician",
            experience: "12 years",
            rating: 4.8,
            image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
        },
        {
            name: "Dr. Emily Rodriguez",
            specialization: "Dermatologist",
            experience: "10 years",
            rating: 4.9,
            image:
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop",
        },
        {
            name: "Dr. James Wilson",
            specialization: "General Physician",
            experience: "18 years",
            rating: 5.0,
            image:
                "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-sky-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Expert Doctors
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Certified healthcare professionals dedicated to providing high-quality
                        medical care.
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <Card
                            key={index}
                            className="p-6 text-center rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
                        >
                            <Image
                                src={doctor.image}
                                width={100}
                                height={100}
                                alt={doctor.name}
                                className="w-32 h-32 rounded-full mx-auto  object-cover border-4 border-sky-100 shadow-sm"
                            />

                            <h3 className="text-xl font-semibold text-gray-900 ">
                                {doctor.name}
                            </h3>

                            <p className="text-sky-600 font-medium ">
                                {doctor.specialization}
                            </p>

                            <div className="flex items-center justify-center gap-2 mb-3">
                                <Award className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                    {doctor.experience} experience
                                </span>
                            </div>

                            <div className="flex items-center justify-center gap-1 mb-5">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold text-gray-900">{doctor.rating}</span>
                                <span className="text-gray-500 text-sm">(200+ reviews)</span>
                            </div>

                            <Button variant="outline" size="sm" className="w-full py-2.5">
                                View Profile
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
