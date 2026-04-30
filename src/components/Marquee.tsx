interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  accentIndex?: number;
}

export default function Marquee({ items, direction = "left", accentIndex }: MarqueeProps) {
  const trackClass = direction === "left" ? "marquee-track-left" : "marquee-track-right";

  const renderSet = (keyPrefix: string) => (
    <span className="flex shrink-0 items-center whitespace-nowrap" aria-hidden={keyPrefix !== "a"}>
      {items.map((item, idx) => (
        <span key={`${keyPrefix}-${idx}`} className="flex items-center">
          <span
            className={`font-heading text-2xl font-bold tracking-wider sm:text-3xl lg:text-4xl ${
              accentIndex === idx ? "text-accent/60" : ""
            }`}
            style={
              accentIndex === idx
                ? undefined
                : {
                    WebkitTextStroke: "1.5px oklch(0.30 0.05 155 / 0.3)",
                    color: "transparent",
                  }
            }
          >
            {item}
          </span>
          <span className="mx-4 text-2xl text-primary/15 sm:mx-6">•</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className={`${trackClass} flex w-max`}>
        {renderSet("a")}
        {renderSet("b")}
      </div>
    </div>
  );
}
