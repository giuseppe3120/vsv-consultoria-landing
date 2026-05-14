import { useScrollReveal } from "@/hooks/useScrollReveal";
import nr01Img from "@/assets/nr01-psicossocial.webp";

const WHATSAPP_URL = "https://wa.me/5527999530056?text=Olá! Preciso me adequar à NR-01 (riscos psicossociais).";

const cards = [
  { title: "Identificação", desc: "Levantamento dos riscos psicossociais presentes no ambiente de trabalho." },
  { title: "Registro no PGR", desc: "Inclusão formal no Programa de Gerenciamento de Riscos." },
  { title: "Plano de ação", desc: "Estruturação de medidas preventivas com apoio multidisciplinar." },
];

export default function NR01Urgency() {
  const ref = useScrollReveal();

  return (
    <section id="nr01" className="relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-28 lg:clip-v" ref={ref}>
      <div className="grid-lines absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="scroll-reveal mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest sm:px-4 sm:py-1.5 sm:text-xs" style={{ color: "#c9635a" }} data-stagger="0">
              Atenção — Maio/2026
            </div>
            <h2 className="scroll-reveal font-heading text-2xl font-800 tracking-tight sm:text-3xl lg:text-5xl" data-stagger="1">
              NR-01 em maio/2026: atenção aos riscos psicossociais.
            </h2>
            <p className="scroll-reveal mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:mt-5 sm:text-lg" data-stagger="2">
              Identificar, incluir no PGR e estruturar um plano de ação — com apoio multidisciplinar e acompanhamento.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
              {cards.map((c, i) => (
                <div key={c.title} className="scroll-reveal rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-5" data-stagger={i + 3}>
                  <h3 className="font-heading text-sm font-bold">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/70">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal mt-8 sm:mt-10" data-stagger="6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary-foreground px-6 py-3 font-heading text-sm font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-1 sm:px-7 sm:py-3.5"
              >
                Quero me adequar
              </a>
            </div>
          </div>

          <div className="scroll-reveal lg:col-span-5" data-stagger="3">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                id="IMG_NR01_PSICOSSOCIAL"
                src={nr01Img}
                alt="Ambiente de trabalho saudável — cuidado com riscos psicossociais conforme NR-01"
                loading="lazy"
                width={1280}
                height={864}
                className="h-[250px] w-full object-cover sm:h-[300px] lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
