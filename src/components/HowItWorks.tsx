import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5527999530056?text=Olá! Gostaria de entender como funciona a consultoria.";

const steps = [
  { num: "01", title: "Diagnóstico e levantamento", desc: "Análise completa da situação atual da sua empresa em relação às normas regulamentadoras." },
  { num: "02", title: "Plano de adequação", desc: "Definição de prioridades e cronograma de ações com base no diagnóstico." },
  { num: "03", title: "Execução", desc: "Elaboração de programas, documentos e realização de treinamentos conforme o plano." },
  { num: "04", title: "Acompanhamento", desc: "Visitas técnicas periódicas e ajustes para manter a conformidade contínua." },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" className="relative py-24 bg-card" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
          Processo
        </div>
        <h2 className="scroll-reveal font-heading text-3xl font-800 tracking-tight sm:text-4xl lg:text-5xl" data-stagger="1">
          Como funciona
        </h2>

        <div className="mt-16 grid gap-0 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="scroll-reveal group relative border-l-2 border-primary/15 py-8 pl-8 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8 md:pr-6" data-stagger={i + 2}>
              <div className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border-2 border-primary bg-background md:-top-[9px] md:left-0" />
              <span className="font-heading text-3xl font-800 text-primary/20">{step.num}</span>
              <h3 className="mt-2 font-heading text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-12 text-center" data-stagger="6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-primary px-7 py-3.5 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
