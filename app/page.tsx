"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 md:px-20 lg:px-40 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="text-primary size-8 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-primary text-4xl"
              style={{ fontSize: "2.25rem" }}
            >
              orbit
            </span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Orbit SaaS
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("como-funciona")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Como funciona
          </button>
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("precos")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Preços
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all">
            Criar proposta grátis
          </button>
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">
              account_circle
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 p-8">
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

        {/* Steps Section */}
        <section
          className="px-6 py-24 md:px-20 lg:px-40 bg-slate-50 dark:bg-slate-900/30"
          id="como-funciona"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Como funciona
            </h2>
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

        {/* Benefits Section */}
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

        {/* Pricing Section - NOVA */}
        <section
          className="px-6 py-24 md:px-20 lg:px-40 bg-slate-50 dark:bg-slate-900/30"
          id="precos"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Planos para todos os tamanhos
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Comece grátis durante o beta e mude quando quiser.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold">Starter</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black">R$0</span>
                  <span className="text-slate-500 text-sm">/mês</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  3 propostas ativas
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Assinatura digital básica
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Link personalizado
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors mt-auto">
                Começar agora
              </button>
            </div>
            {/* Plan 2 - Featured */}
            <div className="p-8 rounded-3xl border-2 border-primary bg-white dark:bg-slate-900 flex flex-col gap-6 relative shadow-2xl shadow-primary/10">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Mais Popular
              </span>
              <div>
                <h3 className="text-lg font-bold">Pro (Beta)</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black text-primary">
                    Grátis
                  </span>
                  <span className="text-slate-500 text-sm line-through ml-2">
                    R$79
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Propostas ilimitadas
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Domínio próprio (CName)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Dashboard de métricas
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Integração com WhatsApp
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all mt-auto shadow-lg shadow-primary/20">
                Acessar Beta Pro
              </button>
            </div>
            {/* Plan 3 */}
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold">Agência</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black text-slate-400 italic">
                    Breve
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  Múltiplos usuários
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  White-label completo
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>{" "}
                  API de integração
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-400 font-bold cursor-not-allowed mt-auto">
                Lista de espera
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section - NOVA */}
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

        {/* Final CTA */}
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
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-12 md:px-20 lg:px-40">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-primary size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  orbit
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">Orbit SaaS</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-xs">
              A plataforma completa para gerir o ciclo de vida das suas
              propostas comerciais.
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
    </div>
  );
}
