
# Responsividade total + atualização de texto

## 1. Menu (Header) totalmente responsivo

Hoje o menu desktop só aparece a partir de `lg` (1024px) e o botão "Falar no WhatsApp" só aparece a partir de `sm` (640px). O drawer mobile é um simples bloco abaixo do header. Vou revisar para:

- Header com altura/paddings que se adaptam (mobile: compacto; desktop: confortável)
- Logo com tamanho responsivo (h-9 mobile → h-12 desktop)
- Menu mobile vira drawer lateral usando o componente `Sheet` (UX padrão), com lista vertical, foco acessível, fechamento ao clicar em link e bloqueio de scroll do body quando aberto
- Botão "Falar no WhatsApp" sempre visível como ícone compacto no mobile e botão completo a partir de `md`
- Navegação principal: aparece a partir de `lg` (mantém), com itens espaçados; em telas entre `md` e `lg` o drawer continua sendo a opção
- Garantir que o header fixo não cubra âncoras (scroll-margin-top nas seções)

## 2. Responsividade geral da LP (revisão por seção)

Passar por cada componente garantindo breakpoints sm/md/lg/xl consistentes, fontes fluidas (clamp), grids que colapsam corretamente e sem overflow horizontal:

- **Hero**: tipografia fluida, CTA full-width no mobile, imagem com aspect ratio controlado
- **Marquee**: font-size responsivo, sem overflow horizontal
- **Services (bento)**: 1 col mobile → 2 cols tablet → 3 cols desktop, sem espaços vazios
- **HowItWorks**: timeline empilhada no mobile com numeração clara
- **NR-01**: sem clip-path no mobile, stack vertical
- **Trainings**: chips com wrap, cards full-width no mobile
- **About**: imagem acima do texto no mobile, lado a lado a partir de `lg`
- **Testimonials**: 1 col mobile → 2 cols md → 3 cols lg
- **FAQ**: padding e fonte ajustados, accordion full-width
- **Contact**: form stack vertical no mobile, lado a lado a partir de `md`
- **Footer**: já centralizado mobile, garantir gaps
- **WhatsAppFloat**: tamanho menor no mobile e posição que não cobre CTAs

Verificação visual nos viewports: 360, 414, 768, 1024, 1280 e 1440px.

## 3. Atualizar texto da seção "Quem está por trás" (About)

Substituir o parágrafo único atual pelo novo conteúdo enviado, dividido em 4 parágrafos para leitura confortável:

1. "Olá, eu sou Vanderson Barros."
2. Formação acadêmica + 20 anos de experiência
3. Fundação da empresa em abril/2022
4. Diferencial: experiência de campo + atendimento humanizado

Ajustes:
- O parágrafo 1 vira destaque (font-heading, maior)
- Manter os mini-cards (Serra/Grande Vitória, Consultoria + Assessoria, Treinamentos NR)
- Ajustar o `<h2>` se necessário para não conflitar com o novo tom em primeira pessoa (manter "20 anos de experiência. Atendimento direto." como título da seção)

## Arquivos a alterar

- `src/components/Header.tsx` — drawer Sheet, breakpoints, CTA responsivo
- `src/components/About.tsx` — novo texto em 4 parágrafos
- `src/components/Hero.tsx`, `Services.tsx`, `HowItWorks.tsx`, `NR01Urgency.tsx`, `Trainings.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `Contact.tsx`, `Marquee.tsx`, `WhatsAppFloat.tsx` — ajustes finos de responsividade
- `src/styles.css` — utilitários (scroll-margin, clamp em headings se necessário)
