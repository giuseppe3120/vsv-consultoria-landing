import { useScrollReveal } from "@/hooks/useScrollReveal";
import sobreImg from "@/assets/sobre-placeholder.jpg";

const miniCards = [
  "Serra / Grande Vitória",
  "Consultoria + Assessoria",
  "Treinamentos NR",
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="bg-card py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="scroll-reveal lg:col-span-4" data-stagger="0">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                id="IMG_SOBRE_PLACEHOLDER"
                src={sobreImg}
                alt="Vanderson Barros — Responsável técnico VSV Consultoria (foto placeholder, substituir)"
                loading="lazy"
                width={768}
                height={1024}
                className="h-[400px] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="1">
              Quem está por trás
            </div>
            <h2 className="scroll-reveal font-heading text-3xl font-800 tracking-tight sm:text-4xl" data-stagger="2">
              20 anos de experiência. Atendimento direto.
            </h2>
            <p className="scroll-reveal mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground" data-stagger="3">
              Na VSV Consultoria, o atendimento é humanizado e direto com Vanderson Barros, responsável técnico com duas décadas de atuação em segurança do trabalho. Sem intermediários, sem burocracia desnecessária — clareza e compromisso do início ao fim.
            </p>

            <div className="scroll-reveal mt-8 flex flex-wrap gap-3" data-stagger="4">
              {miniCards.map((card) => (
                <span
                  key={card}
                  className="rounded-lg border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
