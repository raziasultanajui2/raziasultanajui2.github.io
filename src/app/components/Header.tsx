import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            className="grid h-9 w-9 place-items-center rounded-xl font-display text-base text-white shadow-lg"
            style={{ background: "var(--brand-gradient)" }}
          >
            J
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Jui
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === link.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-accent" />
              )}
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] active:scale-[0.98] md:flex"
            style={{ background: "var(--brand-gradient)" }}
          >
            <MessageCircle className="h-4 w-4" />
            Let's chat
          </button>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  active === link.id
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm text-white"
              style={{ background: "var(--brand-gradient)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Let's chat
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
