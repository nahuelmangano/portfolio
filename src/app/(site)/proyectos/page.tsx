export default function ProyectosPage() {
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
      titulo: "FikaStore",
      subtitulo: "E-commerce completo",
      descripcion: [
        "Tienda online con catalogo, carrito, checkout, pagos, usuarios, pedidos y panel administrativo.",
        "Incluye promociones, cupones, emails transaccionales y gestion de productos con importacion y exportacion.",
      ],
      stack:
        "Next.js | TypeScript | Prisma | SQL Server | NextAuth | Mercado Pago",
      href: "https://tienda-demo.nmvdevelop.com.ar/",
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
        {proyectos.map((proyecto) => {
          const Card = proyecto.href ? "a" : "div";

          return (
            <Card
              key={proyecto.titulo}
              {...(proyecto.href
                ? { href: proyecto.href, target: "_blank", rel: "noreferrer" }
                : {})}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="text-base font-medium">{proyecto.titulo}</div>
              <div className="mt-1 text-sm text-white/70">
                {proyecto.subtitulo}
              </div>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
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
              {proyecto.href ? (
                <div className="mt-3 text-sm text-white/70">
                  {proyecto.href}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
