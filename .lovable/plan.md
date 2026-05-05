## Substituir a logo oficial em todo o site

A logo enviada (PNG com fundo transparente, formato quadrado ~540x540, com brasão "VSV" + "Segurança do Trabalho") substituirá o arquivo atual `src/assets/vsv-logo.jpg`, que é usado apenas em dois lugares: `Header.tsx` e `Footer.tsx`.

### Passos

1. **Importar o arquivo oficial**
   - Copiar `user-uploads://logo-vsv-consultoria-alphachanel.png` para `src/assets/vsv-logo.png`.
   - Remover/parar de usar `src/assets/vsv-logo.jpg` (manter import apontando para o `.png`).

2. **Header (`src/components/Header.tsx`)**
   - Como a logo já contém o texto "Segurança do Trabalho", manter apenas a imagem (sem texto adicional ao lado).
   - Ajustar dimensões responsivas para boa leitura preservando proporção quadrada:
     - Mobile (`<sm`): `h-10`
     - `sm`: `h-12`
     - `lg+`: `h-14`
   - Usar `w-auto` + `object-contain` para manter proporção.
   - Aumentar levemente a altura do header para acomodar a logo quadrada sem cortar.
   - Mesma logo (menor, `h-9`) dentro do drawer mobile (`SheetHeader`), removendo o texto "VSV Consultoria" duplicado já que a logo o contém.

3. **Footer (`src/components/Footer.tsx`)**
   - Substituir a logo + bloco de texto "VSV Consultoria / Segurança do Trabalho" por apenas a logo oficial (`h-14 sm:h-16`), centralizada no mobile e à esquerda no desktop.
   - Manter os contatos e o copyright.

4. **Verificação visual**
   - Conferir nos viewports 360, 414, 768, 1112 (atual) e 1440px que a logo:
     - Mantém proporção (sem distorção)
     - É legível (texto "Segurança do Trabalho" visível em desktop, brasão claro em mobile)
     - Não estoura a altura do header nem encosta nos itens de navegação

### Arquivos alterados
- `src/assets/vsv-logo.png` (novo)
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
