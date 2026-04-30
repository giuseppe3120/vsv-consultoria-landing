interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  accentIndices?: number[];
}

export default function Marquee({ items, direction = "left", accentIndices = [] }: MarqueeProps) {
  const content = items.join(" • ") + " • ";
  const doubled = content + content;
  const trackClass = direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div className="marquee-container relative overflow-hidden py-5" style={{
      maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    }}>
      <div className={`${trackClass} flex whitespace-nowrap`}>
        {[0, 1].map((i) => (
          <span key={i} className="flex gap-0 whitespace-nowrap">
            {items.map((item, idx) => (
              <span key={`${i}-${idx}`} className="flex items-center">
                <span
                  className={`font-heading text-2xl font-bold tracking-wider sm:text-3xl lg:text-4xl ${
                    accentIndices.includes(idx)
                      ? "text-accent/60"
                      : "text-primary/20"
                  }`}
                  style={{
                    WebkitTextStroke: accentIndices.includes(idx) ? "none" : "1.5px oklch(0.30 0.05 155 / 0.3)",
                    color: accentIndices.includes(idx) ? undefined : "transparent",
                  }}
                >
                  {item}
                </span>
                <span className="mx-4 text-2xl text-primary/15 sm:mx-6">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
