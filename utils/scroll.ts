export const scrollToSection = (id: string) => {
  // 1. Remove acentos, transforma em minúsculo e remove caracteres especiais
  const sanitizedId = id
    .toLowerCase()
    .normalize("NFD") // Decompõe caracteres acentuados (ex: é -> e + ´)
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .replace(/ç/g, "c") // Garante a troca do ç por c
    .replace(/\s+/g, "-") // Substitui espaços por hífen (caso haja)
    .trim();

  const element = document.getElementById(sanitizedId);

  if (element) {
    // Adicionei um pequeno ajuste de scroll aqui para não cobrir o título com o Header fixo
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.warn(`Elemento com ID #${sanitizedId} não encontrado.`);
  }
};
