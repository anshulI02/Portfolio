"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar: transparent over the hero, frosted-solid after scrolling.
 * Highlights the section currently in view; collapses to a hamburger on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const sectionIds = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when a link is chosen.
  const handleNav = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-base-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-16 max-w-content items-center justify-center px-5 md:px-8"
      >
        {/* Desktop links — centered */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    isActive ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
          <li className="ml-2">
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent transition-all hover:border-accent/60 hover:bg-accent/15"
            >
              <FileText size={15} aria-hidden />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger — absolute right */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="absolute right-5 grid h-10 w-10 place-items-center rounded-lg border border-line text-ink-dim transition-colors hover:text-ink md:hidden"
        >
          {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-line bg-base-950/95 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNav}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                      active === link.href.slice(1)
                        ? "bg-base-850 text-accent"
                        : "text-ink-dim hover:bg-base-900 hover:text-ink"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNav}
                  className="flex items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2.5 text-sm font-medium text-accent"
                >
                  <FileText size={15} aria-hidden />
                  View Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
