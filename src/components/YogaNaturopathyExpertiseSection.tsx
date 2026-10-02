import ScrollReveal from "./ScrollReveal";
import {
  PersonStanding,
  Leaf,
  Sparkles,
  Droplet,
  Activity,
  HeartPulse,
  BrainCog,
  Flower2,
} from "lucide-react";

const expertise = [
  {
    icon: PersonStanding,
    title: "Personalized Yoga Plans",
    description:
      "Yoga sequences designed around your body, condition, and healing goals.",
  },
  {
    icon: Leaf,
    title: "Herbal Remedies",
    description:
      "Natural, herb-based remedies that support the body's own healing processes.",
  },
  {
    icon: Droplet,
    title: "Detox Therapies",
    description:
      "Naturopathic detox programs to cleanse the body and restore balance.",
  },
  {
    icon: Sparkles,
    title: "Energy Healing",
    description:
      "Restoring the body's natural energy flow to support healing at the root cause.",
  },
  {
    icon: Activity,
    title: "Diabetes Management",
    description:
      "Holistic yoga and naturopathy practices to help regulate blood sugar naturally.",
  },
  {
    icon: HeartPulse,
    title: "Hypertension Management",
    description:
      "Natural therapies and yoga practices to help manage and lower blood pressure.",
  },
  {
    icon: BrainCog,
    title: "Stress-Related Disorders",
    description:
      "Mind-body practices to calm the nervous system and relieve chronic stress.",
  },
  {
    icon: Flower2,
    title: "Root-Cause Healing",
    description:
      "An integrated approach that treats the underlying cause of illness, not just symptoms.",
  },
];

const YogaNaturopathyExpertiseSection = () => {
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
              Holistic Healing Through{" "}
              <span className="text-primary">Yoga & Naturopathy</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A natural, integrated approach that combines yoga, naturopathy,
              and energy healing to address root causes and restore lasting
              wellness.
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

export default YogaNaturopathyExpertiseSection;
