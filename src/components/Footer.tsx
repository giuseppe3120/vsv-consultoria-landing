import logo from "@/assets/vsv-logo.jpg";

export default function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VSV Consultoria" className="h-10 w-auto" />
            <div>
              <p className="font-heading text-sm font-bold text-foreground">VSV Consultoria</p>
              <p className="text-xs text-muted-foreground">Segurança do Trabalho</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a href="https://wa.me/5527999530056" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">(27) 99953-0056</a>
            <a href="mailto:contatovsvconsultoria@gmail.com" className="transition-colors hover:text-primary">contatovsvconsultoria@gmail.com</a>
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
