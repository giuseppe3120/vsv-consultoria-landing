
# Ajustes: Cards de Serviços + Responsividade Completa

## 1. Refatorar grid de Serviços

O problema é que o grid usa `lg:grid-rows-3` com um card `row-span-2`, criando rows altas que deixam cards pequenos com muito espaço em branco. A solução:

- Trocar para um layout bento com `grid-template-rows: auto` e posicionamento explícito, sem forçar rows uniformes
- Cards menores ficam compactos (padding reduzido), card grande ("Programas Legais") ocupa 2 rows de forma proporcional
- A imagem editorial fica visível em mobile também (menor, em layout horizontal)

## 2. Responsividade geral da LP

Revisar todos os componentes para garantir:

- **Header**: menu mobile já funciona, verificar espaçamentos
- **Hero**: stack vertical em mobile, imagem acima do texto em telas pequenas, card flutuante sem negative margin em mobile
- **Marquee**: reduzir font-size em mobile
- **Services**: grid 1 coluna em mobile, 2 em tablet, 3 em desktop
- **HowItWorks**: timeline vertical em mobile (já está), ajustar padding
- **NR-01**: stack vertical, remover clip-path em mobile (overflow issue)
- **Trainings**: stack vertical, chips menores
- **About**: foto acima do texto em mobile
- **Testimonials**: 1 coluna em mobile
- **Contact**: stack vertical
- **Footer**: centralizado em mobile (já está)
- **WhatsApp float**: verificar que não sobrepõe conteúdo

### Arquivos alterados:
- `src/components/Services.tsx` — refatorar grid para eliminar espaço vazio
- `src/components/Hero.tsx` — ajustes mobile (order, margins)
- `src/components/NR01Urgency.tsx` — remover clip-path em mobile
- `src/components/Marquee.tsx` — font-size responsivo
- Pequenos ajustes de spacing nos demais componentes conforme necessário
