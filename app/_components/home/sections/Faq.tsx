export default function Faq() {
  return (
    <section className="px-6 py-24 md:px-20 lg:px-40 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Perguntas Frequentes
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {[
          {
            q: "As propostas têm validade jurídica?",
            a: "Sim. Utilizamos assinaturas eletrônicas que seguem as normas da ICP-Brasil, garantindo segurança para você e seu cliente.",
          },
          {
            q: "Posso usar meu próprio domínio?",
            a: "Sim, no plano Pro você pode configurar propostas sob o seu domínio (ex: propostas.suaempresa.com.br).",
          },
          {
            q: "Como recebo os pagamentos?",
            a: "A Orbit integra com os principais gateways de pagamento. O dinheiro cai diretamente na sua conta cadastrada.",
          },
        ].map((faq, i) => (
          <details
            key={i}
            className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer font-bold list-none">
              {faq.q}
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
