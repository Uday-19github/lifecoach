import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Working Professional",
    text: "Manjiree completely transformed my relationship with food. Her holistic approach helped me lose 12 kgs and gain so much energy and confidence!",
    stars: 5,
  },
  {
    name: "Ananya Desai",
    role: "New Mother",
    text: "Post-pregnancy, I struggled with my health. Manjiree's personalized plan was practical, gentle, and incredibly effective. I feel like myself again.",
    stars: 5,
  },
  {
    name: "Rajesh Mehta",
    role: "Corporate Executive",
    text: "The corporate wellness program was a game-changer for our team. Productivity went up, sick days went down. Highly recommend her expertise.",
    stars: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Fitness Enthusiast",
    text: "Her energy healing sessions brought a sense of calm I didn't know I was missing. The combination of nutrition and mindfulness is truly powerful.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">
              Testimonials
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Stories of <span className="text-primary">Transformation</span>
            </h2>

            <p className="text-muted-foreground">
              Real experiences from individuals who embraced holistic wellness.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Card */}
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto">

            <div className="relative bg-white/80 backdrop-blur-xl border border-primary/10 rounded-3xl shadow-xl px-8 py-12 md:px-16 md:py-16 text-center transition-all duration-500">

              {/* Decorative Quote */}
              <Quote
                size={64}
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary/10"
              />

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl leading-relaxed text-foreground italic mb-8 transition-opacity duration-500">
                “{testimonials[current].text}”
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary"
                    />
                  )
                )}
              </div>

              {/* Name + Role */}
              <div>
                <p className="font-serif text-lg font-bold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-10">

              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-primary/20 bg-white hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 ${
                      i === current
                        ? "w-8 h-2 bg-primary rounded-full"
                        : "w-2 h-2 bg-primary/30 rounded-full"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-primary/20 bg-white hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={20} />
              </button>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
