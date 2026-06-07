import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePhoto from "../../imports/Croped_Jui.png";
import cvFile from "../../../imports/Razia_CV.pdf";

const rotatingText =
  "ML RESEARCHER  •  DEVELOPER  •  CSE GRADUATE  •  NLP  •  DEEP LEARNING  •  ";

const socials = [
  { Icon: Github, href: "https://github.com", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:raziasultanajui2@gmail.com", label: "Email" },
];

// stats removed per request

export function Hero() {
  const reduce = useReducedMotion();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden px-4 py-20"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[var(--brand-indigo)] opacity-20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[var(--brand-pink)] opacity-20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center justify-between gap-14 md:flex-row">
          {/* Left: text */}
          <div className="flex-1 space-y-7 text-center md:text-left">
            <motion.div
              {...fade(0)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs tracking-wide text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                {...fade(0.08)}
                className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
              >
                Hi, I'm{" "}
                <span
                  style={{
                    background: "var(--brand-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Razia Sultana Jui
                </span>
              </motion.h1>
              <motion.h2
                {...fade(0.16)}
                className="font-display text-2xl text-muted-foreground sm:text-3xl"
              >
                ML Researcher &amp; Developer
              </motion.h2>
            </div>

            <motion.p
              {...fade(0.24)}
              className="mx-auto max-w-lg leading-relaxed text-muted-foreground md:mx-0"
            >
              CSE graduate from BRAC University with a passion for Security &amp; Privacy research.
              I build intelligent systems using deep learning, NLP, and full-stack web technologies.
            </motion.p>

            <motion.div
              {...fade(0.32)}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-7 py-3 text-sm text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                style={{ background: "var(--brand-gradient)" }}
              >
                Connect Me
              </button>
              <a
                href={cvFile}
                download="Razia_Sultana_Jui_CV.pdf"
                className="flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div {...fade(0.4)} className="flex justify-center gap-3 md:justify-start">
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
            </motion.div>

            {/* Stats */}
            {/* stats removed */}
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-shrink-0 items-center justify-center"
          >
            <div className="relative h-72 w-72 md:h-80 md:w-80">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 320 320"
                xmlns="http://www.w3.org/2000/svg"
                style={reduce ? undefined : { animation: "spin 22s linear infinite" }}
                aria-hidden
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <path
                    id="textCircle"
                    d="M 160,160 m -132,0 a 132,132 0 1,1 264,0 a 132,132 0 1,1 -264,0"
                  />
                </defs>
                <circle
                  cx="160"
                  cy="160"
                  r="150"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="2"
                  strokeDasharray="2 8"
                  strokeLinecap="round"
                />
                <text fontSize="10" fill="currentColor" className="text-muted-foreground" letterSpacing="2">
                  <textPath href="#textCircle">{rotatingText.repeat(2)}</textPath>
                </text>
              </svg>

              {/* Glow behind photo */}
              <div
                aria-hidden
                className="absolute rounded-full opacity-40 blur-2xl"
                style={{ inset: "24px", background: "var(--brand-gradient)" }}
              />

              <div
                className="absolute overflow-hidden rounded-full border-2 border-card shadow-2xl"
                style={{ inset: "24px" }}
              >
                <ImageWithFallback
                  src={profilePhoto}
                  alt="Portrait of Razia Sultana Jui"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary md:block"
      >
        <ArrowDown className={`h-5 w-5 ${reduce ? "" : "animate-bounce"}`} />
      </motion.button>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
