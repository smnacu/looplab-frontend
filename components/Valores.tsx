const valores = [
  {
    icono: "👤",
    titulo: "Humana",
    descripcion: "Ponemos a las personas en el centro de todo lo que hacemos.",
  },
  {
    icono: "",
    titulo: "Inteligente",
    descripcion: "Usamos IA con propósito para personalizar y potenciar cada experiencia.",
  },
  {
    icono: "⭐",
    titulo: "Innovadora",
    descripcion: "Exploramos nuevas formas de aprender y crecer constantemente.",
  },
  {
    icono: "🛡️",
    titulo: "Confiable",
    descripcion: "Construimos relaciones basadas en transparencia y ética.",
  },
  {
    icono: "",
    titulo: "En Crecimiento",
    descripcion: "Aprender es un viaje continuo. Estamos aquí para acompañarlo.",
  },
];

export default function Valores() {
  return (
    <section id="valores" className="w-full bg-blanco py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo mb-4">
            Nuestros Valores
          </h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            Los principios que guían cada decisión y cada experiencia de aprendizaje.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="bg-gris hover:bg-gris/80 border border-gris hover:border-turquesa/30 rounded-xl p-8 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{valor.icono}</div>
              <h3 className="text-2xl font-bold text-indigo mb-3">
                {valor.titulo}
              </h3>
              <p className="text-indigo/70 leading-relaxed">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
