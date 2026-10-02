import Navbar from "@/components/Navbar";
import OneToOneHeroSection from "@/components/OneToOneHeroSection";
import OneToOneExpertiseSection from "@/components/OneToOneExpertiseSection";
import OneToOneConnectSection from "@/components/OneToOneConnectSection";
import Footer from "@/components/Footer";

const OneToOneSession = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OneToOneHeroSection />
      <OneToOneExpertiseSection />
      <OneToOneConnectSection />
      <Footer />
    </div>
  );
};

export default OneToOneSession;
