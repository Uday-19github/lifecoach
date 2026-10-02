import ScrollReveal from "./ScrollReveal";
import { Dumbbell, Send } from "lucide-react";

const SportsNutritionHeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10">

      {/* Decorative Background */}
      <div className="absolute top-16 left-8 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-12 right-8 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-narrow mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto space-y-6">

            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Dumbbell className="text-primary" size={30} />
            </div>

            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              Services · Clinical Dietician &amp; Sports Nutritionist
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Meet Manjiree,{" "}
              <span className="text-primary">Clinical Dietician &amp; Sports Nutritionist</span>
            </h1>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
              Combining clinical nutrition expertise with sports-specific
              fueling strategies to help athletes and active individuals
              perform at their best, recover faster, and stay injury-free.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-all hover:scale-[1.02] shadow-md shadow-primary/20 text-base"
              >
                <Send size={18} />
                Book a Session
              </a>

              <a
                href="#expertise"
                className="border-2 border-primary text-primary font-semibold px-7 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-base"
              >
                Explore Areas of Expertise
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SportsNutritionHeroSection;
