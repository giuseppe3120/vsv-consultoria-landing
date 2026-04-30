import { useScrollReveal } from "@/hooks/useScrollReveal";
import treinImg from "@/assets/treinamento.jpg";

const WHATSAPP_URL = "https://wa.me/5527999530056?text=Olá! Gostaria de agendar um treinamento NR.";

const nrs = ["NR-01", "NR-05", "NR-06", "NR-10", "NR-12", "NR-18", "NR-33", "NR-35"];

export default function Trainings() {
  const ref = useScrollReveal();

  return (
    <section id="treinamentos" className="py-16 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
              Capacitação
            </div>
            <h2 className="scroll-reveal font-heading text-2xl font-800 tracking-tight sm:text-3xl lg:text-5xl" data-stagger="1">
              Treinamentos NR com didática e foco na prática
            </h2>

            <div className="scroll-reveal mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3" data-stagger="2">
              {nrs.map((nr) => (
                <span
                  key={nr}
                  className="rounded-lg border border-primary/15 bg-primary/5 px-3 py-2 font-heading text-xs font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-md sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  {nr}
                </span>
              ))}
            </div>

            <div className="scroll-reveal mt-8 sm:mt-10" data-stagger="3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 sm:px-7 sm:py-3.5"
              >
                Agendar treinamento
              </a>
            </div>
          </div>

          <div className="scroll-reveal" data-stagger="2">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                id="IMG_TREINAMENTO"
                src={treinImg}
                alt="Treinamento de segurança do trabalho — instrutor e participantes com EPIs"
                loading="lazy"
                width={1280}
                height={864}
                className="h-[250px] w-full object-cover sm:h-[320px] lg:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
