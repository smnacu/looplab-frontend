const pasos = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descripcion: "Analizamos tu nivel actual, objetivos y estilo de aprendizaje con IA.",
    color: "from-turquesa to-turquesa/60",
  },
  {
    numero: "02",
    titulo: "Ruta Personalizada",
    descripcion: "Diseñamos un plan de aprendizaje único adaptado a vos.",
    color: "from-dorado to-dorado/60",
  },
  {
    numero: "03",
    titulo: "Aprendizaje Continuo",
    descripcion: "Acompañamos tu progreso con feedback inteligente y ajustes en tiempo real.",
    color: "from-salvia to-salvia/60",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="w-full bg-gris py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-indigo/70 max-w-2xl mx-auto">
            Tres pasos simples para transformar tu experiencia de aprendizaje.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < pasos.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-turquesa to-transparent -translate-x-1/2"></div>
              )}
              
              <div className="bg-blanco rounded-xl p-8 border border-gris hover:border-turquesa/30 transition-all hover:shadow-lg">
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${paso.color} text-blanco font-bold text-2xl mb-6`}>
                  {paso.numero}
                </div>
                
                <h3 className="text-2xl font-bold text-indigo mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-indigo/70 leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
