export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "R$0",
      features: [
        "3 propostas ativas",
        "Assinatura básica",
        "Link personalizado",
      ],
      current: false,
    },
    {
      name: "Pro (Beta)",
      price: "Grátis",
      oldPrice: "R$79",
      features: [
        "Propostas ilimitadas",
        "Domínio próprio (CName)",
        "Dashboard de métricas",
        "Integração WhatsApp",
      ],
      current: true,
    },
    {
      name: "Agência",
      price: "Breve",
      features: [
        "Múltiplos usuários",
        "White-label completo",
        "API de integração",
      ],
      current: false,
    },
  ];

  return (
    <section
      className="px-6 py-24 md:px-20 lg:px-40 bg-slate-50 dark:bg-slate-900/30"
      id="precos"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Planos para todos os tamanhos
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Comece grátis durante o beta.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-8 rounded-3xl border ${plan.current ? "border-2 border-primary shadow-2xl shadow-primary/10" : "border-slate-200 dark:border-slate-800"} bg-white dark:bg-slate-900 flex flex-col gap-6 relative`}
          >
            {plan.current && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Mais Popular
              </span>
            )}
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <div className="flex items-baseline gap-1">
              <span
                className={`text-4xl font-black ${plan.current ? "text-primary" : ""}`}
              >
                {plan.price}
              </span>
              {plan.oldPrice && (
                <span className="text-slate-500 text-sm line-through ml-2">
                  {plan.oldPrice}
                </span>
              )}
            </div>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-bold transition-all mt-auto ${plan.current ? "bg-primary text-white hover:bg-primary/90" : "border border-primary text-primary hover:bg-primary/5"}`}
            >
              {plan.name === "Agência" ? "Lista de espera" : "Começar agora"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
