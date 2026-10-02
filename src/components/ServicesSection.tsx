import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { Apple, Dumbbell, Flower2, Wand2, HandHeart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Apple,
    title: "Clinical Nutrition & Diet Planning",
    desc: "Personalized, evidence-based diet plans tailored to your health conditions, goals, and lifestyle preferences.",
    href: "/services/one-to-one-session",
    linkLabel: "One-to-One Personal Session",
  },
  {
    icon: Dumbbell,
    title: "Clinical Dietician & Sports Nutritionist",
    desc: "Performance-driven nutrition for athletes and active individuals, built around fueling, recovery, and injury prevention.",
    href: "/services/sports-nutrition",
    linkLabel: "Explore Sports Nutrition",
  },
  {
    icon: Flower2,
    title: "Yoga & Naturopathy Expert",
    desc: "Personalized yoga plans, herbal remedies, and detox therapies that combine yoga, naturopathy, and energy healing to treat root causes.",
    href: "/services/yoga-naturopathy",
    linkLabel: "Explore Holistic Treatments",
  },
  {
    icon: Wand2,
    title: "Tarot & Dowsing",
    desc: "Intuitive guidance sessions to help you find clarity on relationships, career, money, and health.",
    href: "/services/tarot-dowsing",
    linkLabel: "Book a Tarot Reading",
  },
  {
    icon: HandHeart,
    title: "Reiki, Pranic Healing & Lama Fera",
    desc: "Energy healing to overcome physical, emotional, and spiritual blocks, restoring deep relaxation and inner peace.",
    href: "/services/reiki-healing",
    linkLabel: "Explore Energy Healing",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              Services
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Comprehensive Wellness{" "}
              <span className="text-primary">Solutions</span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              From clinical nutrition to energy healing — a complete and
              integrated approach to restoring balance in your life.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="group bg-white rounded-3xl p-8 shadow-lg border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary">
                  <s.icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-snug">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {s.desc}
                </p>

                {/* Optional Link */}
                {s.href && (
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 pt-5 mt-5 border-t border-border/50"
                  >
                    {s.linkLabel ?? "Learn More"}
                    <ArrowRight size={16} />
                  </Link>
                )}

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
