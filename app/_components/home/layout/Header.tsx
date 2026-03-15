"use client";
import { scrollToSection } from "@/utils/scroll";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 md:px-20 lg:px-40 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary text-4xl"
          style={{ fontSize: "2.25rem" }}
        >
          orbit
        </span>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Orbit SaaS
        </h2>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {["como-funciona", "benefícios", "preços"].map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-sm font-medium hover:text-primary transition-colors capitalize"
          >
            {id.replace("-", " ")}
          </button>
        ))}
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
  );
}
