import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

const faqs: { q: string; blocks: FaqBlock[] }[] = [
  {
    q: "Qual a importância do PGR (NR-01) e do PCMSO (NR-07)?",
    blocks: [
      { type: "p", text: "O PGR é um documento exigido pela NR-01. Trata-se de um documento prevencionista, no qual avaliamos os riscos qualitativos e propomos medidas de controle. O MEI está dispensado de elaborar o PGR, porém é importante lembrar que ele é um instrumento essencial de prevenção e obrigatório para as demais empresas." },
      { type: "p", text: "Já o PCMSO é um documento que atua em conjunto com o PGR. Uma vez identificados os riscos, o médico responsável pelo PCMSO indicará os exames específicos, bem como seu acompanhamento." },
      { type: "p", text: "O MEI, a ME e a EPP, classificadas nos graus de risco 1 e 2, que declararem as informações digitais conforme o subitem 1.6.1 e não identificarem exposições ocupacionais a agentes físicos, químicos, biológicos ou riscos ergonômicos, ficam dispensados da elaboração do Programa de Controle Médico de Saúde Ocupacional (PCMSO)." },
      { type: "p", text: "A dispensa do PCMSO não desobriga a empresa da realização dos exames médicos ocupacionais, nem da emissão do Atestado de Saúde Ocupacional (ASO)." },
    ],
  },
  {
    q: "Diferença entre LTCAT e LIP (Laudo de Insalubridade e Periculosidade)",
    blocks: [
      { type: "p", text: "O LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) é um documento de natureza previdenciária, destinado à caracterização da efetiva exposição do trabalhador a agentes nocivos. Sua elaboração deve considerar, sempre que aplicável, avaliações quantitativas dos agentes ambientais, conforme parâmetros estabelecidos na legislação vigente. O LTCAT constitui base técnica para fins de enquadramento de atividade especial e concessão de aposentadoria especial junto ao INSS." },
      { type: "p", text: "O LIP (Laudo de Insalubridade e Periculosidade), por sua vez, fundamenta-se nas disposições das NR-15 e NR-16, sendo voltado à caracterização de condições de trabalho que ensejem o pagamento de adicionais de insalubridade ou periculosidade. Sua elaboração não é obrigatória de forma universal, sendo requerida, principalmente, nas seguintes situações:" },
      { type: "ul", items: [
        "Existência de exposição a agentes insalubres ou desenvolvimento de atividades perigosas previstas em norma;",
        "Necessidade de comprovação técnica para fins de pagamento ou não dos respectivos adicionais legais.",
      ] },
    ],
  },
  {
    q: "As visitas técnicas são realizadas mensalmente para fins de assessoria?",
    blocks: [
      { type: "p", text: "A periodicidade das visitas é definida com base na avaliação técnica inicial e em comum acordo entre as partes." },
      { type: "p", text: "O objetivo das visitas é o acompanhamento das condições de segurança e saúde ocupacional, bem como o atendimento às normas aplicáveis a cada empresa, garantindo a conformidade legal, a implementação das medidas de controle e o cumprimento do plano de ação." },
    ],
  },
  {
    q: "Como funcionam os treinamentos das NRs?",
    blocks: [
      { type: "p", text: "Os treinamentos são previamente agendados e podem ser realizados tanto em nossa estrutura quanto na própria empresa, a depender da norma e do tipo de treinamento escolhido. Essa modalidade pode reduzir custos nas propostas comerciais." },
      { type: "p", text: "Além disso, os treinamentos são obrigatórios para o cumprimento das Normas Regulamentadoras, sendo essenciais para garantir a capacitação dos trabalhadores e a conformidade legal da empresa." },
    ],
  },
  {
    q: "Vocês atendem somente na região da Grande Vitória?",
    blocks: [
      { type: "p", text: "Não. Atendemos clientes fora da nossa região e até mesmo fora do estado. O atendimento pode ser realizado conforme a demanda e a viabilidade técnica do serviço." },
    ],
  },
  {
    q: "O que muda com a NR-01 em maio de 2026?",
    blocks: [
      { type: "p", text: "A partir de maio de 2026, todas as empresas públicas e privadas deverão se adequar às novas exigências relacionadas aos riscos psicossociais, incorporando-os ao gerenciamento de riscos ocupacionais." },
      { type: "p", text: "Esses riscos deverão ser identificados, avaliados e integrados ao PGR (Programa de Gerenciamento de Riscos), garantindo seu adequado controle dentro do sistema de gestão de saúde e segurança do trabalho." },
    ],
  },
  {
    q: "Qual a diferença entre consultoria e assessoria?",
    blocks: [
      { type: "p", text: "A consultoria consiste no atendimento a demandas já identificadas pelo próprio cliente, geralmente relacionadas à elaboração e entrega de programas legais, como AET, PGR, PCMSO, entre outros." },
      { type: "p", text: "Já a assessoria envolve a gestão contínua dos riscos por um profissional qualificado, de forma direta, preventiva e humanizada, acompanhando a empresa na implementação e manutenção das medidas de controle." },
    ],
  },
  {
    q: "Quais os próximos passos para contratar?",
    blocks: [
      { type: "p", text: "1º Contato via WhatsApp: nossa equipe irá atendê-lo com atenção, identificando suas necessidades e direcionando-o para o nosso especialista, conforme o serviço solicitado." },
    ],
  },
];

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="bg-card py-12 sm:py-24" ref={ref}>
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
                <AccordionTrigger className="py-4 text-left font-heading text-xs font-semibold text-foreground hover:no-underline sm:py-5 sm:text-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                  {faq.blocks.map((block, j) =>
                    block.type === "p" ? (
                      <p key={j}>{block.text}</p>
                    ) : (
                      <ul key={j} className="list-disc space-y-1 pl-5">
                        {block.items.map((item, k) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
