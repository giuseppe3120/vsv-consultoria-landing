import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImg from "@/assets/hero-sst.jpg";

const WHATSAPP_URL = "https://wa.me/5527999530056?text=Olá! Gostaria de agendar um atendimento.";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24" ref={ref}>
      <div className="grid-lines absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-12 lg:py-24">
        {/* Text side */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="scroll-reveal" data-stagger="0">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Segurança do Trabalho
            </span>
          </div>

          <h1 className="scroll-reveal font-heading text-4xl font-800 leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]" data-stagger="1">
            Segurança do Trabalho com clareza, rotina e conformidade.
          </h1>

          <p className="scroll-reveal mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground" data-stagger="2">
            Consultoria e assessoria para pequenas e médias empresas da Grande Vitória — sem precisar de profissional em tempo integral.
          </p>

          <ul className="scroll-reveal mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground/70" data-stagger="3">
            {["Atendimento direto com o responsável", "Programas legais e NRs", "Visitas e treinamentos"].map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>

          <div className="scroll-reveal mt-8 flex flex-wrap gap-4" data-stagger="4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-7 py-3.5 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              Falar no WhatsApp agora
            </a>
            <a
              href="#como-funciona"
              className="rounded-lg border border-foreground/15 bg-background px-7 py-3.5 font-heading text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30"
            >
              Entender como funciona
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative lg:col-span-7">
          <div className="scroll-reveal relative overflow-hidden rounded-2xl" data-stagger="2">
            <img
              id="IMG_HERO_SST"
              src={heroImg}
              alt="Técnico de segurança do trabalho com EPI em ambiente industrial realizando inspeção"
              width={1920}
              height={1080}
              className="h-[400px] w-full object-cover object-center lg:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          </div>

          {/* Floating card with negative margin */}
          <div className="scroll-reveal relative z-10 mx-4 -mt-16 rounded-xl border border-primary/10 bg-card p-6 shadow-xl lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:mb-[-2rem] lg:mr-[-1rem] lg:max-w-sm lg:mt-0" data-stagger="5">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Diagnóstico rápido de conformidade
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                "PGR/PCMSO/LTCAT em dia?",
                "Treinamentos NR atualizados?",
                "NR-01 e riscos psicossociais mapeados?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
