
## Objetivo

Transformar o build de SSR (que gera `dist/client` + `dist/server` para Cloudflare Workers) em um build SPA estático puro, com saída:

```
dist/
  index.html
  assets/
    [arquivos JS/CSS/imagens com hash]
```

A landing page é uma única rota (`/`) renderizando os componentes existentes — perfeita para SPA estática. Nenhum componente visual será tocado.

## O que será alterado (apenas arquivos técnicos)

1. **`package.json`**
   - Remover dependências de SSR/edge: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`.
   - Manter todas as libs de UI (Radix, framer-motion, tailwind, lucide, etc.).
   - Scripts: `build` continua `vite build`.

2. **`vite.config.ts`** — reescrever como Vite puro:
   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";
   import tsconfigPaths from "vite-tsconfig-paths";

   export default defineConfig({
     plugins: [react(), tailwindcss(), tsconfigPaths()],
     base: "./",          // caminhos relativos → funciona em subpasta da HostGator
     build: { outDir: "dist", assetsDir: "assets" },
   });
   ```
   `base: "./"` garante que o `index.html` referencie `./assets/...` (funciona tanto na raiz quanto em subdiretório).

3. **Criar `index.html`** na raiz (entry padrão do Vite SPA) com `<div id="root">`, fontes do Google e meta tags atualmente em `__root.tsx`.

4. **Criar `src/main.tsx`** — entry SPA:
   ```tsx
   import { createRoot } from "react-dom/client";
   import App from "./App";
   import "./styles.css";
   createRoot(document.getElementById("root")!).render(<App />);
   ```

5. **Criar `src/App.tsx`** — copiar o JSX do `Index` atual (`src/routes/index.tsx`), removendo `createFileRoute`. Componentes filhos (`Header`, `Hero`, `Services`, etc.) ficam idênticos, sem mudanças.

6. **Remover** (não são mais usados):
   - `src/router.tsx`
   - `src/routes/__root.tsx`
   - `src/routes/index.tsx`
   - `src/routeTree.gen.ts`
   - `wrangler.jsonc`

7. **`tsconfig.json`** — remover `"vite.config.ts"` do include se necessário; nada mais.

## Verificação visual

Os componentes em `src/components/*` (Hero, Header, Footer, Services, About, FAQ, etc.), `src/styles.css`, e todos os assets (`src/assets/*.webp`) **não serão tocados**. A árvore de renderização final é idêntica — só muda o entry point e o bundler.

## Resposta final ao usuário (após implementar)

1. **Arquivos alterados/criados:** `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html` (novo), `src/main.tsx` (novo), `src/App.tsx` (novo). **Removidos:** `src/router.tsx`, `src/routes/`, `src/routeTree.gen.ts`, `wrangler.jsonc`.
2. **Comando:** `npm install && npm run build`
3. **Pasta para enviar à HostGator:** todo o conteúdo de `dist/` para `public_html/` (ou subpasta) via FTP/Gerenciador de Arquivos.
4. **Confirmação:** nenhuma alteração visual — todos os componentes, estilos, imagens, animações, textos e ordem das seções permanecem idênticos.

## Observação técnica sobre rotas

Como a landing tem rota única (`/`), não há necessidade de `.htaccess` para fallback SPA. Se no futuro forem adicionadas rotas internas, será preciso um `.htaccess` com rewrite para `index.html`.
