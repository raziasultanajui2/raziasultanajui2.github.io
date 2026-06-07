import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <Reveal className={`mb-14 flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 self-auto font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-primary" />
        {eyebrow}
      </span>
      <h2 className="text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
