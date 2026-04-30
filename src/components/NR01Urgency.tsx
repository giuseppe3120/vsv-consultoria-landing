import { useScrollReveal } from "@/hooks/useScrollReveal";
import nr01Img from "@/assets/nr01-psicossocial.jpg";

const WHATSAPP_URL = "https://wa.me/5527999530056?text=Olá! Preciso me adequar à NR-01 (riscos psicossociais).";

const cards = [
  { title: "Identificação", desc: "Levantamento dos riscos psicossociais presentes no ambiente de trabalho." },
  { title: "Registro no PGR", desc: "Inclusão formal no Programa de Gerenciamento de Riscos." },
  { title: "Plano de ação", desc: "Estruturação de medidas preventivas com apoio multidisciplinar." },
];

export default function NR01Urgency() {
  const ref = useScrollReveal();

  return (
    <section id="nr01" className="clip-v relative overflow-hidden bg-primary py-28 text-primary-foreground" ref={ref}>
      <div className="grid-lines absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="scroll-reveal mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-accent" style={{ color: "#c9635a" }} data-stagger="0">
              Atenção — Maio/2026
            </div>
            <h2 className="scroll-reveal font-heading text-3xl font-800 tracking-tight sm:text-4xl lg:text-5xl" data-stagger="1">
              NR-01 em maio/2026: atenção aos riscos psicossociais.
            </h2>
            <p className="scroll-reveal mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80" data-stagger="2">
              Identificar, incluir no PGR e estruturar um plano de ação — com apoio multidisciplinar e acompanhamento.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cards.map((c, i) => (
                <div key={c.title} className="scroll-reveal rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1" data-stagger={i + 3}>
                  <h3 className="font-heading text-sm font-bold">{c.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-primary-foreground/70">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="scroll-reveal mt-10" data-stagger="6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary-foreground px-7 py-3.5 font-heading text-sm font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                Quero me adequar
              </a>
            </div>
          </div>

          <div className="scroll-reveal lg:col-span-5" data-stagger="3">
            <div className="overflow-hidden rounded-2xl">
              <img
                id="IMG_NR01_PSICOSSOCIAL"
                src={nr01Img}
                alt="Ambiente de trabalho saudável — cuidado com riscos psicossociais conforme NR-01"
                loading="lazy"
                width={1280}
                height={864}
                className="h-[350px] w-full object-cover lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
