"use client";
import React, { useState } from "react";
import { Sparkles, Search, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIFeatureSection() {
  const [symptom, setSymptom] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleSearch = () => {
    if (symptom.trim()) {
      setShowSuggestion(true);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 px-5 py-2.5 rounded-full mb-5">
            <Sparkles className="w-5 h-5 text-sky-600" />
            <span className="text-sky-600 font-semibold">AI-Powered</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart AI Doctor Recommendation
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Describe your symptoms and let our AI suggest the most suitable
            specialist instantly.
          </p>
        </div>

        {/* Input + Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-500" />
                <Input
                  placeholder="Describe your symptoms (e.g., chest pain, fever...)"
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  className="text-base py-3"
                />
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full py-6 text-base font-semibold"
                onClick={handleSearch}
              >
                Get AI Recommendation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* AI Suggestion */}
            {showSuggestion && (
              <div className="mt-8 p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200">
                <div className="flex gap-4">
                  <div className="bg-sky-500 p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      AI Recommendation
                    </h3>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Based on your symptoms, consulting with a{" "}
                      <span className="font-semibold text-sky-600">
                        Cardiologist
                      </span>{" "}
                      is recommended. Dr. Sarah Johnson is available now and
                      experienced in handling similar cases.
                    </p>

                    <Button size="sm" className="font-medium">
                      Book with Dr. Sarah Johnson
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Disclaimer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            AI suggestions are for guidance only. Always consult with a licensed
            medical professional for actual diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
}
