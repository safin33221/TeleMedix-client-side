import { Clock, Video, FileText, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AboutSection() {
    const features = [{
        icon: <Clock className="w-8 h-8 text-sky-500" />,
        title: '24/7 Online Consultation',
        description: 'Connect with doctors anytime, day or night, from the comfort of your home.'
    }, {
        icon: <Video className="w-8 h-8 text-sky-500" />,
        title: 'Video & Chat Support',
        description: 'Choose between video calls or secure chat for your consultation needs.'
    }, {
        icon: <FileText className="w-8 h-8 text-sky-500" />,
        title: 'Prescription & Reports',
        description: 'Get digital prescriptions and medical reports instantly after consultation.'
    }, {
        icon: <Shield className="w-8 h-8 text-sky-500" />,
        title: 'Secure Medical Records',
        description: 'Your health data is encrypted and stored securely with HIPAA compliance.'
    }];
    return <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    How Our Platform Works
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Experience seamless healthcare with our comprehensive telemedicine
                    platform designed for your convenience and safety.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => <Card key={index} className="hover text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-sky-50 p-4 rounded-full">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                </Card>)}
            </div>
        </div>
    </section>;
}