## Problema

No mobile (≤ ~414px), o header está estourando a largura da viewport. Como o header usa `position: fixed left-0 right-0`, ele não respeita o `overflow-x: hidden` aplicado apenas no `body` — em alguns navegadores móveis isso permite que o conteúdo do header (botão WhatsApp + hambúrguer) seja empurrado para fora da tela à direita, escondendo o menu hambúrguer. Ao rolar horizontalmente, todo o conteúdo da página parece "deslocado para a esquerda" (foi o que apareceu no print enviado).

## Correções (apenas técnicas, sem mudança visual)

### 1. `src/styles.css`
- Adicionar `overflow-x: hidden` também em `html` (hoje só está em `body`).
- Adicionar `max-width: 100%` em `html, body` como reforço para evitar que elementos `position: fixed` ou conteúdos largos criem scroll horizontal em mobile browsers (Safari iOS / Chrome Android).

### 2. `src/components/Header.tsx`
- Trocar o container flex interno para garantir que ele nunca exceda a viewport: adicionar `w-full min-w-0` no `<div>` interno e `min-w-0` nos grupos filhos (logo wrapper e grupo de botões).
- Adicionar `flex-shrink-0` no botão hambúrguer e no ícone WhatsApp mobile (eles já têm tamanho fixo, mas isso garante que não sejam deslocados por nenhum cálculo de flex).
- Garantir que o `<a>` do logo use `min-w-0` para não forçar largura mínima da imagem.

### 3. Verificação
Após o ajuste, testar em viewport 320, 360, 375 e 414 com browser tools:
- Logo visível à esquerda;
- Botão WhatsApp + hambúrguer ambos visíveis e clicáveis à direita;
- Sem barra de rolagem horizontal;
- Hero, marquees e demais seções idênticas ao layout atual.

## Arquivos alterados

- `src/styles.css`
- `src/components/Header.tsx`

## Garantias visuais

- Nenhuma cor, fonte, imagem, texto ou ordem de seção alterada.
- Apenas ajustes de propriedades CSS de overflow/largura para garantir responsividade do header.
