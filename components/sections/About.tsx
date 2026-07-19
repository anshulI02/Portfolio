import Image from "next/image";
import { GraduationCap, MapPin, Target, Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { about, education, site } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-16">
        <SectionHeading
          eyebrow="About"
          title="Where control logic meets real hardware"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <div className="space-y-5 text-base leading-relaxed text-ink-dim md:text-[1.0625rem]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}

            {about.personalNote && (
              <Reveal delay={0.24}>
                <p className="rounded-xl border border-line bg-base-900/60 p-4 text-ink">
                  <span aria-hidden className="mr-2 select-none font-mono text-xs text-accent">
                    ~/
                  </span>
                  {about.personalNote}
                </p>
              </Reveal>
            )}

          </div>

          {/* Portrait + quick facts */}
          <Reveal delay={0.1}>
            <div className="flex min-h-[420px] overflow-hidden rounded-2xl border border-line bg-base-900/60 shadow-card">
              {/* Left — full-height photo */}
              <div className="relative w-1/2 shrink-0">
                <Image
                  src="/images/Profile .jpeg"
                  alt="Anshul Israni"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Right — quick facts */}
              <ul className="flex flex-col justify-center gap-5 p-6 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span className="text-ink-dim">{site.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span className="text-ink-dim">
                    {education.degree}, UBC. Graduated May 2026
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span className="text-ink-dim">
                    Hardware <span className="text-ink-faint">and</span> software, fluent on both sides of the interface
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Target size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <span className="text-ink-dim">
                    Aiming for embedded, validation & systems roles in power, robotics, or silicon
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

