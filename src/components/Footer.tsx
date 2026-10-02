import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/loogo.jpeg";

const quickLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "/testimonials", isRoute: true },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const resolveHref = (href: string) => (onHome ? href : `/${href}`);

  return (
    <footer className="relative bg-gradient-to-b from-foreground to-foreground/95 text-primary-foreground overflow-hidden">

      {/* Subtle Decorative Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-foreground blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground blur-3xl rounded-full" />
      </div>

      <div className="container-narrow mx-auto px-6 lg:px-8 py-16 relative z-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block bg-white rounded-xl p-2">
              <img src={logo} alt="Life Coach Manjiree" className="h-12 w-auto rounded-lg" />
            </Link>

            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Holistic Wellness Expert guiding you toward balance, vitality,
              and long-lasting transformation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">
              Quick Links
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  {l.isRoute ? (
                    <Link
                      to={l.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={resolveHref(l.href)}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">
              Services
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {[
                "Clinical Nutrition",
                "Weight Management",
                "Energy Healing",
                "Stress Management",
                "Corporate Wellness",
              ].map((s) => (
                <li key={s}>
                  <a
                    href={resolveHref("#services")}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>lifecoachmanjiree@yahoo.com</li>
              <li>+91 9987748028</li>
              <li>Mumbai, Maharashtra, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-14 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Life Coach Manjiree. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
