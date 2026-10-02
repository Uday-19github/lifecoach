import Navbar from "@/components/Navbar";
import ReikiHealingHeroSection from "@/components/ReikiHealingHeroSection";
import ReikiHealingExpertiseSection from "@/components/ReikiHealingExpertiseSection";
import OneToOneConnectSection from "@/components/OneToOneConnectSection";
import Footer from "@/components/Footer";

const ReikiHealing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ReikiHealingHeroSection />
      <ReikiHealingExpertiseSection />
      <OneToOneConnectSection />
      <Footer />
    </div>
  );
};

export default ReikiHealing;
