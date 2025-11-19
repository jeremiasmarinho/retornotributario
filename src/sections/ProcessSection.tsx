import { processSteps } from "../content/data";

export const ProcessSection = () => (
  <section
    id="processo"
    class="section section-highlight bg-gradient-to-br from-slate-950 to-slate-900 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div class="section-header text-center">
        <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">Processo</span>
        <h2 class="text-3xl font-semibold text-white">Uma jornada clara do diagnóstico à compensação</h2>
      </div>
      <div class="process-grid grid gap-6 md:grid-cols-2">
        {processSteps.map((step) => (
          <div
            class="process-card tilt-card rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-lg"
            key={step.title}
            data-animate="slide-up"
          >
            <span class="process-step text-xs uppercase tracking-[0.4em] text-amber-200">{step.step}</span>
            <div class="process-icon my-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-amber-300">
              <i class={`fas ${step.icon}`}></i>
            </div>
            <h3 class="text-xl font-semibold text-white">{step.title}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
