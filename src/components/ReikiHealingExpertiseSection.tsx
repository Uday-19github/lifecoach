import ScrollReveal from "./ScrollReveal";
import {
  Sparkles,
  Flame,
  Infinity,
  Waves,
  Smile,
  ShieldCheck,
  Briefcase,
  Heart,
} from "lucide-react";

const expertise = [
  {
    icon: Sparkles,
    title: "Reiki Healing",
    description:
      "Channeling universal energy to clear blockages and restore natural balance in the body.",
  },
  {
    icon: Flame,
    title: "Pranic Healing",
    description:
      "Working with the body's energy field to cleanse and energize, accelerating the healing process.",
  },
  {
    icon: Infinity,
    title: "Lama Fera Technique",
    description:
      "A powerful healing modality to release deep-seated emotional and spiritual blocks.",
  },
  {
    icon: Waves,
    title: "Deep Relaxation",
    description:
      "Guided healing sessions that calm the nervous system and release built-up tension.",
  },
  {
    icon: Smile,
    title: "Stress Relief & Inner Peace",
    description:
      "Restoring emotional balance and a lasting sense of calm, clarity, and inner peace.",
  },
  {
    icon: Briefcase,
    title: "Career & Relationships",
    description:
      "Clients often experience positive shifts in career and relationships as energy blocks clear.",
  },
  {
    icon: ShieldCheck,
    title: "A Safe Space for Transformation",
    description:
      "Every session is held in a safe, supportive space designed for genuine healing and growth.",
  },
  {
    icon: Heart,
    title: "Overall Well-Being",
    description:
      "Empowering you to tap into your inner strength and achieve lasting balance and wellness.",
  },
];

const ReikiHealingExpertiseSection = () => {
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
              Healing Through{" "}
              <span className="text-primary">Energy & Intuition</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              A blend of Reiki, Pranic Healing, and Lama Fera techniques to
              help you overcome blocks and transform your life.
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

export default ReikiHealingExpertiseSection;
