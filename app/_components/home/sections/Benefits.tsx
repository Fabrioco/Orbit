import Image from "next/image";

export default function Benefits() {
  return (
    <section
      className="px-6 py-24 md:px-20 lg:px-40 max-w-7xl mx-auto"
      id="beneficios"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">
            Benefícios que impulsionam seu negócio
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Uma nova forma de vender serviços online.
          </p>
        </div>
        <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Ver todos os recursos{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Feche mais clientes",
            desc: "Aumente sua taxa de conversão com propostas interativas que encantam desde o primeiro clique.",
            url: "/images/landing-page/deal.svg",
          },
          {
            title: "Negocie com organização",
            desc: "Centralize todo o histórico de alterações e chats de negociação dentro do link da proposta.",
            url: "/images/landing-page/collaboration.svg",
          },
          {
            title: "Aprove digitalmente",
            desc: "Assinatura digital integrada com validade jurídica em conformidade com as normas brasileiras.",
            url: "/images/landing-page/sign.svg",
          },
          {
            title: "Receba mais rápido",
            desc: "Gere cobranças automáticas após o aceite. Reduza a inadimplência com lembretes automáticos.",
            url: "/images/landing-page/payments.svg",
          },
        ].map((benefit, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 p-4 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-800">
              <Image
                fill
                src={benefit.url}
                alt={benefit.title}
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
