import Link from "next/link";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">Nahuel Mangano</span>
          <span className="text-xs text-white/45 hidden sm:inline">
            nmvdevelop.com.ar
          </span>
        </Link>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="rounded-full bg-white text-zinc-950 px-3 py-1.5 text-sm font-medium hover:opacity-90 transition"
        >
          Hablemos
        </Link>
      </div>
    </header>
  );
}
