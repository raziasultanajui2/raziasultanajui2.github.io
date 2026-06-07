import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Bangla Hate Speech Detection using NLP",
    description:
      "Undergraduate thesis research. Developed deep-learning models (BiLSTM, CNN-LSTM, mBERT, XLM-R) to detect hate speech in Bangla text, with a preprocessing pipeline that normalizes Bangla data for higher classification accuracy.",
    tags: ["Python", "NLP", "Deep Learning", "BiLSTM", "mBERT", "XLM-R", "PyTorch"],
    github: "https://github.com",
    live: null,
    period: "2024 – 2025",
    type: "Research",
    featured: true,
  },
  {
    title: "Heart Disease Prediction using ML",
    description:
      "Diagnostic model on a Kaggle dataset of 1,026 entries using KNN, Decision Tree & Logistic Regression. Achieved 93% accuracy with MinMax and Standard scaling, evaluated via confusion matrices, precision, recall and F1-scores.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    github: "https://github.com",
    live: null,
    period: "Fall 2022",
    type: "Academic",
    featured: true,
  },
  {
    title: "Real Estate Management System",
    description:
      "Full-stack property-trading platform with a dynamic 48-hour bidding system, role-based access, secure listings and price filtering — reducing transaction costs by 9% for rural buyers.",
    tags: ["Django", "Python", "JavaScript", "HTML", "CSS"],
    github: "https://github.com",
    live: null,
    period: "Spring 2021",
    type: "Academic",
    featured: false,
  },
  {
    title: "Gift Cards Zone – E-commerce Website",
    description:
      "Full-stack e-commerce platform for a multi-purpose retail brand, with subscription-based reviews, sales tracking and admin recommendation features.",
    tags: ["WordPress", "PHP", "CSS"],
    github: null,
    live: "https://example.com",
    period: "June 2021",
    type: "Professional",
    featured: false,
  },
  {
    title: "Fire and Smoke Detection System",
    description:
      "Arduino-based safety system detecting fire, smoke and gas leaks with flame & MQ2 sensors, DHT22 temperature monitoring, an LCD display and a buzzer/LED alert mechanism.",
    tags: ["C++", "Arduino", "DHT22", "MQ2", "Embedded Systems"],
    github: "https://github.com",
    live: null,
    period: "Summer 2022",
    type: "Academic",
    featured: false,
  },
];

const typeStyles: Record<string, string> = {
  Research: "border-pink-500/30 bg-pink-500/10 text-pink-300",
  Professional: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Academic: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
};

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
        featured ? "md:p-8" : ""
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${typeStyles[project.type]}`}
        >
          {project.type}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
      </div>

      <h3
        className={`mb-3 text-foreground transition-colors group-hover:text-primary ${
          featured ? "text-2xl" : "text-lg"
        }`}
      >
        {project.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-background/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:opacity-80"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>

      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-60" />
    </div>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Research, professional and academic work across ML, web development and embedded systems."
        />

        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
