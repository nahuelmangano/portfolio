import Image from "next/image";

const proyectos = [
  {
    titulo: "Finanzas",
    subtitulo: "Control de Finanzas Personales",
    descripcion: [
      "Aplicacion web para gestionar ingresos, gastos y presupuestos con reportes mensuales y recordatorios automaticos por email.",
      "Disenada como una PWA moderna, segura y escalable para uso personal o multiusuario.",
    ],
    stack: "Next.js | Auth.js | SQL Server | Docker | Nginx | Cron | SMTP",
    href: "https://finanzas.nmvdevelop.com.ar/",
  },
  {
    titulo: "UPEClinica",
    subtitulo: "Sistema de Gestion Clinica",
    descripcion: [
      "Sistema web integral para consultorios medicos que gestiona pacientes, historias clinicas y evoluciones con control de accesos por rol.",
      "Arquitectura en capas orientada a buenas practicas y escalabilidad en entornos reales.",
    ],
    stack:
      "Angular | ASP.NET Core | SQL Server | Docker | Arquitectura en capas | RBAC",
    href: "http://upeclinica.net.ar",
  },
  {
    titulo: "Notarizacion de Documentos",
    subtitulo: "Integridad y Trazabilidad",
    descripcion: [
      "Aplicacion web para la notarizacion digital de documentos mediante hashes criptograficos, garantizando su integridad.",
      "Permite validar que un archivo no fue modificado desde su registro.",
    ],
    stack: "Node.js | Criptografia (hash) | Docker | API REST",
    href: "http://upeclinica.net.ar:3000/",
  },
];

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.18em] text-white/55">
            Nahuel Mangano · Freelance Full-Stack Developer
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Desarrollo productos web simples de usar y listos para escalar.
          </h1>

          <p className="max-w-2xl leading-relaxed text-white/70">
            Trabajo con Next.js, bases de datos y automatizaciones. Diseño y
            construyo soluciones claras para negocio: landing pages, dashboards
            y flujos integrados con APIs.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-2">
            <Image
              src="/developer-photo.jpeg"
              alt="Foto de Nahuel Mangano"
              width={720}
              height={900}
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight">Proyectos</h2>


      <div className="grid gap-4 md:grid-cols-3">
        {proyectos.map((proyecto) => (
          <a
            key={proyecto.href}
            href={proyecto.href}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-3xl font-medium tracking-tight">{proyecto.titulo}</div>
            <div className="mt-1 text-sm text-white/75">{proyecto.subtitulo}</div>

            <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/70">
              {proyecto.descripcion.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div className="mt-4 text-xs uppercase tracking-wide text-white/50">Stack</div>
            <div className="mt-1 text-sm leading-relaxed text-white/75">{proyecto.stack}</div>

            <div className="mt-4 text-sm text-white/75">{proyecto.href}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
