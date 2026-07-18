import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { education, skillCategories, type SkillLevel } from "@/lib/data";
import { cn } from "@/lib/utils";

const LEVEL_LABELS: Record<SkillLevel, string> = {
  1: "Familiar",
  2: "Familiar",
  3: "Solid foundations",
  4: "Strong working proficiency",
  5: "Daily driver",
};

function chipClass(_level: SkillLevel) {
  return "border-accent/40 bg-accent/10 text-accent";
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-16">
        <SectionHeading
          eyebrow="Education & Skills"
          title="A toolbox that spans the stack"
          description="I have gained these skills through multiple academic projects and co-ops, applying them hands-on across embedded systems, power electronics, and hardware validation."
        />

        {/* Education, merged in as the foundation the skills were built on */}
        <Reveal className="mb-10 md:mb-12">
          <div className="w-fit rounded-2xl border border-line bg-base-900/60 px-5 py-4 shadow-card md:px-6">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/25 bg-base-850 text-accent">
                <GraduationCap size={17} aria-hidden />
              </span>
              <div>
                <p className="flex items-baseline justify-between gap-6 font-display text-base font-semibold text-ink">
                  {education.school}
                  <span className="font-mono text-xs font-normal text-ink-faint">{education.period} · Graduated</span>
                </p>
                <p className="mt-1 text-sm text-ink-dim">
                  {education.degree} <span className="text-ink-faint">· {education.program}</span>
                </p>
                <div className="mt-4">
                  <p className="mb-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-faint">
                    Relevant coursework
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-md border border-line bg-base-850 px-2.5 py-1 text-xs text-ink-dim"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>


        <div className="flex flex-col gap-7">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.04}>
              <div className="grid items-start gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-5">
                <div className="sm:pt-1">
                  <h3 className="font-mono text-sm font-medium uppercase tracking-[0.10em] text-ink">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      title={LEVEL_LABELS[skill.level]}
                      className={cn(
                        "self-start rounded-md border px-2.5 py-1 text-sm transition-colors",
                        chipClass(skill.level)
                      )}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

