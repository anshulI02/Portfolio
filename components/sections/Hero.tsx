"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, FolderOpen } from "lucide-react";
import PcbTraces from "@/components/PcbTraces";
import { site } from "@/lib/data";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-8">
      <PcbTraces />

      <div className="relative mx-auto flex max-w-content flex-col items-center justify-center px-5 pb-10 pt-12 text-center md:px-8 md:pb-16 md:pt-20">
        <motion.h1
          {...fadeUp(0)}
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gold sm:text-6xl md:text-7xl"
        >
          {site.name}
          <span className="mt-4 block text-accent">
            {site.tagline}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-7 font-mono text-sm text-ink-faint"
        >
          {site.headline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.18)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-blue px-5 py-3 text-sm font-semibold text-base-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <FolderOpen size={16} aria-hidden />
            View Projects
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-base-900/60 px-5 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Briefcase size={16} aria-hidden />
            Work Experience
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-ink-dim transition-colors hover:text-ink"
          >
            Contact Me
            <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
