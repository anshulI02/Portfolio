import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  /** Mono "silkscreen" label, e.g. "ABOUT" */
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * Shared section header: a silkscreen-style mono eyebrow with a leading
 * trace line, a display title, and an optional one-line description.
 */
export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-12">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        <span aria-hidden className="inline-block h-px w-8 bg-gradient-to-r from-transparent to-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-gold md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">{description}</p>
      )}
    </Reveal>
  );
}
