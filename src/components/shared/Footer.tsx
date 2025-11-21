import React from 'react';
import { Activity, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  const quickLinks = ['About Us', 'Our Doctors', 'Services', 'Blog', 'Careers', 'Privacy Policy'];
  const services = ['Video Consultation', 'Chat Support', 'Prescription', 'Lab Tests', 'Health Records', 'Emergency Care'];
  return <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-sky-500 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                TeleMed<span className="text-sky-500">+</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in accessible, quality healthcare. Available
              24/7 for your medical needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link}>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(service => <li key={service}>
                  <a href="#" className="hover:text-sky-500 transition-colors">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <span>123 Medical Plaza, Healthcare District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span>support@telemedplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 TeleMed+. All rights reserved. | HIPAA Compliant
            Healthcare Platform
          </p>
        </div>
      </div>
    </footer>;
}