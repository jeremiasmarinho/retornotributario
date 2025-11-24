import { processSteps } from "../content/data";

export const ProcessSection = () => (
  <section
    id="processo"
    className="section section-highlight bg-gradient-to-br from-gray-950 to-gray-900 py-24 lg:py-32"
  >
    <div className="mx-auto max-w-6xl px-6">
      <div className="section-header text-center" data-motion="fade-up">
        <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Processo
        </span>
        <h2 className="text-4xl font-semibold text-white">
          Do mapeamento à entrada do crédito — com visibilidade total
        </h2>
      </div>
      <div className="process-grid grid gap-8 lg:gap-12 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            className="process-card tilt-card rounded-[32px] border border-white/10 bg-white/5 p-6 text-white/80 shadow-lg"
            key={step.step}
            data-motion="fade-up"
            data-motion-delay={index * 100 + 160}
          >
            <span className="process-step text-xs uppercase tracking-[0.4em] text-amber-200">
              {step.step}
            </span>
            <div className="process-icon my-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-amber-300">
              <i className={`fas ${step.icon}`}></i>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
