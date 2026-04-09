import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="space-y-5">
        <p className="text-sm text-white/60">
          Nahuel Mangano · Freelance Full-Stack Developer
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Desarrollo productos web con foco en performance, UX y despliegues
          simples.
        </h1>

        <p className="max-w-2xl text-white/70 leading-relaxed">
          Trabajo con Next.js, bases de datos y automatizaciones. Entrego
          soluciones listas para producción: desde landings y dashboards hasta
          integraciones con APIs y flujos en n8n.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/proyectos"
            className="rounded-full bg-white text-zinc-950 px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Ver proyectos
          </Link>
          <Link
            href="/servicios"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 transition"
          >
            Servicios
          </Link>
          <a
            href="https://nmvdevelop.com.ar"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 transition"
          >
            nmvdevelop.com.ar
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card
          title="Web Apps"
          desc="Dashboards, CRUDs, auth, panel admin, reportes."
        />
        <Card
          title="APIs + Bases de datos"
          desc="Modelado, endpoints, integraciones, migraciones y performance."
        />
        <Card
          title="Automatización"
          desc="n8n, bots, alertas, tareas programadas y flujos de negocio."
        />
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-base font-medium">{title}</div>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}
