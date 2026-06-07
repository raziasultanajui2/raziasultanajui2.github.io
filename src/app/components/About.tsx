import { GraduationCap, FlaskConical, Globe } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const cards = [
  {
    Icon: GraduationCap,
    title: "Education",
    body: "BSc in Computer Science & Engineering from BRAC University (2018–2023), CGPA 3.25 / 4.00.",
    accent: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400",
  },
  {
    Icon: FlaskConical,
    title: "Research",
    body: "Undergraduate thesis on Bangla hate-speech detection using BiLSTM, CNN-LSTM, mBERT & XLM-R transformer models.",
    accent: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    Icon: Globe,
    title: "Development",
    body: "Full-stack web development with Django, React, Node.js, and WordPress across academic and professional projects.",
    accent: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building intelligent, impactful systems"
          description="I'm a Computer Science & Engineering graduate from BRAC University with a strong interest in Security, Privacy, and AI-driven solutions."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/60">
                    <card.Icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-xl text-foreground">{card.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
