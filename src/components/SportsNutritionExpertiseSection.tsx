import ScrollReveal from "./ScrollReveal";
import {
  Zap,
  RefreshCcw,
  Droplets,
  TrendingUp,
  Timer,
  Footprints,
  Users,
  HeartPulse,
} from "lucide-react";

const expertise = [
  {
    icon: Zap,
    title: "Sports Performance Nutrition",
    description:
      "Fueling strategies tailored to your sport, training load, and performance goals.",
  },
  {
    icon: RefreshCcw,
    title: "Recovery & Injury Rehabilitation",
    description:
      "Targeted nutrition to speed up recovery and support healing after injury or intense training.",
  },
  {
    icon: Droplets,
    title: "Hydration & Electrolyte Strategy",
    description:
      "Personalized hydration plans to maintain peak performance and prevent cramping and fatigue.",
  },
  {
    icon: TrendingUp,
    title: "Muscle Gain & Body Composition",
    description:
      "Nutrition plans to build lean muscle, improve strength, and optimize body composition.",
  },
  {
    icon: Timer,
    title: "Pre- & Post-Workout Fueling",
    description:
      "Precisely timed meals and snacks to maximize energy, training output, and recovery.",
  },
  {
    icon: Footprints,
    title: "Endurance Athlete Nutrition",
    description:
      "Fueling and pacing strategies for runners, cyclists, and endurance athletes.",
  },
  {
    icon: Users,
    title: "Youth & Teen Athlete Nutrition",
    description:
      "Age-appropriate nutrition to support growth, energy, and athletic development.",
  },
  {
    icon: HeartPulse,
    title: "General Clinical Nutrition",
    description:
      "Ongoing support for diabetes, weight, and heart health alongside your athletic goals.",
  },
];

const SportsNutritionExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              Areas of Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Nutrition Built for{" "}
              <span className="text-primary">Performance & Recovery</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Whether you're training for competition or simply staying
              active, I build nutrition plans that help you perform, recover,
              and feel your best.
            </p>
          </div>
        </ScrollReveal>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
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

export default SportsNutritionExpertiseSection;
