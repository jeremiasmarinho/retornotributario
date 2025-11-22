export const CtaSection = () => (
  <section className="section section-cta bg-gradient-to-br from-brand-black via-gray-950 to-brand-charcoal py-20 text-white">
    <div className="mx-auto max-w-5xl px-6">
      <div
        className="cta-panel tilt-card flex flex-col items-start gap-6 rounded-[32px] bg-white/80 p-10 shadow-2xl md:flex-row md:items-center md:justify-between"
        data-motion="fade-up"
      >
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-600">
            Próximo passo
          </span>
          <h2 className="text-3xl font-semibold text-gray-900">
            Quer uma visão clara das oportunidades tributárias da sua operação?
          </h2>
          <p className="text-base text-gray-600">
            Analisamos documentos chave, projetamos impacto no caixa e
            entregamos um material executivo pronto para decisão.
          </p>
        </div>
        <a
          href="#contato"
          className="btn-primary btn-glow bg-gray-900 text-white hover:bg-gray-800 whitespace-nowrap text-xs"
          data-ripple
        >
          <i className="fas fa-calendar-week"></i>
          Receber análise inicial
        </a>
      </div>
    </div>
  </section>
);
