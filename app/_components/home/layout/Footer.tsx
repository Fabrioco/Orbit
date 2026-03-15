import { scrollToSection } from "@/utils/scroll";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-12 md:px-20 lg:px-40">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-primary size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">orbit</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">Orbit SaaS</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-xs">
            A plataforma completa para gerir o ciclo de vida das suas propostas
            comerciais.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Produto</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-500">
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("como-funciona")}
                className="hover:text-primary transition-colors"
              >
                Recursos
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("precos")}
                className="hover:text-primary transition-colors"
              >
                Preços
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Suporte</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-500">
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("faq")}
                className="hover:text-primary transition-colors"
              >
                Central de Ajuda
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("contato")}
                className="hover:text-primary transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
        <p>© 2026 ORBIT SAAS. TODOS OS DIREITOS RESERVADOS.</p>
        <span>FEITO COM AMOR NO BRASIL</span>
      </div>
    </footer>
  );
}
