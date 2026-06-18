const stats = [
  { numero: "95%", descripcion: "de satisfacción en programas piloto", icono: "⭐" },
  { numero: "3x", descripcion: "más rápido que métodos tradicionales", icono: "" },
  { numero: "24/7", descripcion: "acompañamiento con IA", icono: "🤖" },
  { numero: "100%", descripcion: "personalizado para vos", icono: "🎯" },
];

export default function Stats() {
  return (
    <section className="w-full bg-gris py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-2">{stat.icono}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-indigo mb-2">
                {stat.numero}
              </div>
              <p className="text-indigo/70 text-sm md:text-base">
                {stat.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
