


import { ArrowLeft, Shield } from "lucide-react";




import Link from "next/link";
import LoginForm from "@/components/module/auth/loginForm";


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className=" mb-8 flex gap-5 text-left">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your TeleMed+ account</p>
          </div>
        </div>

        {/* Card */}

        <LoginForm />
        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};


