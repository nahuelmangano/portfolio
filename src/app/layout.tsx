import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nmvdevelop.com.ar"),
  title: {
    default: "Nahuel Mangano | nmvdevelop.com.ar",
    template: "%s | Nahuel Mangano",
  },
  description:
    "Freelance full-stack developer. Web apps, APIs, DevOps ligero y automatizaciones.",
  openGraph: {
    title: "Nahuel Mangano | nmvdevelop.com.ar",
    description:
      "Freelance full-stack developer. Web apps, APIs, DevOps ligero y automatizaciones.",
    url: "https://nmvdevelop.com.ar",
    siteName: "nmvdevelop.com.ar",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
