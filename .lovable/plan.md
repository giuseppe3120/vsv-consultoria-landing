
# Landing Page VSV Consultoria — Segurança do Trabalho

## Visão Geral

Landing page one-page na rota `/` com estética institucional premium, layout editorial assimétrico, animações com IntersectionObserver, marquees duplos e imagens de banco (geradas via IA) substituíveis. CTA principal: WhatsApp.

## Identidade Visual

- **Paleta**: Verde escuro `#1F3A2B` (estrutura/CTAs), Vermelho/vinho `#6B1F16` (acento), Fundo creme `#F4F1E8`, Texto `#151515`
- **Tipografia**: Sora (headings via Google Fonts), Inter (corpo)
- **Logo**: copiado para `src/assets/` e usado no header e footer

## Dependências

- `framer-motion` — animações (fade-in, slide-up, blur-in, stagger, hover lift)
- Google Fonts (Sora + Inter) via `<link>` no head

## Imagens de Banco (5 imagens geradas via IA)

Cada imagem terá alt text descritivo e ID no código para fácil substituição:

| ID | Local | Descrição |
|----|-------|-----------|
| IMG_HERO_SST | Hero | Técnico SST com EPI/capacete em ambiente industrial, prancheta |
| IMG_DOCS_PROGRAMAS | Serviços | Documentos técnicos, relatórios, clipboard em mesa |
| IMG_TREINAMENTO | Treinamentos | Instrutor + participantes em sala de treinamento corporativo |
| IMG_NR01_PSICOSSOCIAL | NR-01 | Ambiente de trabalho, bem-estar ocupacional, tom humano |
| IMG_SOBRE_PLACEHOLDER | Sobre | Placeholder corporativo profissional (silhueta/genérico) |

## Estrutura de Arquivos

```
src/assets/vsv-logo.jpg          — Logo copiado
src/assets/hero-sst.jpg          — IMG_HERO_SST (gerada)
src/assets/docs-programas.jpg    — IMG_DOCS_PROGRAMAS (gerada)
src/assets/treinamento.jpg       — IMG_TREINAMENTO (gerada)
src/assets/nr01-psicossocial.jpg — IMG_NR01_PSICOSSOCIAL (gerada)
src/assets/sobre-placeholder.jpg — IMG_SOBRE_PLACEHOLDER (gerada)

src/styles.css                   — Tokens de cor atualizados + animações CSS customizadas
src/routes/__root.tsx            — Google Fonts (Sora), meta SEO
src/routes/index.tsx             — Página completa (componente orquestrador)

src/components/Header.tsx        — Header fixo com blur, logo, menu âncora, CTA WhatsApp
src/components/Hero.tsx           — Layout assimétrico, card flutuante com negative margin
src/components/Marquee.tsx        — Marquee reutilizável (2 faixas, fade mask, hover slow)
src/components/Services.tsx       — Bento grid assimétrico + imagem editorial lateral
src/components/HowItWorks.tsx     — Timeline premium (4 passos)
src/components/NR01Urgency.tsx    — Seção urgência NR-01 com imagem + 3 cards
src/components/Trainings.tsx      — NRs em chips + imagem
src/components/About.tsx          — Autoridade humana + placeholder foto + mini-cards
src/components/Testimonials.tsx   — 3 depoimentos placeholder
src/components/FAQ.tsx            — Accordion (shadcn)
src/components/Contact.tsx        — Form + botão WhatsApp + dados
src/components/Footer.tsx         — Logo, links, copyright
src/components/WhatsAppFloat.tsx  — Botão flutuante WhatsApp
src/hooks/useScrollAnimation.ts   — Hook IntersectionObserver (fade-in/slide-up/blur-in + stagger + prefers-reduced-motion)
```

## Detalhes Técnicos

### CSS Avançado
- Grid lines decorativas via `::before`/`::after` em baixa opacidade
- 1 seção (NR-01) com `clip-path` sutil inspirado no triângulo/V do logo
- Stripe diagonal verde discreta atrás de um bloco (seção Serviços)
- Negative margins em: card do hero invadindo seção abaixo, marquee A invadindo transição hero→serviços

### Animações
- `IntersectionObserver` com threshold 0.1, fade-in + translateY + blur com stagger por índice
- `@media (prefers-reduced-motion: reduce)` desativa animações
- Hover: lift (translateY -4px + shadow) em botões com glow verde mínimo
- Underline animado nos links do menu
- Cards com elevação suave no hover

### Marquee
- CSS `@keyframes` scroll infinito, 2 instâncias duplicadas para seamless
- Faixa A (esquerda→direita) e B (direita→esquerda)
- Texto outline (stroke) em verde baixa opacidade + fill verde + acentos vermelho
- Máscara fade lateral via `mask-image: linear-gradient`
- Hover reduz `animation-duration`

### SEO
- Title: "VSV Consultoria | Segurança do Trabalho na Grande Vitória"
- Meta description conforme especificado
- Semantic HTML (h1 único no hero, h2 por seção)
- Alt text em todas as imagens
- JSON-LD Organization

### WhatsApp
- Todos os CTAs → `https://wa.me/5527999530056?text=...` com mensagem contextual
- Botão flutuante fixo no canto inferior direito

## Ordem de Implementação

1. Copiar logo + gerar 5 imagens de banco
2. Atualizar `src/styles.css` (paleta, animações, tokens)
3. Atualizar `__root.tsx` (Google Fonts Sora, SEO global)
4. Criar hook `useScrollAnimation`
5. Criar todos os componentes (Header → Footer + WhatsAppFloat)
6. Montar `index.tsx` orquestrando tudo
7. Verificar build e preview
