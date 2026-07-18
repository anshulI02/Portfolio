"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin cyan progress bar along the very top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent to-accent-blue"
      style={{ scaleX }}
    />
  );
}
