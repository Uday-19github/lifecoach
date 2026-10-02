import Navbar from "@/components/Navbar";
import YogaNaturopathyHeroSection from "@/components/YogaNaturopathyHeroSection";
import YogaNaturopathyExpertiseSection from "@/components/YogaNaturopathyExpertiseSection";
import OneToOneConnectSection from "@/components/OneToOneConnectSection";
import Footer from "@/components/Footer";

const YogaNaturopathy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <YogaNaturopathyHeroSection />
      <YogaNaturopathyExpertiseSection />
      <OneToOneConnectSection />
      <Footer />
    </div>
  );
};

export default YogaNaturopathy;
