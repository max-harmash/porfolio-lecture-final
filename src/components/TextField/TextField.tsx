import { useId } from "react";

export interface TextFieldProps {
  /** Підпис над полем. Обовʼязковий: поле без підпису недоступне. */
  label: string;
  /** Імʼя поля у формі. */
  name: string;
  /** Тип поля: текст, пошта, телефон. */
  type?: "text" | "email" | "tel";
  /** Підказка-приклад усередині порожнього поля. Не замінює підпис. */
  placeholder?: string;
  /** Початкове значення. Якщо задане, поле показується заповненим. */
  defaultValue?: string;
  /** Підказка під полем, коли помилки немає. */
  hint?: string;
  /** Стан помилки: межа й текст danger, іконка. */
  hasError?: boolean;
  /** Текст помилки під полем. Показується, лише коли `hasError`. */
  errorMessage?: string;
  /** Вимкнене поле: не редагується, текст ink-muted. */
  disabled?: boolean;
  /** Обовʼязкове поле. */
  required?: boolean;
}

/** Іконка помилки: коло зі знаком оклику, колір береться з тексту (danger). */
function ErrorIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-px size-4 shrink-0" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.5v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}

const inputBase =
  "w-full rounded-control border-2 px-4 py-3 font-sans text-body transition-colors " +
  "placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * Текстове поле з підписом над ним. Межа `ink-muted`, кути `rounded-control`.
 * Стани: звичайне, наведення, фокус, заповнене, помилка, вимкнене.
 */
export function TextField({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  hint,
  hasError = false,
  errorMessage,
  disabled = false,
  required = false,
}: TextFieldProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const showError = hasError && !disabled;
  const message = showError ? errorMessage : hint;

  const state = disabled
    ? "cursor-not-allowed border-dashed border-line bg-canvas text-ink-muted"
    : showError
      ? "border-danger bg-surface text-ink"
      : "border-ink-muted bg-surface text-ink hover:border-ink";

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`font-mono text-label uppercase ${disabled ? "text-ink-muted" : "text-ink"}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        aria-invalid={showError || undefined}
        aria-describedby={message ? messageId : undefined}
        className={`${inputBase} ${state}`}
      />
      {message && (
        <p
          id={messageId}
          className={`flex gap-2 font-sans text-caption ${showError ? "text-danger" : "text-ink-muted"}`}
        >
          {showError && <ErrorIcon />}
          {message}
        </p>
      )}
    </div>
  );
}
