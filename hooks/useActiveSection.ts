"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which page section is currently in view so the navbar can
 * highlight the matching link. Uses a single IntersectionObserver with
 * a band around the upper-middle of the viewport.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Trigger when a section crosses the band 20%–45% from the top.
      { rootMargin: "-20% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
