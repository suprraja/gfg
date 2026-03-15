import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesPreview } from "@/components/FeaturesPreview";
import { WinnersSpotlight } from "@/components/WinnersSpotlight";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturesPreview />
      <WinnersSpotlight />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
