import { AboutSection } from "@/components/module/Home/AboutSection";
import { AIFeatureSection } from "@/components/module/Home/AIFeatureSection";
import { DoctorProfileSection } from "@/components/module/Home/DoctorProfileSection";
import { HeroSection } from "@/components/module/Home/HeroSection";
import { ReviewSection } from "@/components/module/Home/ReviewSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DoctorProfileSection />
      <AIFeatureSection />
      <ReviewSection />



    </div>
  );
}
