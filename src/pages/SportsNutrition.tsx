import Navbar from "@/components/Navbar";
import SportsNutritionHeroSection from "@/components/SportsNutritionHeroSection";
import SportsNutritionExpertiseSection from "@/components/SportsNutritionExpertiseSection";
import OneToOneConnectSection from "@/components/OneToOneConnectSection";
import Footer from "@/components/Footer";

const SportsNutrition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SportsNutritionHeroSection />
      <SportsNutritionExpertiseSection />
      <OneToOneConnectSection />
      <Footer />
    </div>
  );
};

export default SportsNutrition;
