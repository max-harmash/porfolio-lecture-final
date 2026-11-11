import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Максим Гармаш — портфоліо",
  description:
    "AI-автоматизація рутинних процесів для медіа й невеликих команд.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uk" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
