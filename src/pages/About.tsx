import Navbar from "@/components/Navbar";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutPhilosophySection from "@/components/AboutPhilosophySection";
import AboutCredentialsSection from "@/components/AboutCredentialsSection";
import AboutConnectSection from "@/components/AboutConnectSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutCredentialsSection />
      <AboutConnectSection />
      <Footer />
    </div>
  );
};

export default About;
