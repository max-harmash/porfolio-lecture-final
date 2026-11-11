import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface WorkCardProps {
  /** Адреса сторінки кейсу. Уся картка — одне посилання. */
  href: string;
  /** Назва роботи. */
  title: string;
  /** Короткий опис в один рядок: яку рутину прибрала робота. */
  description: string;
  /** Обкладинка. Статичний імпорт картинки (`import cover from "@/assets/cases/…"`). */
  cover: StaticImageData;
  /** Опис обкладинки для скрінрідера. Порожній рядок — якщо картинка лише декор. */
  coverAlt?: string;
  /** Номер роботи («01»). Необовʼязковий. */
  index?: string;
}

/**
 * Картка роботи: обкладинка, номер і назва, короткий опис. Уся картка клікабельна.
 * Кути `rounded-card`, відступи з кроків 8–32px.
 */
export function WorkCard({ href, title, description, cover, coverAlt = "", index }: WorkCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <span className="block overflow-hidden rounded-card border-2 border-line bg-line transition-colors group-hover:border-ink">
        <Image
          src={cover}
          alt={coverAlt}
          sizes="(min-width: 1024px) 392px, 100vw"
          placeholder="blur"
          className="aspect-cover w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </span>
      <span className="flex items-baseline gap-2">
        {index && <span className="font-mono text-caption text-accent">{index}</span>}
        <span className="font-mono text-title text-ink decoration-accent decoration-2 underline-offset-4 group-hover:underline">
          {title}
        </span>
      </span>
      <span className="font-sans text-body text-ink-muted">{description}</span>
    </Link>
  );
}
