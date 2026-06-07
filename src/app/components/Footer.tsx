import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { Icon: Github, href: "https://github.com", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:raziasultanajui2@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg font-display text-sm text-white"
                style={{ background: "var(--brand-gradient)" }}
              >
                J
              </span>
              <span className="font-display text-base font-semibold text-foreground">
                Razia Sultana Jui
              </span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              ML Researcher &amp; Developer building intelligent, impactful systems.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ArrowUp className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Razia Sultana Jui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
