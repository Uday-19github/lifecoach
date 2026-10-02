import heroPortrait from "@/assets/hero-portrait.png";
import heroSlide2 from "@/assets/w1.jpeg";
import heroSlide3 from "@/assets/w4.jpeg";
import ScrollReveal from "./ScrollReveal";
import { Award, Users } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const HERO_SLIDES = [
  { src: heroPortrait, alt: "Wellness Expert Portrait" },
  { src: heroSlide2, alt: "Wellness Practice" },
  { src: heroSlide3, alt: "Holistic Healing" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex((prev) => (index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="home"
      className="relative pt-24 pb-10 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10"
    >
      {/* Decorative Background */}
      <div className="absolute top-16 left-8 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-12 right-8 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-narrow mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* LEFT SIDE */}
          <ScrollReveal>
            <div className="space-y-5 text-center lg:text-left">

              <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
                Holistic Wellness Expert
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground overflow-hidden">
                <span
                  className="inline-block animate-hero-title-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  Empowering Your Journey to{" "}
                </span>
                <span
                  className="inline-block text-primary animate-hero-title-in"
                  style={{ animationDelay: "0.35s" }}
                >
                  Complete Wellness
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
                Clinical Dietician · Naturopath · Energy Healer — guiding you
                towards a balanced, healthier, and more fulfilling life.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact"
                  className="bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-all hover:scale-[1.02] shadow-md shadow-primary/20 text-base"
                >
                  Book a Consultation
                </a>

                <a
                  href="#services"
                  className="border-2 border-primary text-primary font-semibold px-7 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-base"
                >
                  Explore Services
                </a>
              </div>

              <div className="flex justify-center lg:justify-start gap-5 pt-5">
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl px-5 py-3 border border-primary/10">
                  <Award className="text-primary" size={24} />
                  <div>
                    <p className="font-bold text-foreground text-base">10+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl px-5 py-3 border border-primary/10">
                  <Users className="text-primary" size={24} />
                  <div>
                    <p className="font-bold text-foreground text-base">500+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT SIDE - Image slideshow */}
          <ScrollReveal delay={200}>
            <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-10">
              <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-sm">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] min-h-[260px]">
                  {HERO_SLIDES.map((slide, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                      style={{
                        opacity: index === currentIndex ? 1 : 0,
                        pointerEvents: index === currentIndex ? "auto" : "none",
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2 flex items-center gap-2 border border-primary/10">
                    <div className="bg-primary/10 rounded-full p-1.5">
                      <Award className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-xs">Certified</p>
                      <p className="text-[10px] text-muted-foreground">Professional</p>
                    </div>
                  </div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {HERO_SLIDES.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className="rounded-full transition-all"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span
                        className={`block rounded-full transition-all ${
                          index === currentIndex
                            ? "w-6 h-2 bg-primary"
                            : "w-2 h-2 bg-primary/40 hover:bg-primary/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
