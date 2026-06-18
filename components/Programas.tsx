const programas = [
  {
    titulo: "Inglés Profesional",
    nivel: "Intermedio - Avanzado",
    duracion: "12 semanas",
    descripcion: "Dominá el inglés para el mundo laboral. Comunicación efectiva, presentaciones y negociaciones.",
    icono: "",
    color: "from-turquesa to-turquesa/60",
  },
  {
    titulo: "Liderazgo con IA",
    nivel: "Todos los niveles",
    duracion: "8 semanas",
    descripcion: "Aprendé a liderar equipos en la era de la IA. Gestión, toma de decisiones y pensamiento estratégico.",
    icono: "🤖",
    color: "from-dorado to-dorado/60",
  },
  {
    titulo: "Data Science para No-Técnicos",
    nivel: "Principiante",
    duracion: "10 semanas",
    descripcion: "Entendé datos sin ser programador. Análisis, visualización y toma de decisiones basada en datos.",
    icono: "📊",
    color: "from-salvia to-salvia/60",
  },
  {
    titulo: "Comunicación Efectiva",
    nivel: "Todos los niveles",
    duracion: "6 semanas",
    descripcion: "Mejorá tu comunicación escrita y verbal. Presentaciones, emails y storytelling profesional.",
    icono: "",
    color: "from-terracota to-terracota/60",
  },
];

export default function Programas() {
  return (
    <section id="programas" className="w-full bg-blanco py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-turquesa/10 border border-turquesa/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-turquesa">Próximamente</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo mb-4">
            Nuestros Programas
          </h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            Experiencias de aprendizaje diseñadas para transformar tu carrera.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programas.map((programa, index) => (
            <div
              key={index}
              className="bg-gris hover:bg-gris/80 border border-gris hover:border-turquesa/30 rounded-xl p-8 transition-all hover:scale-[1.02] hover:shadow-xl group"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${programa.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {programa.icono}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-indigo mb-2">
                    {programa.titulo}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="bg-blanco px-3 py-1 rounded-full text-indigo/70">
                      {programa.nivel}
                    </span>
                    <span className="bg-blanco px-3 py-1 rounded-full text-indigo/70">
                      {programa.duracion}
                    </span>
                  </div>
                  <p className="text-indigo/70 leading-relaxed">
                    {programa.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-dorado hover:bg-dorado/90 text-indigo font-bold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            Quiero ser de los primeros
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
