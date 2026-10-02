import ScrollReveal from "./ScrollReveal";
import { Heart, Briefcase, Wallet, HeartPulse } from "lucide-react";

const areas = [
  {
    icon: Heart,
    title: "Relationships",
    description:
      "Gain clarity on love, family, and friendships, and the patterns shaping them.",
  },
  {
    icon: Briefcase,
    title: "Career",
    description:
      "Find direction on career decisions, transitions, and professional growth.",
  },
  {
    icon: Wallet,
    title: "Money",
    description:
      "Explore your relationship with money and the choices affecting your abundance.",
  },
  {
    icon: HeartPulse,
    title: "Health",
    description:
      "Tap into intuitive insight on your physical, emotional, and mental wellbeing.",
  },
];

const TarotDowsingAreasSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              Areas of Guidance
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Explore What's{" "}
              <span className="text-primary">Holding You Back</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Tap into the power of your intuition for guidance in the areas
              of life that matter most to you.
            </p>
          </div>
        </ScrollReveal>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 90}>
              <div className="group bg-white rounded-3xl p-8 border border-primary/10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary">
                  <item.icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TarotDowsingAreasSection;
