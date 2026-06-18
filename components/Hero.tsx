export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo via-indigo/95 to-turquesa/20 text-blanco py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-turquesa/20 border border-turquesa/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-turquesa rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-turquesa">Human-Centered AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquesa to-dorado">
              Designed
            </span>{" "}
            Around You.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blanco/90 leading-relaxed mb-10 max-w-2xl">
            Experiencias de aprendizaje personalizadas impulsadas por IA y centradas en las personas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="bg-dorado hover:bg-dorado/90 text-indigo font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 text-lg"
            >
              Comenzar Ahora
            </a>
            <a
              href="#como-funciona"
              className="border-2 border-blanco/30 hover:border-blanco text-blanco font-semibold px-8 py-4 rounded-lg transition-all hover:bg-blanco/10 text-lg"
            >
              Explorar Programas
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-8 text-sm text-blanco/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-turquesa" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Ruta personalizada para vos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-turquesa" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Progreso en tiempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-turquesa" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>IA que te acompaña</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
