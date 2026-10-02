import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Events;
