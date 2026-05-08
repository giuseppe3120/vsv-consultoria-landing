## Ajustes do documento + foto oficial na seção "Quem está por trás"

### 1. FAQ (`src/components/FAQ.tsx`)
Substituir o array `faqs` pelas perguntas/respostas do documento (ordem definitiva):

1. **Qual a importância do PGR (NR-01) e do PCMSO (NR-07)?** — texto completo do documento (PGR como documento prevencionista da NR-01, MEI dispensado, PCMSO em conjunto, dispensa para MEI/ME/EPP grau 1 e 2 sem exposição, lembrete de que dispensa do PCMSO não desobriga ASO/exames).
2. **Diferença entre LTCAT e LIP (Laudo de Insalubridade e Periculosidade)** — texto completo (LTCAT previdenciário/INSS; LIP fundamentado em NR-15 e NR-16, com bullets das situações).
3. **As visitas técnicas são realizadas mensalmente para fins de assessoria?** — periodicidade definida em comum acordo, objetivo de acompanhamento e conformidade legal.
4. **Como funcionam os treinamentos das NRs?** — agendados, em nossa estrutura ou no cliente, obrigatórios para cumprimento das NRs.
5. **Vocês atendem somente na região da Grande Vitória?** — atendimento fora da região e do estado conforme demanda.
6. **O que muda com a NR-01 em maio de 2026?** — riscos psicossociais integrados ao PGR.
7. **Qual a diferença entre consultoria e assessoria?** — consultoria (demandas pontuais/programas legais) vs assessoria (gestão contínua).
8. **Quais os próximos passos para contratar?** — 1º contato via WhatsApp, atendimento e direcionamento ao especialista.

Como alguns textos são longos com bullets, ajustar `AccordionContent` para suportar parágrafos múltiplos e listas (renderizar `a` como array de blocos: parágrafos + lista opcional).

### 2. Serviços (`src/components/Services.tsx`)
Adicionar novo card **Atendimento ao eSocial**:
> "Atendimento e gestão das informações relacionadas ao eSocial, garantindo o correto envio dos eventos de Saúde e Segurança do Trabalho (SST), conforme as exigências legais vigentes."

Ele entra como 6º item, mantendo o card grande "Programas Legais" e ajustando o grid (5 cards menores em `lg:grid-cols-3` continuam encaixando bem).

### 3. Foto oficial — seção "Quem está por trás" (`src/components/About.tsx`)
- Copiar `user-uploads://Vanderson.png` para `src/assets/vanderson-barros.jpg` (manter como JPG via conversão na cópia ou salvar como `.png` — usaremos `.png` para preservar qualidade).
- Atualizar o `import sobreImg` em `About.tsx` para apontar para o novo arquivo.
- Manter dimensões/`object-cover object-top` atuais para não distorcer.
- Atualizar o `alt` para refletir foto oficial.
- Remover o asset antigo `src/assets/sobre-placeholder.jpg` (não mais referenciado).

### Arquivos alterados
- `src/components/FAQ.tsx`
- `src/components/Services.tsx`
- `src/components/About.tsx`
- `src/assets/vanderson-barros.png` (novo)
- `src/assets/sobre-placeholder.jpg` (removido)
