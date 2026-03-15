export default function Steps() {
  return (
    <section
      className="px-6 py-24 md:px-20 lg:px-40 bg-slate-50 dark:bg-slate-900/30"
      id="como-funciona"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Como funciona</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Quatro passos simples para profissionalizar seu fluxo de vendas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: "edit_note",
            title: "Crie proposta",
            desc: "Monte propostas personalizadas e profissionais em poucos minutos com nossos modelos.",
          },
          {
            icon: "link",
            title: "Envie o link",
            desc: "Compartilhe um link único com seu cliente. Chega de PDFs pesados e anexos perdidos.",
          },
          {
            icon: "verified_user",
            title: "Cliente aprova",
            desc: "O cliente revisa, negocia itens e aceita digitalmente com validade jurídica instantânea.",
          },
          {
            icon: "payments",
            title: "Receba pagamento",
            desc: "Receba via PIX, Cartão ou Boleto diretamente na sua conta bancária.",
          },
        ].map((step, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-primary transition-colors group"
          >
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">{step.icon}</span>
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
