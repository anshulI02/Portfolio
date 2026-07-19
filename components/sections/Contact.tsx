import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/data";

type Channel = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

const channels: Channel[] = [
  { icon: Phone,    label: "Phone",    value: site.phone,   href: `tel:${site.phone}` },
  { icon: Mail,     label: "Email",    value: site.email,   href: `mailto:${site.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anshul-israni-24004b204", href: site.linkedin },
  { icon: Github,   label: "GitHub",   value: "github.com/anshulI02", href: site.github },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — text */}
          <Reveal>
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              <span aria-hidden className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-accent" />
              Contact
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-gold md:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-dim">
              Recruiting for an embedded, validation, hardware, or systems role, or just want to talk? Feel free to reach out!
            </p>
          </Reveal>

          {/* Right — stacked tiles */}
          <div className="flex flex-col gap-3">
            {channels.map((c, i) => {
              const Icon = c.icon;
              const external = c.href?.startsWith("http");
              const Tag = c.href ? "a" : "div";
              const linkProps = c.href
                ? { href: c.href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                : {};

              return (
                <Reveal key={c.label} delay={i * 0.07}>
                  <Tag
                    {...(linkProps as object)}
                    className="group flex items-center gap-5 rounded-2xl border border-line bg-base-900/60 px-6 py-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lift"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-base-850 text-accent transition-colors group-hover:border-accent/40">
                      <Icon size={22} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">{c.label}</p>
                      <p className="mt-1 truncate text-lg font-medium text-ink">{c.value}</p>
                    </div>
                  </Tag>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
