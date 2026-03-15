"use client";
import Navbar from "./_components/home/layout/Header";
import Hero from "./_components/home/sections/Hero";
import Steps from "./_components/home/sections/Steps";
import Pricing from "./_components/home/sections/Pricing";
import Benefits from "./_components/home/sections/Benefits";
import Faq from "./_components/home/sections/Faq";
import CTA from "./_components/home/sections/Cta";
import Footer from "./_components/home/layout/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Steps Section */}
        <Steps />

        {/* Benefits Section */}
        <Benefits />

        {/* Pricing Section - NOVA */}
        <Pricing />

        {/* FAQ Section - NOVA */}
        <Faq />

        {/* Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
