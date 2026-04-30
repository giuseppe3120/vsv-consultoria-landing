import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5527999530056";

export default function Contact() {
  const ref = useScrollReveal();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, sou ${name || "visitante do site"}. ${message || "Gostaria de saber mais sobre a consultoria."}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-16 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <div className="scroll-reveal mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-stagger="0">
              Contato
            </div>
            <h2 className="scroll-reveal font-heading text-2xl font-800 tracking-tight sm:text-3xl lg:text-4xl" data-stagger="1">
              Vamos conversar?
            </h2>
            <p className="scroll-reveal mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base" data-stagger="2">
              O primeiro passo é simples: chame no WhatsApp e agende uma conversa sem compromisso.
            </p>

            <div className="scroll-reveal mt-6 space-y-4 sm:mt-8" data-stagger="3">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Olá! Gostaria de agendar um atendimento.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-primary px-5 py-3.5 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 sm:px-6 sm:py-4"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                (27) 99953-0056
              </a>

              <div className="scroll-reveal flex flex-col gap-2 text-xs text-muted-foreground sm:gap-3 sm:text-sm" data-stagger="4">
                <a href="mailto:contatovsvconsultoria@gmail.com" className="transition-colors hover:text-primary break-all">
                  contatovsvconsultoria@gmail.com
                </a>
                <a href="https://instagram.com/vsvconsultoria" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  @vsvconsultoria
                </a>
                <span>Serra — Grande Vitória, ES</span>
              </div>
            </div>
          </div>

          <div className="scroll-reveal" data-stagger="3">
            <form onSubmit={handleSubmit} className="rounded-xl border border-primary/8 bg-card p-5 sm:p-8">
              <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">Envie uma mensagem</h3>
              <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">Ao enviar, o WhatsApp abrirá com sua mensagem pronta.</p>

              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium text-foreground sm:mb-1.5 sm:text-sm">Nome</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary sm:px-4 sm:py-2.5"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="msg" className="mb-1 block text-xs font-medium text-foreground sm:mb-1.5 sm:text-sm">Mensagem</label>
                  <textarea
                    id="msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none sm:px-4 sm:py-2.5"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 sm:px-6 sm:py-3"
                >
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
