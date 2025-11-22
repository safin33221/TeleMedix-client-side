import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function ReviewSection() {
  const reviews = [
    {
      name: "Jennifer Martinez",
      rating: 5,
      text: "Amazing service! I was able to consult with a doctor within minutes. The video quality was excellent and the doctor was very professional.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Robert Thompson",
      rating: 5,
      text: "The AI assistant helped me find the right specialist for my condition. Saved me so much time and the consultation was thorough.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      text: "Convenient and reliable. I got my prescription digitally and the follow-up care was exceptional. Highly recommend TeleMed+!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from thousands of satisfied patients who trust our
            platform.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="relative p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-10 h-10 text-sky-200 absolute top-6 right-6" />

              <div className="flex items-center gap-4 mb-5">
                <Image
                  width={64}
                  height={64}
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover shadow-sm"
                />

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {review.name}
                  </h4>

                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
