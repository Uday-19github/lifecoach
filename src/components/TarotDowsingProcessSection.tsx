import ScrollReveal from "./ScrollReveal";
import { MessageCircleQuestion, Layers, Eye, MapPin, Video } from "lucide-react";

const steps = [
  {
    icon: MessageCircleQuestion,
    title: "Ask Your Question",
    description:
      "You ask me a specific question or identify an area of your life you'd like guidance on.",
  },
  {
    icon: Layers,
    title: "Cards Are Drawn",
    description:
      "I draw cards from the tarot deck in response to your question.",
  },
  {
    icon: Eye,
    title: "Insight & Interpretation",
    description:
      "I interpret their meaning in context, giving you clarity and confidence to move forward.",
  },
];

const TarotDowsingProcessSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              How a Reading Works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Information &amp; Insight to{" "}
              <span className="text-primary">Move Forward With Confidence</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="bg-white rounded-3xl p-8 border border-primary/10 shadow-md h-full flex flex-col text-center items-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="text-primary" size={26} />
                </div>
                <p className="text-primary font-semibold text-xs tracking-widest uppercase mb-2">
                  Step {i + 1}
                </p>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Availability */}
        <ScrollReveal delay={120}>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border text-center sm:text-left">
            <p className="text-muted-foreground text-sm sm:text-base">
              Readings can be done either in person or through an online
              mode of communication.
            </p>
            <div className="flex gap-4 flex-shrink-0">
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <MapPin size={18} />
                In Person
              </div>
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <Video size={18} />
                Online
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default TarotDowsingProcessSection;
