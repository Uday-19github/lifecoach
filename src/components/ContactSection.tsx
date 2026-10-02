import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxDA6ZLkYC59qzHcCR1fnhUSOYuMyBUzO2PwPzMwe3_S7uuq7hi9MR5O84VIPND0GZYMQ/exec";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      setSubmitStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container-narrow mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">
              Get In Touch
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Let's Begin Your{" "}
              <span className="text-primary">Wellness Journey</span>
            </h2>

            <p className="text-muted-foreground">
              Have questions or ready to start? Reach out and take the first
              step toward a healthier, more balanced life.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

          {/* Contact Info Card */}
          <ScrollReveal className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 shadow-md space-y-8">

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    lifecoachmanjiree@yahoo.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    +91 9987748028
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Clinic</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={150} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 shadow-lg space-y-6"
            >

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />

              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
              />

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                  Thank you! Your message has been received. We'll be in touch soon.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                  Sorry, something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
