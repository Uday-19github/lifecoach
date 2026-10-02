import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const serviceLinks = [
  { label: "One-to-One Session", href: "/services/one-to-one-session" },
  { label: "Clinical Dietician & Sports Nutritionist", href: "/services/sports-nutrition" },
  { label: "Yoga & Naturopathy Expert", href: "/services/yoga-naturopathy" },
  { label: "Tarot & Dowsing", href: "/services/tarot-dowsing" },
  { label: "Reiki, Pranic Healing & Lama Fera", href: "/services/reiki-healing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksBeforeServices = [
    { label: "Home", href: "#home" },
    { label: "About", href: "/about", isRoute: true },
  ];

  const linksAfterServices = [
    { label: "Certificates", href: "/certificates", isRoute: true },
    { label: "Events", href: "/events", isRoute: true },
    { label: "Testimonials", href: "/testimonials", isRoute: true },
  ];

  // Section anchors only resolve on the homepage; from any other page,
  // route back to "/" first so the hash can scroll once it lands.
  const resolveHref = (href: string) => (onHome ? href : `/${href}`);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          scrolled
            ? "max-w-5xl bg-white/95 shadow-xl h-12 scale-[0.97] border border-border"
            : "max-w-6xl bg-white/40 backdrop-blur-lg border border-border/70 h-16 scale-100"
        } w-full`}
      >
        <div
          className={`relative flex items-center justify-between h-full transition-all duration-500
          ${scrolled ? "px-6" : "px-10"}`}
        >
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif font-semibold text-foreground tracking-tight transition-all duration-500
            ${scrolled ? "text-base" : "text-lg"}`}
          >
            Life Coach <span className="text-primary">Manjiree</span>
          </Link>

          {/* Center Links */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center transition-all duration-500
            ${scrolled ? "gap-6" : "gap-10"}`}
          >
            {linksBeforeServices.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="relative text-sm font-medium text-foreground/90 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={resolveHref(l.href)}
                  className="relative text-sm font-medium text-foreground/90 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}

            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex items-center gap-1 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors group outline-none">
                Services
                <ChevronDown size={14} className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="min-w-[260px]">
                {serviceLinks.map((s) => (
                  <DropdownMenuItem key={s.href} asChild>
                    <Link to={s.href} className="cursor-pointer">
                      {s.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {linksAfterServices.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  className="relative text-sm font-medium text-foreground/90 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={resolveHref(l.href)}
                  className="relative text-sm font-medium text-foreground/90 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          {/* Button */}
          <div className="ml-auto hidden md:block">
            <a
              href={resolveHref("#contact")}
              className={`bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-500 hover:opacity-90
              ${scrolled ? "text-xs px-4 py-1.5" : "text-sm px-5 py-2"}`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="ml-auto md:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-b-3xl px-6 py-4 space-y-3 border-t border-border">
            {linksBeforeServices.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/90 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={resolveHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/90 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              )
            )}

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-sm text-foreground/90 hover:text-foreground transition-colors"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 ml-3 space-y-2 border-l border-border pl-3">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {linksAfterServices.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/90 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={resolveHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/90 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              )
            )}

            <a
              href={resolveHref("#contact")}
              onClick={() => setOpen(false)}
              className="block text-center bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-full"
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
