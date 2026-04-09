export default function ProyectosPage() {
<<<<<<< HEAD
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

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Proyectos</h1>

      <div className="grid gap-4 md:grid-cols-3">
        {proyectos.map((proyecto) => (
          <a
            key={proyecto.href}
            href={proyecto.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-base font-medium">{proyecto.titulo}</div>
            <div className="mt-1 text-sm text-white/70">
              {proyecto.subtitulo}
            </div>
            <div className="mt-3 space-y-2 text-sm text-white/70 leading-relaxed">
              {proyecto.descripcion.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="mt-3 text-xs uppercase tracking-wide text-white/50">
              Stack
            </div>
            <div className="mt-1 text-sm text-white/70">
              {proyecto.stack}
            </div>
            <div className="mt-3 text-sm text-white/70">
              {proyecto.href}
            </div>
          </a>
        ))}
      </div>

=======
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Proyectos</h1>
      <p className="text-white/70">
        Acá van tus casos: problema → solución → stack → resultado.
      </p>
>>>>>>> f57aa10b (creacion del proyecto y primeras configuraciones)
    </div>
  );
}
