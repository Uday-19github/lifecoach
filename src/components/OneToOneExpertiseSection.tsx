import ScrollReveal from "./ScrollReveal";
import {
  Droplet,
  Filter,
  HeartPulse,
  Activity,
  Scale,
  Syringe,
  Flower2,
  Salad,
} from "lucide-react";

const expertise = [
  {
    icon: Droplet,
    title: "Diabetes Management",
    description:
      "Tailored diets to regulate blood sugar levels and improve insulin sensitivity.",
  },
  {
    icon: Filter,
    title: "Renal Nutrition",
    description:
      "Customized meal plans for patients with kidney disease, focusing on protein restriction and electrolyte balance.",
  },
  {
    icon: HeartPulse,
    title: "Heart Health",
    description:
      "Diets designed to lower cholesterol, manage blood pressure, and reduce cardiovascular risk.",
  },
  {
    icon: Activity,
    title: "Thyroid Disorders",
    description:
      "Nutrition plans to support thyroid function and manage weight.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description:
      "Sustainable weight loss strategies through balanced eating and lifestyle changes.",
  },
  {
    icon: Syringe,
    title: "EVLT (Endovenous Laser Therapy)",
    description:
      "Pre- and post-procedure nutrition guidance for optimal recovery.",
  },
  {
    icon: Flower2,
    title: "PCOD (Polycystic Ovarian Disease)",
    description:
      "Diets to regulate hormones, improve insulin sensitivity, and manage symptoms.",
  },
  {
    icon: Salad,
    title: "Hemorrhoids",
    description:
      "High-fiber diets and nutrition advice to alleviate symptoms and promote healing.",
  },
];

const OneToOneExpertiseSection = () => {
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
              Personalized Nutrition for{" "}
              <span className="text-primary">Every Health Concern</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              I work closely with clients to understand their unique needs
              and develop comprehensive plans to achieve optimal health.
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

export default OneToOneExpertiseSection;
