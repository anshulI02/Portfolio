"use client";

/**
 * Signature hero background: a sparse field of PCB traces with vias,
 * where faint signal pulses travel along the copper. Pure SVG + CSS,
 * cheap to render, paused automatically under prefers-reduced-motion
 * (see globals.css).
 */

const TRACES = [
  // Orthogonal + 45° routed paths, PCB style. viewBox is 1200x800.
  "M -40 120 H 260 L 340 200 H 620 L 700 280 H 1240",
  "M -40 420 H 180 L 260 340 H 520 L 600 420 H 900 L 980 500 H 1240",
  "M 80 840 V 640 L 160 560 H 420 L 500 480 H 760",
  "M 1240 640 H 1000 L 920 560 H 700",
  "M 520 -40 V 120 L 600 200 V 360",
  "M 1040 -40 V 100 L 960 180 V 300 L 1040 380 V 520",
];

// [cx, cy] via pads sitting on trace corners/ends.
const VIAS: Array<[number, number]> = [
  [260, 120], [340, 200], [620, 200], [700, 280],
  [180, 420], [260, 340], [520, 340], [600, 420], [900, 420], [980, 500],
  [160, 560], [420, 560], [500, 480], [760, 480],
  [1000, 640], [920, 560], [700, 560],
  [520, 120], [600, 200], [600, 360],
  [1040, 100], [960, 180], [960, 300], [1040, 380],
];

export default function PcbTraces() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft radial glow behind the hero copy */}
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Static copper */}
        {TRACES.map((d, i) => (
          <path key={`t-${i}`} d={d} stroke="rgba(148,163,184,0.10)" strokeWidth="1.5" />
        ))}

        {/* Traveling signal pulses: short bright dashes animated along the same paths */}
        {TRACES.map((d, i) => (
          <path
            key={`p-${i}`}
            d={d}
            className="trace-pulse"
            style={{ animationDelay: `${i * 2.1}s`, animationDuration: `${11 + i * 2}s` }}
            stroke="url(#pulse-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* Via pads */}
        {VIAS.map(([cx, cy], i) => (
          <g key={`v-${i}`}>
            <circle cx={cx} cy={cy} r="4" stroke="rgba(148,163,184,0.16)" strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="1.4" fill="rgba(148,163,184,0.22)" />
          </g>
        ))}

        <defs>
          <linearGradient id="pulse-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Faint blueprint grid, faded out toward the bottom */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 85%)",
        }}
      />
    </div>
  );
}
