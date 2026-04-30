import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é o PGR e minha empresa precisa ter?",
    a: "O PGR (Programa de Gerenciamento de Riscos) é obrigatório para todas as empresas com empregados sob regime CLT. Ele substitui o antigo PPRA e identifica, avalia e controla os riscos ocupacionais.",
  },
  {
    q: "Qual a diferença entre PCMSO e LTCAT?",
    a: "O PCMSO é o programa de saúde ocupacional com exames médicos obrigatórios. O LTCAT é o laudo que avalia se o trabalhador está exposto a agentes nocivos para fins de aposentadoria especial. Ambos são obrigatórios.",
  },
  {
    q: "Como funcionam os treinamentos NR?",
    a: "Os treinamentos são presenciais, com carga horária e conteúdo conforme cada norma regulamentadora. Focamos em didática prática para que os colaboradores absorvam o conteúdo de forma efetiva.",
  },
  {
    q: "As visitas técnicas são mensais?",
    a: "A frequência é definida conforme a necessidade e o porte da empresa. Pode ser mensal, quinzenal ou sob demanda. O importante é manter o acompanhamento contínuo.",
  },
  {
    q: "O que muda com a NR-01 em maio de 2026?",
    a: "A nova redação exige que os riscos psicossociais sejam identificados, registrados no PGR e que haja um plano de ação estruturado. Empresas precisam se adequar com apoio multidisciplinar.",
  },
  {
    q: "Vocês atendem fora de Serra/Grande Vitória?",
    a: "Nosso foco de atendimento é Serra e toda a Grande Vitória, mas avaliamos demandas em outras regiões do ES caso a caso.",
  },
  {
    q: "Quais os próximos passos para contratar?",
    a: "Basta entrar em contato pelo WhatsApp. Faremos um diagnóstico inicial sem compromisso e apresentaremos uma proposta adequada à sua realidade.",
  },
];

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="bg-card py-16 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="scroll-reveal mb-4 text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
          Dúvidas frequentes
        </div>
        <h2 className="scroll-reveal text-center font-heading text-2xl font-800 tracking-tight sm:text-3xl lg:text-4xl" data-stagger="1">
          Perguntas e respostas
        </h2>

        <div className="scroll-reveal mt-8 sm:mt-12" data-stagger="2">
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-primary/8 bg-background px-4 transition-all data-[state=open]:shadow-md sm:px-6"
              >
                <AccordionTrigger className="py-4 font-heading text-xs font-semibold text-foreground hover:no-underline sm:py-5 sm:text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
