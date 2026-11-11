import Link from "next/link";
import { useId, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps {
  /** Текст кнопки. Пишіть звичайно: великими літерами його робить сам компонент. */
  children: ReactNode;
  /** `primary` — заливка accent, головна дія екрана. `secondary` — без заливки, з межею ink-muted. */
  variant?: ButtonVariant;
  /** `md` — звичайна (меню, форми). `lg` — велика (перший екран, заклики до дії). */
  size?: ButtonSize;
  /** Адреса. Якщо задана, компонент стає посиланням (next/link), а не кнопкою. */
  href?: string;
  /** Тип кнопки у формі. Для посилання не діє. */
  type?: "button" | "submit";
  /** Вимкнений стан: кнопка не натискається, посилання не переходить, але фокус клавіатурою лишається. */
  disabled?: boolean;
  /** Пояснення, чому кнопка вимкнена. Показується під кнопкою і зачитується скрінрідером. */
  disabledReason?: string;
  /** Обробник натискання. У вимкненому стані не викликається. */
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-control border-2 font-mono uppercase whitespace-nowrap transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const sizes: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-label",
  lg: "px-6 py-3 text-button",
};

const variants: Record<ButtonVariant, string> = {
  primary: "cursor-pointer border-accent bg-accent text-ink hover:border-ink hover:bg-ink hover:text-canvas",
  secondary: "cursor-pointer border-ink-muted bg-transparent text-ink hover:border-ink hover:bg-surface",
};

// Однаковий для обох варіантів: пунктирна межа line, текст ink-muted (5 : 1 на canvas).
const disabledStyle = "cursor-not-allowed border-dashed border-line bg-transparent text-ink-muted";

/**
 * Кнопка дизайн-системи. Моноширинний шрифт великими літерами, межа 2px, кути `rounded-control`.
 * З `href` стає посиланням. Вимкнена кнопка лишається у фокусі клавіатури й може показати причину.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  disabledReason,
  onClick,
}: ButtonProps) {
  const reasonId = useId();
  const className = `${base} ${sizes[size]} ${disabled ? disabledStyle : variants[variant]}`;
  const describedBy = disabled && disabledReason ? reasonId : undefined;

  let control: ReactNode;
  if (href && !disabled) {
    control = (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  } else if (href) {
    // Вимкнене посилання: без href, але у фокусі, з поясненням.
    control = (
      <a role="link" aria-disabled="true" tabIndex={0} aria-describedby={describedBy} className={className}>
        {children}
      </a>
    );
  } else {
    // aria-disabled замість disabled: кнопка лишається у фокусі, тож причину можна прочитати.
    control = (
      <button
        type={disabled ? "button" : type}
        aria-disabled={disabled || undefined}
        aria-describedby={describedBy}
        className={className}
        onClick={disabled ? undefined : onClick}
      >
        {children}
      </button>
    );
  }

  if (!describedBy) return control;

  return (
    <span className="inline-flex flex-col items-start gap-2">
      {control}
      <span id={reasonId} className="font-sans text-caption text-ink-muted">
        {disabledReason}
      </span>
    </span>
  );
}
