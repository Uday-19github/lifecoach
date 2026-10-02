import ScrollReveal from "./ScrollReveal";
import {
  UserCheck,
  FlaskConical,
  HeartHandshake,
  Clock,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Personalized Plans",
    desc: "Every program is tailored to your unique body, goals, and lifestyle.",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed Methods",
    desc: "Evidence-based nutrition combined with time-tested holistic practices.",
  },
  {
    icon: HeartHandshake,
    title: "Mind-Body Approach",
    desc: "True wellness integrating physical health, mental clarity, and emotional balance.",
  },
  {
    icon: Clock,
    title: "10+ Years Expertise",
    desc: "A decade of clinical experience across nutrition, naturopathy, and energy healing.",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    desc: "Ongoing guidance and check-ins to keep you on track throughout your journey.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-primary/5 via-background to-primary/5">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">
              Why Choose Me
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A Holistic Approach to{" "}
              <span className="text-primary">Your Wellbeing</span>
            </h2>

            <p className="text-muted-foreground">
              Combining clinical expertise with compassionate care to guide you
              toward lasting health and balance.
            </p>
          </div>
        </ScrollReveal>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 100}>
              <div className="group relative bg-white/70 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <r.icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  {r.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {r.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
