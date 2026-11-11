import type { Metadata } from "next";

// Службова сторінка: зразки дизайн-токенів. У пошук не потрапляє.
export const metadata: Metadata = {
  title: "Токени",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "paper", className: "bg-paper", value: "#f4f3ef" },
  { name: "ink", className: "bg-ink", value: "#121212" },
  { name: "muted", className: "bg-muted", value: "#6b6862" },
  { name: "accent", className: "bg-accent", value: "#ff4f1a" },
  { name: "line", className: "bg-line", value: "#dad7d0 / 70%" },
  { name: "placeholder", className: "bg-placeholder", value: "#cfcbc3" },
];

const type = [
  { token: "text-display", className: "font-mono text-display", sample: "Автоматизую рутинні процеси" },
  { token: "text-lead", className: "font-sans text-lead text-muted", sample: "Щоб люди ставили задачі й ухвалювали рішення" },
  { token: "text-body", className: "font-sans text-body text-muted", sample: "як прибрати рутину з роботи журналіста" },
  { token: "text-logo", className: "font-mono text-logo", sample: "maxharmash" },
  { token: "text-title", className: "font-mono text-title", sample: "Тренінг для редакцій ЦЕДЕМ" },
  { token: "text-button", className: "font-mono text-button uppercase", sample: "Розказати про задачу →" },
  { token: "text-label", className: "font-mono text-label uppercase", sample: "Кейси · Виступи · Про мене" },
  { token: "text-index", className: "font-mono text-index text-accent", sample: "01 02 03" },
  { token: "text-hand", className: "font-hand text-hand text-accent", sample: "це головне!" },
];

export default function TokensPage() {
  return (
    <main className="bg-grid min-h-dvh px-4 py-module md:px-gutter">
      <div className="mx-auto flex max-w-page flex-col gap-module">
        <h1 className="font-mono text-label uppercase text-muted">Дизайн-токени</h1>

        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-label uppercase text-muted">Кольори</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {colors.map((c) => (
              <li key={c.name} className="flex flex-col gap-2">
                <span className={`h-module border-2 border-ink ${c.className}`} />
                <span className="font-mono text-title">{c.name}</span>
                <span className="font-sans text-body text-muted">{c.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-label uppercase text-muted">Типографіка</h2>
          <ul className="flex flex-col gap-6">
            {type.map((t) => (
              <li key={t.token} className="flex flex-col gap-1">
                <span className="font-mono text-index text-muted">{t.token}</span>
                <span className={t.className}>{t.sample}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-mono text-label uppercase text-muted">Кнопки й мітки</h2>
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-ink px-6 py-4 font-mono text-button uppercase text-white">
              Розказати про задачу →
            </span>
            <span className="border-2 border-ink px-6 py-3.5 font-mono text-button uppercase">
              Дивитись кейси
            </span>
            <span className="flex items-center gap-2.5">
              <span className="border-thin border-accent px-1.5 py-0.5 font-mono text-index text-accent">
                01
              </span>
              <span className="font-mono text-label uppercase text-accent">
                AI-автоматизація · медіа й команди
              </span>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
