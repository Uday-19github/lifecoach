import Navbar from "@/components/Navbar";
import TarotDowsingHeroSection from "@/components/TarotDowsingHeroSection";
import TarotDowsingAreasSection from "@/components/TarotDowsingAreasSection";
import TarotDowsingProcessSection from "@/components/TarotDowsingProcessSection";
import OneToOneConnectSection from "@/components/OneToOneConnectSection";
import Footer from "@/components/Footer";

const TarotDowsing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TarotDowsingHeroSection />
      <TarotDowsingAreasSection />
      <TarotDowsingProcessSection />
      <OneToOneConnectSection />
      <Footer />
    </div>
  );
};

export default TarotDowsing;
