export const AboutSection = () => (
  <section
    id="quem-somos"
    className="section section-soft bg-gray-900/40 py-20"
  >
    <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
      <div className="story-card tilt-card glass-panel p-8">
        <div className="section-header compact">
          <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
            Quem somos
          </span>
          <h2 className="text-3xl font-semibold text-white">
            Consultoria tributária especializada em projetos de alto impacto
          </h2>
          <p className="section-subtitle text-base text-white/70">
            Unimos análise documental, modelagem fiscal avançada e validação
            jurídica para viabilizar créditos e reduzir riscos de forma
            previsível.
          </p>
        </div>
        <ul className="icon-list mt-6 space-y-3 text-sm text-white/80">
          <li className="flex items-start gap-3">
            <i className="fas fa-check-circle text-amber-300"></i>
            <span>
              Cobertura nacional com células especializadas por setor.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-check-circle text-amber-300"></i>
            <span>
              Framework documentado que reduz risco de autuação e retrabalho.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <i className="fas fa-check-circle text-amber-300"></i>
            <span>
              Formato flexível: presença estratégica e execução remota
              escalável.
            </span>
          </li>
        </ul>
      </div>

      <div className="photo-card tilt-card relative overflow-hidden glass-panel">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
          alt="Sala de reunião moderna com documentos fiscais"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-gray-900/80 px-5 py-3 text-sm text-white/80 backdrop-blur">
          <strong className="block text-xl text-white">
            +20 especialistas
          </strong>
          <span>jurídico • contábil • dados</span>
        </div>
      </div>
    </div>
  </section>
);
