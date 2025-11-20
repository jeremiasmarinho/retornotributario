export const CtaSection = () => (
  <section
    className="section section-cta bg-gradient-to-br from-brand-black via-gray-950 to-brand-charcoal py-20 text-white"
  >
    <div className="mx-auto max-w-5xl px-6">
      <div className="cta-panel tilt-card flex flex-col items-start gap-6 rounded-[32px] bg-white/80 p-10 shadow-2xl md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-600">
            Próximo passo
          </span>
          <h2 className="text-3xl font-semibold text-gray-900">
            Vamos desenhar um roteiro de recuperação alinhado à sua estratégia?
          </h2>
          <p className="text-base text-gray-600">
            Reunimos documentos essenciais, criamos projeções e apresentamos um
            storytelling financeiro pronto para ser levado ao board.
          </p>
        </div>
        <a
          href="#contato"
          className="btn-primary btn-glow bg-gray-900 text-white hover:bg-gray-800 whitespace-nowrap"
          data-ripple
        >
          <i className="fas fa-calendar-week"></i>
          Agendar diagnóstico guiado
        </a>
      </div>
    </div>
  </section>
);
