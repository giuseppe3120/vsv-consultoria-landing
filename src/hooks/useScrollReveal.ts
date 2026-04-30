import { useEffect, useRef } from "react";

export function useScrollReveal(staggerMs = 100) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".scroll-reveal");

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
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [staggerMs]);

  return containerRef;
}
