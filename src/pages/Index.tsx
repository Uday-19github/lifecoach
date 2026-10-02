import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseCardsSection from "@/components/ExpertiseCardsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExpertiseCardsSection />
      <ServicesSection />
      <GallerySection />
      <WhyChooseSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
