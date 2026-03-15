export default function Hero() {
  return (
    <section className="px-6 py-16 md:px-20 lg:px-40 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 rounded-full w-fit">
              Acesso antecipado
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Transforme propostas em{" "}
              <span className="text-primary">clientes.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg">
              Aprove propostas, negocie alterações e receba pagamentos em um
              único link profissional e automatizado.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25">
              Criar proposta grátis
            </button>
            <button className="flex items-center justify-center rounded-xl h-14 px-8 border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white text-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Ver demonstração
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300"
                ></div>
              ))}
            </div>
            <span>Beta aberto para freelancers</span>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 aspect-video">
            <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 p-8">
              <div className="flex flex-col gap-4">
                <div className="h-8 w-1/3 bg-slate-700 rounded-lg animate-pulse"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-primary/30 rounded-lg border border-primary/50"></div>
                  <div className="h-24 bg-slate-700 rounded-lg"></div>
                  <div className="h-24 bg-slate-700 rounded-lg"></div>
                </div>
                <div className="h-48 bg-slate-700/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
