import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json();

  if (!nombre || !email || !mensaje) {
    return new Response("Missing fields", { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const to = process.env.SMTP_TO || user;

  if (!host || !user || !pass || !from || !to) {
    return new Response("SMTP not configured", { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to,
    subject: `Nuevo contacto: ${nombre}`,
    replyTo: email,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje:\n${mensaje}`,
  });

  return Response.json({ ok: true });
}
