import ScrollReveal from "./ScrollReveal";
import { 
  Heart, 
  UtensilsCrossed, 
  Zap,
  Star,
  Mail
} from "lucide-react";

interface ExpertiseCard {
  icon: typeof Heart;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  cta: string;
  color: "primary" | "secondary" | "accent";
}

const getColorClasses = () => {
  // Use primary color for all cards to ensure consistent visibility
  return {
    bg: "bg-primary/5",
    bgLight: "bg-primary/10",
    text: "text-primary",
    hoverBg: "hover:bg-primary",
    border: "border-primary/10"
  };
};

const expertiseCards: ExpertiseCard[] = [
  {
    icon: Heart,
    title: "Meet Manjiree",
    subtitle: "A Holistic Wellness Expert",
    description: "With a passion for empowering individuals to achieve optimal health and well-being, Manjiree is a multi-faceted wellness expert with a diverse range of certifications and expertise.",
    highlights: [
      "Clinical Dietician & Sports Nutritionist",
      "Certified Naturopath",
      "Certified Yoga Trainer & Spa Therapist",
      "Reiki Grandmaster & Pranic Healer",
      "Certified Tarot Reader & LamaFera Therapist"
    ],
    cta: "Let's Connect!",
    color: "primary"
  },
  {
    icon: UtensilsCrossed,
    title: "Clinical Dietician",
    subtitle: "& Nutritionist",
    description: "As a dedicated dietician, I specialize in creating personalized nutrition plans for individuals with various health concerns.",
    highlights: [
      "Diabetes Management",
      "Renal & Heart Health",
      "Thyroid Disorders & Weight Management",
      "PCOD & Hormonal Balance",
      "Pre & Post EVLT Nutrition Guidance"
    ],
    cta: "Let's Connect!",
    color: "secondary"
  },
  {
    icon: Zap,
    title: "Energy Healer",
    subtitle: "& Spiritual Guide",
    description: "Manjiree helps people overcome physical, emotional, and spiritual blocks using Reiki, Pranic Healing, and Lama Fera techniques.",
    highlights: [
      "Reiki & Pranic Healing",
      "Lama Fera Therapy",
      "Deep Relaxation & Stress Relief",
      "Intuitive Guidance & Tarot Reading",
      "Past Life Regression Therapy"
    ],
    cta: "Let's Connect!",
    color: "accent"
  }
];

const ExpertiseCardsSection = () => {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container-narrow mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">
              Our Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Comprehensive <span className="text-primary">Wellness Solutions</span>
            </h2>
            <p className="text-muted-foreground">
              Discover our holistic approach to health and well-being
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {expertiseCards.map((card, index) => {
const colorClasses = getColorClasses();
            
            return (
              <ScrollReveal key={card.title} delay={index * 150}>
                <div className={`group bg-white rounded-3xl p-8 shadow-lg ${colorClasses.border} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden`}>
                  
                  {/* Decorative Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colorClasses.bg} rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses.bgLight} flex items-center justify-center mb-6 transition-all duration-300 group-hover:${colorClasses.hoverBg}`}>
                    <card.icon
                      size={32}
                      className={`${colorClasses.text} group-hover:text-white transition-colors duration-300`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                    {card.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Highlights List */}
                  <div className="flex-grow space-y-3 mb-6">
                    {card.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Star 
                          size={14} 
                          className="text-primary mt-1 flex-shrink-0" 
                          fill="currentColor"
                        />
                        <span className="text-sm text-foreground">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a href="#contact" className={`w-full py-3 px-6 rounded-xl ${colorClasses.bgLight} ${colorClasses.text} font-semibold ${colorClasses.hoverBg} hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn text-center no-underline`}>
                    <Mail size={18} />
                    {card.cta}
                  </a>

                </div>
              </ScrollReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ExpertiseCardsSection;
