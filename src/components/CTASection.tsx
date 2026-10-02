import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">

      {/* Decorative Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-8 relative z-10 text-center">

        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-8">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Begin Your Journey Toward{" "}
              <span className="text-white/90">Complete Wellness</span>
            </h2>

            {/* Subtext */}
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
              Take the first step toward a healthier, more balanced life.
              Your personalized wellness transformation starts today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">

              <a
                href="#contact"
                className="bg-white text-primary font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base"
              >
                Book a Consultation
              </a>

              <a
                href="#services"
                className="border border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-base"
              >
                Explore Services
              </a>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CTASection;
