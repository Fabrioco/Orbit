export default function CTA() {
  return (
    <section className="px-6 py-24 md:px-20 lg:px-40">
      <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-16 text-center text-white flex flex-col items-center gap-8 shadow-2xl shadow-primary/30">
        <div className="relative z-10 max-w-2xl flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black">
            Pronto para profissionalizar suas vendas?
          </h2>
          <p className="text-lg opacity-90">
            Junte-se a centenas de freelancers que já estão usando a Orbit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button className="rounded-xl h-14 px-10 bg-white text-primary text-lg font-black hover:bg-slate-100 transition-colors shadow-xl">
              Começar agora
            </button>
            <button className="rounded-xl h-14 px-10 border-2 border-white bg-transparent text-white text-lg font-black hover:bg-white/10 transition-colors">
              Falar com especialista
            </button>
          </div>
          <p className="text-sm opacity-75 italic">
            Teste grátis por 14 dias • Sem cartão de crédito
          </p>
        </div>
      </div>
    </section>
  );
}
