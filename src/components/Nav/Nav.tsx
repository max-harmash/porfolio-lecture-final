"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/Button/Button";

export interface NavItem {
  /** Текст пункту. Великими літерами його робить компонент. */
  label: string;
  /** Адреса пункту. */
  href: string;
}

export interface NavProps {
  /** Пункти меню по порядку. */
  items: NavItem[];
  /** Адреса активного пункту (сторінка, на якій зараз людина). Збігається з `href` одного з пунктів. */
  current?: string;
  /** Текст кнопки праворуч. Без нього кнопки немає. */
  ctaLabel?: string;
  /** Адреса кнопки праворуч. */
  ctaHref?: string;
  /** Чи відкрите меню на вузькому екрані одразу. Для перегляду в Storybook; на сайті не задавайте. */
  defaultOpen?: boolean;
}

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

function itemClass(active: boolean) {
  return (
    `rounded-control font-mono text-label uppercase text-ink decoration-2 underline-offset-8 ${focusRing} ` +
    (active ? "font-bold underline decoration-accent" : "hover:underline hover:decoration-ink-muted")
  );
}

/** Логотип: імʼя моноширинним шрифтом і блок-курсор accent. */
function Logo() {
  return (
    <Link href="/" className={`flex items-center gap-1 rounded-control ${focusRing}`} aria-label="maxharmash, на головну">
      <span className="font-mono text-heading text-ink">maxharmash</span>
      <span aria-hidden="true" className="h-5 w-3 bg-accent" />
    </Link>
  );
}

/**
 * Навігація сайту: логотип, пункти меню, кнопка праворуч.
 * На вузькому екрані (до 768px) пункти ховаються за кнопкою «Меню».
 */
export function Nav({ items, current, ctaLabel, ctaHref, defaultOpen = false }: NavProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  // Escape закриває відкрите меню.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav aria-label="Основне меню" className="relative z-20 flex flex-col">
      <div className="flex items-center justify-between gap-6 py-4">
        <Logo />

        {/* Широкий екран: пункти в рядок. */}
        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={item.href === current ? "page" : undefined}
                className={itemClass(item.href === current)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {ctaLabel && ctaHref && (
            <li>
              <Button href={ctaHref} variant="secondary" size="md">
                {ctaLabel}
              </Button>
            </li>
          )}
        </ul>

        {/* Вузький екран: кнопка, що розгортає меню. */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={`flex cursor-pointer items-center gap-2 rounded-control border-2 border-ink-muted px-4 py-2 font-mono text-label uppercase text-ink hover:border-ink md:hidden ${focusRing}`}
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
            {open ? (
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
          {open ? "Закрити" : "Меню"}
        </button>
      </div>

      {/* Вузький екран: випадна панель поверх контенту, сторінка під нею не зсувається. */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full rounded-card border-2 border-ink bg-canvas px-4 md:hidden"
      >
        <ul className="flex flex-col py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={item.href === current ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block py-3 ${itemClass(item.href === current)}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {ctaLabel && ctaHref && (
          <div className="pb-4">
            <Button href={ctaHref} variant="secondary" size="md">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
