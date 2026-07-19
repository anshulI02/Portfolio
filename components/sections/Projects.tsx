"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { projectCategories, projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectLinks({ links }: { links: Project["links"] }) {
  if (!links.github && !links.docs && !links.demo) return null;
  return (
    <div className="mt-3 flex items-center gap-4">
      {links.github && (
        <a href={links.github} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-ink-faint transition-colors hover:text-accent">
          <Github size={14} aria-hidden /> Code
        </a>
      )}
      {links.docs && (
        <a href={links.docs} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-ink-faint transition-colors hover:text-accent">
          <ExternalLink size={14} aria-hidden /> Docs
        </a>
      )}
      {links.demo && (
        <a href={links.demo} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-ink-faint transition-colors hover:text-accent">
          <ExternalLink size={14} aria-hidden /> Demo
        </a>
      )}
    </div>
  );
}

function projectFile(project: Project) {
  const hasAsm = project.tech.some((t) => /assembly/i.test(t));
  const ext = hasAsm ? "asm" : project.category === "FPGA & RF" ? "sv" : "c";
  return "~/" + project.slug + "." + ext;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.05}>
      <article className="group flex h-full flex-col rounded-xl border border-line bg-base-900/70 p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="truncate font-mono text-[0.625rem] text-ink-faint">
            {projectFile(project)}
          </span>
          {project.featured && (
            <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[0.625rem] text-coral">
              <Star size={10} aria-hidden /> Featured
            </span>
          )}
        </div>

        <h3 className="font-display text-base font-semibold leading-snug text-ink underline">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-ink-dim">
          {project.summary}
        </p>

        <div className="mt-auto pt-4">
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li key={t}
                className="rounded border border-line bg-base-850 px-2 py-0.5 font-mono text-[0.625rem] text-ink-faint transition-colors group-hover:border-accent/15">
                {t}
              </li>
            ))}
          </ul>
          <ProjectLinks links={project.links} />
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");

  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-16">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have designed, built, and debugged"
          description="From a satellite-tracking phased array to assembly-language clocks. Every project here was validated on real hardware or against it."
        />

        <Reveal className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button key={cat} type="button" onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm transition-all",
                filter === cat
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-line text-ink-dim hover:border-accent/25 hover:text-ink"
              )}>
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}