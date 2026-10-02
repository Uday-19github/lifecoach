import ScrollReveal from "./ScrollReveal";
import { Leaf, Sparkles, Moon, HeartHandshake } from "lucide-react";

const philosophy = [
  {
    icon: Leaf,
    title: "A Holistic Approach",
    description:
      "Manjiree is not just a dietician, but also a Certified Naturopath, using natural remedies and therapies to promote overall well-being. Her expertise in Yoga and Spa Therapy enables her to guide clients towards physical, mental, and emotional balance.",
  },
  {
    icon: Sparkles,
    title: "Energy Healing & Spiritual Guidance",
    description:
      "As a Reiki Grandmaster, Pranic Healer, and LamaFera Therapist, Manjiree facilitates spiritual growth and healing, helping clients connect with their inner selves. Her expertise in Tarot Reading and Dowsing enables her to offer intuitive guidance and clarity.",
  },
  {
    icon: Moon,
    title: "Exploring the Depths of the Soul",
    description:
      "Through Past Life Regression, Manjiree helps clients uncover and resolve deep-seated issues, promoting soul-level healing and transformation. Her approach is compassionate, non-judgmental, and tailored to each individual's unique needs.",
  },
  {
    icon: HeartHandshake,
    title: "Empowering Transformation",
    description:
      "Manjiree works with individuals seeking weight management, stress relief, and spiritual growth. Her holistic approach integrates nutrition, energy healing, and mindfulness practices, empowering clients to achieve lasting transformation.",
  },
];

const AboutPhilosophySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase font-sans">
              Her Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A Journey Through{" "}
              <span className="text-primary">Mind, Body & Spirit</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {philosophy.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 120}>
              <div className="group bg-white rounded-3xl p-8 border border-primary/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary">
                  <item.icon
                    size={26}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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

export default AboutPhilosophySection;
