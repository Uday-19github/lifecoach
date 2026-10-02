import ScrollReveal from "./ScrollReveal";
import { Sparkles, Mail, Send } from "lucide-react";

const OneToOneConnectSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">

      {/* Decorative Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto space-y-8">

            <Sparkles className="mx-auto text-white/90" size={40} />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let's Connect!
            </h2>

            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              I work closely with clients to understand their unique needs
              and develop comprehensive plans to achieve optimal health.
              Let's connect to explore how I can support your wellness
              journey!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-2">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-base"
              >
                <Send size={18} />
                Book a Session
              </a>

              <a
                href="mailto:lifecoachmanjiree@yahoo.com"
                className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-base"
              >
                <Mail size={18} />
                Email Manjiree
              </a>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OneToOneConnectSection;
