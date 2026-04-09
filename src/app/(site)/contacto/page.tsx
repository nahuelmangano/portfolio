"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Mensaje enviado. Te respondo a la brevedad.");
    } catch (error) {
      setStatus("error");
      setMessage("No se pudo enviar. Proba de nuevo en unos minutos.");
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>

      <form
        className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label className="text-sm text-white/70" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/70" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/70" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            placeholder="Contame sobre tu proyecto"
            className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="rounded-full bg-white text-zinc-950 px-4 py-2 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {message ? (
            <p
              className={`text-xs ${
                status === "success" ? "text-emerald-300/80" : "text-red-300/80"
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>
      </form>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-white/70">
          Si queres comunicarte conmigo, aca estan mis canales:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/nahuel-mangano-vargas/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 transition"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nahuelmangano"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 transition"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:mangano.nahuel@gmail.com"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 transition"
          >
            mangano.nahuel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
