import { partners } from "../content/data";

export const AboutSection = () => (
  <section
    id="quem-somos"
    className="section section-soft bg-gray-900/40 py-20"
  >
    <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
      <div
        className="story-card tilt-card glass-panel p-8"
        data-motion="fade-up"
        data-motion-duration="760"
      >
        <div className="section-header compact" data-motion="fade-up">
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
          <li
            className="flex items-start gap-3"
            data-motion="fade-up"
            data-motion-delay="140"
          >
            <i className="fas fa-check-circle text-amber-300"></i>
            <span>
              Cobertura nacional com células especializadas por setor.
            </span>
          </li>
          <li
            className="flex items-start gap-3"
            data-motion="fade-up"
            data-motion-delay="220"
          >
            <i className="fas fa-check-circle text-amber-300"></i>
            <span>
              Framework documentado que reduz risco de autuação e retrabalho.
            </span>
          </li>
          <li
            className="flex items-start gap-3"
            data-motion="fade-up"
            data-motion-delay="300"
          >
            <i className="fas fa-check-circle text-amber-300"></i>
            <span>
              Formato flexível: presença estratégica e execução remota
              escalável.
            </span>
          </li>
        </ul>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="glass-panel tilt-card flex flex-col items-center p-6 text-center"
            data-motion="zoom-in"
            data-motion-delay={180 + index * 100}
          >
            <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-amber-300/20 shadow-lg shadow-amber-900/20">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mb-1 text-lg font-bold text-amber-300">
              {partner.name}
            </h3>
            <p className="mb-3 text-sm font-medium text-white">
              {partner.role}
            </p>
            <div className="space-y-1 text-xs text-white/60">
              {partner.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
