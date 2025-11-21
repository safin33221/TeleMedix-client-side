import React from 'react';
import { Activity } from 'lucide-react';
import { Button } from '../ui/button';

export function PublicNavbar() {
    const menuItems = ['Home', 'Doctors', 'Services', 'About', 'Reviews', 'Contact'];
    return <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <div className="bg-sky-500 p-2 rounded-lg">
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                        TeleMed<span className="text-sky-500">+</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
                        {item}
                    </a>)}
                </div>

                <Button variant={`default`} size="sm">
                    Login / Sign Up
                </Button>
            </div>
        </div>
    </nav>;
}