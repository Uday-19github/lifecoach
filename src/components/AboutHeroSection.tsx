import heroWoman from "@/assets/hero-woman.png";
import ScrollReveal from "./ScrollReveal";
import { Award, Users } from "lucide-react";

const AboutHeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10">

      {/* Decorative Background */}
      <div className="absolute top-16 left-8 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-12 right-8 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-narrow mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT - Content */}
          <ScrollReveal>
            <div className="space-y-6 text-center lg:text-left">

              <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
                About Manjiree
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Meet Manjiree,{" "}
                <span className="text-primary">a Holistic Wellness Expert</span>
              </h1>

              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                With a passion for empowering individuals to achieve optimal
                health and well-being, Manjiree is a multi-faceted wellness
                expert with a diverse range of certifications and expertise.
                As a Clinical Dietician and Sports Nutritionist, she believes
                in the power of nutrition to transform lives.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2">
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

          {/* RIGHT - Portrait */}
          <ScrollReveal delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-sm">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] min-h-[260px] shadow-xl">
                  <img
                    src={heroWoman}
                    alt="Manjiree - Holistic Wellness Expert"
                    className="w-full h-full object-cover"
                  />
                </div>

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
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
