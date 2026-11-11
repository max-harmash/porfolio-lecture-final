import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { Nav } from "@/components/Nav/Nav";
import { WorkCard } from "@/components/WorkCard/WorkCard";
import brandSystem from "@/assets/cases/brand-system.jpg";
import figmaPlugin from "@/assets/cases/figma-plugin.jpg";
import training from "@/assets/cases/training.jpg";
import arrow from "@/assets/home/arrow.svg";
import portrait from "@/assets/home/portrait.jpg";

const navItems = [
  { label: "Кейси", href: "/cases" },
  { label: "Виступи", href: "/talks" },
  { label: "Про мене", href: "/about" },
  { label: "Контакти", href: "/contacts" },
];

const cases = [
  {
    href: "/cases/cedem",
    index: "01",
    title: "Тренінг для редакцій ЦЕДЕМ",
    description: "як прибрати рутину з роботи журналіста",
    cover: training,
  },
  {
    href: "/cases/brand-system",
    index: "02",
    title: "Система бренду в коді",
    description: "тексти й рендер роблять агенти",
    cover: brandSystem,
  },
  {
    href: "/cases/figma-plugin",
    index: "03",
    title: "Figma-плагін",
    description: "український плейсхолдер-контент за клік",
    cover: figmaPlugin,
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh bg-grid px-4 md:px-8">
      <div className="mx-auto w-full max-w-page">
        <header>
          <Nav items={navItems} ctaLabel="Написати" ctaHref="/contacts" />
        </header>

        <main>
          {/* Перший екран: позиціонування, заклик до дії, фото. */}
          <section className="flex flex-col gap-8 pt-8 md:pt-section lg:flex-row lg:gap-section">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p className="flex items-start gap-2 font-mono text-label uppercase text-accent">
                <span className="shrink-0 border-thin border-accent px-2 text-caption">01</span>
                <span>AI-автоматизація · медіа й команди</span>
              </p>

              <h1 className="font-mono text-display text-ink">
                Автоматизую рутинні процеси медіа й невеликих команд з AI та агентами
              </h1>

              <p className="max-w-xl font-sans text-lead text-ink-muted">
                Щоб люди ставили задачі й ухвалювали рішення, а рутину робили агенти.
              </p>

              {/* На телефоні кнопки на всю ширину одна під одною, далі — в рядок. */}
              <div className="grid gap-4 sm:flex sm:flex-wrap">
                <Button href="/contacts" size="lg">
                  Розказати про задачу →
                </Button>
                <Button href="#cases" variant="secondary" size="lg">
                  Дивитись кейси
                </Button>
              </div>
            </div>

            {/* До 1024px фото на всю ширину в горизонтальному кадрі, ширше — вертикальна колонка праворуч. */}
            <div className="relative w-full shrink-0 lg:w-xs lg:pt-4">
              <Image
                src={portrait}
                alt="Максим Гармаш у горах, у капелюсі й сонцезахисних окулярах"
                sizes="(min-width: 1024px) 320px, 100vw"
                placeholder="blur"
                priority
                className="aspect-4/3 w-full object-cover md:aspect-video lg:aspect-portrait"
              />

              {/* Рукописна нотатка зі стрілкою: лише на широкому екрані, де вона вміщається між текстом і фото. */}
              <div aria-hidden="true" className="absolute top-1/2 right-full mr-2 hidden flex-col items-start gap-2 lg:flex">
                <Image src={arrow} alt="" unoptimized />
                <span className="-rotate-6 font-hand text-hand whitespace-nowrap text-accent">це головне!</span>
              </div>
            </div>
          </section>

          {/* Кейси: три картки. */}
          <section id="cases" aria-labelledby="cases-title" className="flex scroll-mt-8 flex-col gap-4 pt-section pb-8">
            <h2 id="cases-title" className="font-mono text-label uppercase text-ink-muted">
              Кейси
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {cases.map((item) => (
                <WorkCard key={item.href} {...item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
