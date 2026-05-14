import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5527999530056?text=Olá, Vanderson! Gostaria de conversar sobre consultoria em SST.";

const testimonials = [
  {
    text: "A VSV nos ajudou a organizar toda a documentação de SST que estava pendente. Atendimento direto e sem enrolação.",
    role: "Gestora de RH — Indústria metalúrgica",
  },
  {
    text: "Treinamentos práticos e objetivos. Os colaboradores realmente absorvem o conteúdo. Recomendo.",
    role: "Diretor operacional — Construtora",
  },
  {
    text: "Estávamos perdidos com as exigências da NR-01. O Vanderson montou um plano claro e acompanhou cada etapa.",
    role: "Empresário — Comércio varejista",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section id="depoimentos" className="py-12 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
          Depoimentos
        </div>
        <h2 className="scroll-reveal font-heading text-2xl font-800 tracking-tight sm:text-3xl lg:text-4xl" data-stagger="1">
          O que dizem nossos clientes
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="scroll-reveal rounded-xl border border-primary/8 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 sm:p-7"
              data-stagger={i + 2}
            >
              <svg className="mb-3 h-6 w-6 text-primary/20 sm:mb-4 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm leading-relaxed text-foreground/80">{t.text}</p>
              <p className="mt-3 text-xs font-medium text-muted-foreground sm:mt-4">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-10 text-center sm:mt-12" data-stagger="5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 sm:px-7 sm:py-3.5"
          >
            Falar com Vanderson
          </a>
        </div>
      </div>
    </section>
  );
}
