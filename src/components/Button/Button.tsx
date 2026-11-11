import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps {
  /** Текст кнопки. Пишіть звичайно: великими літерами його робить сам компонент. */
  children: ReactNode;
  /** `primary` — темна заливка, головна дія екрана. `secondary` — рамка без заливки, другорядна дія. */
  variant?: ButtonVariant;
  /** `md` — компактна, для меню («Написати»). `lg` — велика, для першого екрана й закликів до дії. */
  size?: ButtonSize;
  /** Адреса. Якщо задана, компонент стає посиланням (next/link), а не кнопкою. */
  href?: string;
  /** Тип кнопки у формі. Для посилання не діє. */
  type?: "button" | "submit";
  /** Вимкнений стан: сірі кольори, не натискається, посилання не переходить. */
  disabled?: boolean;
  /** Обробник натискання. */
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 border-2 font-mono uppercase whitespace-nowrap transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const sizes: Record<ButtonSize, string> = {
  md: "px-4.5 py-2.5 text-label",
  lg: "px-6 py-3.5 text-button",
};

const variants: Record<ButtonVariant, { enabled: string; disabled: string }> = {
  primary: {
    enabled: "border-ink bg-ink text-white hover:bg-paper hover:text-ink",
    disabled: "border-muted bg-muted text-white",
  },
  secondary: {
    enabled: "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
    disabled: "border-muted bg-transparent text-muted",
  },
};

/**
 * Кнопка сайту. Прямокутна, моноширинний шрифт великими літерами, рамка 2px.
 * Вміє бути кнопкою або посиланням (з `href`).
 */
export function Button({
  children,
  variant = "primary",
  size = "lg",
  href,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const state = disabled
    ? `${variants[variant].disabled} cursor-not-allowed`
    : `${variants[variant].enabled} cursor-pointer`;
  const className = `${base} ${sizes[size]} ${state}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href && disabled) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
