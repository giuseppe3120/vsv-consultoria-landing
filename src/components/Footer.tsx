import logo from "@/assets/vsv-logo.webp";

export default function Footer() {
  return (
    <footer className="border-t bg-card py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center">
            <img
              src={logo}
              alt="VSV Consultoria - Segurança do Trabalho"
              className="h-16 w-auto object-contain sm:h-20"
            />
          </div>

          <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
            <a href="https://wa.me/5527999530056" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">(27) 99953-0056</a>
            <a href="mailto:contatovsvconsultoria@gmail.com" className="break-all transition-colors hover:text-primary">contatovsvconsultoria@gmail.com</a>
            <a href="https://instagram.com/vsvconsultoria" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">@vsvconsultoria</a>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} VSV Consultoria, Assessoria e Treinamentos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
