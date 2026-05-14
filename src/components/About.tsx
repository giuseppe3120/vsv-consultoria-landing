import { useScrollReveal } from "@/hooks/useScrollReveal";
import sobreImg from "@/assets/vanderson-barros.webp";

const miniCards = [
  "Serra / Grande Vitória",
  "Consultoria + Assessoria",
  "Treinamentos NR",
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="bg-card py-12 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-12">
          <div className="scroll-reveal lg:col-span-4" data-stagger="0">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                id="IMG_SOBRE_PLACEHOLDER"
                src={sobreImg}
                alt="Vanderson Barros — Responsável técnico VSV Consultoria"
                loading="lazy"
                width={768}
                height={1024}
                className="h-[300px] w-full object-cover object-top sm:h-[350px] lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="1">
              Quem está por trás
            </div>
            <h2 className="scroll-reveal font-heading text-2xl font-800 tracking-tight sm:text-3xl lg:text-4xl" data-stagger="2">
              Olá, eu sou Vanderson Barros.
            </h2>
            <div className="scroll-reveal mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg" data-stagger="3">
              <p>
                Sou tecnólogo em Petróleo e Gás, bacharel em Engenharia Civil e especialista em Engenharia de Segurança, com formação complementar em diversas áreas. Possuo mais de 20 anos de experiência na área industrial como Técnico de Segurança do Trabalho, atuando em segmentos como construção civil, área portuária, mineração e montagem eletromecânica, entre outros.
              </p>
              <p>
                Em abril de 2022, fundei a empresa com o propósito de oferecer soluções alinhadas às reais necessidades dos clientes, com base em conhecimento técnico e vivência prática.
              </p>
              <p>
                Nosso diferencial está na sólida experiência de campo, aliada a um atendimento próximo, eficiente e humanizado.
              </p>
            </div>

            <div className="scroll-reveal mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3" data-stagger="4">
              {miniCards.map((card) => (
                <span
                  key={card}
                  className="rounded-lg border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary sm:px-4 sm:py-2 sm:text-sm"
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
