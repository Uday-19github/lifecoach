import ScrollReveal from "./ScrollReveal";
import { Award } from "lucide-react";

const certifications = [
  "Clinical Dietician",
  "Sports Nutritionist",
  "Certified Naturopath",
  "Certified Yoga Trainer",
  "Certified Spa Therapist",
  "Reiki Grandmaster",
  "Certified Pranic Healer",
  "Certified Tarot Reader",
  "Certified LamaFera Therapist",
  "Dowsing",
  "Past Life Regression",
];

const AboutCredentialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              Certifications
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A Diverse Range of{" "}
              <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Eleven certifications spanning clinical nutrition, natural
              therapies, and energy healing — one integrated approach to
              wellness.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert} delay={i * 60}>
              <div className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-primary/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary">
                  <Award
                    size={18}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <p className="font-medium text-foreground text-sm sm:text-base leading-snug">
                  {cert}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutCredentialsSection;
