import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const contactInfo = [
  { Icon: Mail, label: "Email", value: "raziasultanajui2@gmail.com", href: "mailto:raziasultanajui2@gmail.com", color: "text-pink-400" },
  { Icon: Phone, label: "Phone", value: "+(1)-682-227-1680", href: "tel:+16822271680", color: "text-cyan-400" },
  { Icon: MapPin, label: "Location", value: "Arlington, TX, USA", href: null, color: "text-indigo-400" },
];

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Errors = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (!formData.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Please enter a valid email address.";
    if (!formData.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulated async submit
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 900);
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-xl border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-ring ${
      hasError ? "border-destructive" : "border-border focus:border-primary/50"
    }`;

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something together"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-8 md:grid-cols-5">
          {/* Form */}
          <Reveal className="md:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass(errors.name)}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass(errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldClass(errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting || sent}
                  className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent
                    </>
                  ) : submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p aria-live="polite" className="sr-only">
                  {sent ? "Your message has been sent." : ""}
                </p>
              </form>
            </div>
          </Reveal>

          {/* Contact details */}
          <div className="flex flex-col gap-4 md:col-span-2">
            {contactInfo.map((item, i) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-border bg-background/60">
                    <item.Icon className={`h-5 w-5 ${item.color}`} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-foreground">{item.label}</p>
                    <p className="truncate text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={item.label} delay={i * 0.1}>
                  {item.href ? (
                    <a href={item.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
