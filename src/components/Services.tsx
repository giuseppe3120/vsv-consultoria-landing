import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Programas Legais",
    desc: "AET, PGR, PCMSO, LTCAT e LIP — elaboração, revisão e acompanhamento conforme exigências legais.",
  },
  {
    title: "Assessoria Técnica",
    desc: "Visitas técnicas programadas conforme a necessidade da sua empresa.",
  },
  {
    title: "Treinamentos NR",
    desc: "NR-01, 05, 06, 10, 12, 18, 33 e 35 — com didática e foco prático.",
  },
  {
    title: "Palestras SST",
    desc: "Palestras e SIPAT personalizadas para engajamento da equipe.",
  },
  {
    title: "Assistência Técnica e Perícia",
    desc: "Suporte técnico especializado em processos e perícias de segurança do trabalho.",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="relative py-16 sm:py-24" ref={ref}>
      <div className="diagonal-stripe absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
          O que fazemos
        </div>
        <h2 className="scroll-reveal font-heading text-2xl font-800 tracking-tight text-foreground sm:text-3xl lg:text-5xl" data-stagger="1">
          Serviços
        </h2>
        <p className="scroll-reveal mt-3 max-w-xl text-sm text-muted-foreground sm:text-base" data-stagger="2">
          Cumprir a norma não precisa ser confuso — precisa ser organizado.
        </p>

        {/* Bento grid — compact, auto rows */}
        <div className="mt-10 grid auto-rows-auto gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card grande — Programas Legais */}
          <div
            className="scroll-reveal group rounded-xl border border-primary/8 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:col-span-2 lg:col-span-1 lg:row-span-2"
            data-stagger="3"
          >
            <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">{services[0].title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{services[0].desc}</p>
          </div>

          {/* Cards menores */}
          {services.slice(1).map((s, i) => (
            <div
              key={s.title}
              className="scroll-reveal group rounded-xl border border-primary/8 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-5"
              data-stagger={i + 4}
            >
              <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
