import { differentiators } from "../content/data";

export const DifferentialsSection = () => (
  <section id="diferenciais" className="section bg-gray-950 py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="section-header text-center">
        <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Diferenciais
        </span>
        <h2 className="text-3xl font-semibold text-white">
          Diferenciais que aceleram aprovação e execução
        </h2>
        <p className="section-subtitle text-white/70">
          Estrutura técnica clara, visual executivo e controles que facilitam
          decisão.
        </p>
      </div>
      <div className="features-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item) => (
          <div
            className="feature-card tilt-card glass-panel border-glow p-6 text-white/80"
            key={item.title}
          >
            <div className="icon-badge mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
