import { useScrollReveal } from "@/hooks/useScrollReveal";
import docsImg from "@/assets/docs-programas.jpg";

const services = [
  {
    title: "Programas Legais",
    desc: "AET, PGR, PCMSO, LTCAT e LIP — elaboração, revisão e acompanhamento conforme exigências legais.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Assessoria Técnica",
    desc: "Visitas técnicas programadas conforme a necessidade da sua empresa.",
    span: "lg:col-span-1",
  },
  {
    title: "Treinamentos NR",
    desc: "NR-01, 05, 06, 10, 12, 18, 33 e 35 — com didática e foco prático.",
    span: "lg:col-span-1",
  },
  {
    title: "Palestras SST",
    desc: "Palestras e SIPAT personalizadas para engajamento da equipe.",
    span: "lg:col-span-1",
  },
  {
    title: "Assistência Técnica e Perícia",
    desc: "Suporte técnico especializado em processos e perícias de segurança do trabalho.",
    span: "lg:col-span-1",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="relative py-24" ref={ref}>
      <div className="diagonal-stripe absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
          O que fazemos
        </div>
        <h2 className="scroll-reveal font-heading text-3xl font-800 tracking-tight text-foreground sm:text-4xl lg:text-5xl" data-stagger="1">
          Serviços
        </h2>
        <p className="scroll-reveal mt-4 max-w-xl text-muted-foreground" data-stagger="2">
          Cumprir a norma não precisa ser confuso — precisa ser organizado.
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-3">
          {/* Bento cards */}
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`scroll-reveal group rounded-xl border border-primary/8 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${s.span}`}
              data-stagger={i + 3}
            >
              <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}

          {/* Editorial image */}
          <div className="scroll-reveal hidden overflow-hidden rounded-xl lg:col-span-1 lg:row-span-2 lg:block" data-stagger="8">
            <img
              id="IMG_DOCS_PROGRAMAS"
              src={docsImg}
              alt="Documentos técnicos de segurança do trabalho — PGR, PCMSO, LTCAT"
              loading="lazy"
              width={768}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
