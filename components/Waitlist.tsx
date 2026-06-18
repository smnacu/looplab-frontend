"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/firebase";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          nombre,
          _subject: "Nuevo registro en waitlist LoopLab",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setNombre("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="w-full bg-gradient-to-br from-indigo to-indigo/90 text-blanco py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Sé Parte del Cambio
        </h2>
        <p className="text-xl text-blanco/90 mb-10 max-w-2xl mx-auto">
          Unite a nuestra waitlist y sé de los primeros en experimentar el aprendizaje diseñado alrededor tuyo.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="max-w-md mx-auto bg-turquesa/20 border border-turquesa/30 rounded-lg p-6">
            <div className="text-5xl mb-3"></div>
            <h3 className="text-2xl font-bold mb-2">¡Gracias por unirte!</h3>
            <p className="text-blanco/90">
              Te avisamos cuando lancemos. Prepará para transformar tu aprendizaje.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              required
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-lg bg-blanco/10 border border-blanco/30 text-blanco placeholder-blanco/60 focus:outline-none focus:border-turquesa focus:ring-2 focus:ring-turquesa/50 disabled:opacity-50"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-lg bg-blanco/10 border border-blanco/30 text-blanco placeholder-blanco/60 focus:outline-none focus:border-turquesa focus:ring-2 focus:ring-turquesa/50 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-dorado hover:bg-dorado/90 text-indigo font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Unirme a la waitlist"
              )}
            </button>
            {status === "error" && (
              <p className="text-terracota text-sm">
                Hubo un error. Intentá de nuevo.
              </p>
            )}
          </form>
        )}

        <p className="text-sm text-blanco/60 mt-6">
          Sin spam. Solo actualizaciones importantes sobre LoopLab.
        </p>
      </div>
    </section>
  );
}
