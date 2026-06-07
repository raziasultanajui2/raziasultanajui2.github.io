import { Code2, Layers, Database, Brain, Cpu, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const skillCategories = [
  {
    category: "Languages",
    Icon: Code2,
    skills: ["Python", "Java", "C", "C++", "MATLAB", "JavaFX", "Bash", "Assembly", "Swing"],
  },
  {
    category: "ML / NLP",
    Icon: Brain,
    skills: ["PyTorch", "scikit-learn", "pandas", "NumPy", "BERT", "RAG", "LLM", "VLM"],
  },
  {
    category: "Databases",
    Icon: Database,
    skills: ["Oracle", "MySQL", "SQLite", "MongoDB"],
  },
  {
    category: "OS",
    Icon: Cpu,
    skills: ["Linux (Ubuntu, Kali)", "Windows"],
  },
  {
    category: "Version Control",
    Icon: Wrench,
    skills: ["Git", "GitHub"],
  },
  {
    category: "Frameworks",
    Icon: Layers,
    skills: ["Django", "Node.js", "React", "JavaFX"],
  },
  {
    category: "Web",
    Icon: Layers,
    skills: ["HTML", "CSS", "PHP", "Bootstrap", "WordPress", "JSON", "XML"],
  },
  {
    category: "Compiler Tools",
    Icon: Wrench,
    skills: ["Flex", "Bison", "EMU 8086"],
  },
  {
    category: "Microcontrollers",
    Icon: Cpu,
    skills: ["Arduino", "ATMega 32", "Atmel Studio", "Proteus 832"],
  },
  {
    category: "Writing",
    Icon: Wrench,
    skills: ["LATEX", "Beamer", "Overleaf"],
  },
  {
    category: "Other",
    Icon: Wrench,
    skills: ["NS3", "iGraphics", "Cisco Packet Tracer", "OpenGL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      {/* subtle separator backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical Skills"
          description="Languages, ML/NLP tools, databases, operating systems, frameworks, web technologies and supporting tools from research, academic and professional work."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.category} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background/60 text-primary">
                    <category.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
