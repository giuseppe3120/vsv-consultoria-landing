import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal(staggerMs = 100) {
  const containerRef = useRef<HTMLDivElement>(null);

  const reveal = useCallback(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".scroll-reveal:not(.revealed)");

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = parseInt(el.dataset.stagger || "0", 10);
            setTimeout(() => {
              el.classList.add("revealed");
            }, index * staggerMs);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [staggerMs]);

  useEffect(() => {
    // Small delay to ensure hydration is complete
    const timer = setTimeout(reveal, 50);
    return () => clearTimeout(timer);
  }, [reveal]);

  return containerRef;
}
