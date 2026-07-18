import { Calendar, MapPin, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CompanyLogo from "@/components/CompanyLogo";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line bg-base-900/40">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-16">
        <SectionHeading
          eyebrow="Work Experience"
          title="Five roles of real engineering"
          description="Co-op and internship roles across energy systems, e-mobility, biotech R&D, and AI automation."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div
            aria-hidden
            className="absolute bottom-6 left-[19px] top-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent md:left-[23px]"
          />

          <ol className="space-y-5">
            {experiences.map((exp, i) => {
              const current = i === 0;
              return (
                <Reveal key={`${exp.company}-${exp.role}`} delay={i * 0.05}>
                  <li className="relative pl-14 md:pl-16">
                    {/* Timeline node */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-xl border transition-colors md:h-12 md:w-12",
                        current
                          ? "border-accent/50 bg-white shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                          : "border-line bg-white"
                      )}
                    >
                      <CompanyLogo
                        logo={exp.logo}
                        monogram={exp.monogram}
                        company={exp.company}
                        className={current ? "text-accent" : "text-ink-faint"}
                      />
                    </span>

                    <article className="group rounded-2xl border border-line bg-base-900/70 p-5 shadow-card transition-all duration-300 hover:border-accent/25 hover:shadow-lift md:p-6">
                      {/* Header */}
                      <h3 className="font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1.5 text-base text-ink-dim">
                        <span className="font-medium text-ink">{exp.company}</span>
                        <span className="text-ink-faint"> · {exp.descriptor}</span>
                        <span className="ml-3 inline-flex items-center gap-1 font-mono text-sm text-ink-faint">
                          <Calendar size={12} aria-hidden /> {exp.period}
                        </span>
                        {exp.duration && (
                          <span className="ml-2 font-mono text-sm text-ink-faint">· {exp.duration}</span>
                        )}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 font-mono text-sm text-ink-faint">
                        <MapPin size={12} aria-hidden /> {exp.location}
                      </p>

                      {/* Short summary, always visible */}
                      <p className="mt-3 text-base leading-relaxed text-ink-dim">{exp.summary}</p>

                      {/* Impact */}
                      {exp.impact && (
                        <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-coral/25 bg-coral/5 px-3 py-1.5 text-sm font-medium text-coral">
                          <TrendingUp size={14} aria-hidden />
                          {exp.impact}
                        </p>
                      )}

                      {/* Tech */}
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-line bg-base-850 px-2.5 py-1 font-mono text-xs text-ink-faint transition-colors group-hover:border-accent/15"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

