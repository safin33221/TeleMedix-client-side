import React from 'react';
import { Video, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
    return <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Instant Telemedicine Care{' '}
                        <span className="text-sky-500">Anytime, Anywhere</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Connect with certified doctors, book consultations, and get
                        AI-powered health guidance instantly.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button variant={`outline`} size="lg">
                            <Video className="w-5 h-5 mr-2" />
                            Book Appointment
                        </Button>
                        <Button variant="secondary" size="lg">
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Talk to AI Assistant
                        </Button>
                    </div>
                    <div className="flex items-center space-x-8 pt-4">
                        <div>
                            <div className="text-3xl font-bold text-sky-500">500+</div>
                            <div className="text-sm text-gray-600">Certified Doctors</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-sky-500">50K+</div>
                            <div className="text-sm text-gray-600">Happy Patients</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-sky-500">24/7</div>
                            <div className="text-sm text-gray-600">Available</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop" alt="Professional Doctor" className="rounded-2xl shadow-2xl" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-72 h-72 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                </div>
            </div>
        </div>
    </section>;
}