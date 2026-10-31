import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Максим Гармаш — портфоліо",
  description:
    "AI-автоматизація рутинних процесів для медіа й невеликих команд.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
