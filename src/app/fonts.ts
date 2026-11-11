import { Caveat, Geologica, Martian_Mono } from "next/font/google";

// Заголовки, меню, кнопки й мітки.
const martian = Martian_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-martian",
});

// Основний текст.
const geologica = Geologica({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-geologica",
});

// Рукописні нотатки, лише на першому екрані: не вантажимо заздалегідь.
const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: "700",
  display: "swap",
  preload: false,
  variable: "--font-caveat",
});

/** Класи зі змінними шрифтів. Їх читає @theme inline у globals.css. */
export const fontVariables = `${martian.variable} ${geologica.variable} ${caveat.variable}`;
