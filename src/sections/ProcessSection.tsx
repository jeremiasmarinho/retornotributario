import { processSteps } from "../content/data";

export const ProcessSection = () => (
  <section id="processo" class="section section-highlight" data-animate="fade-up">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Processo</span>
        <h2>Uma jornada clara do diagnóstico à compensação</h2>
      </div>
      <div class="process-grid">
        {processSteps.map((step) => (
          <div
            class="process-card tilt-card"
            key={step.title}
            data-animate="slide-up"
          >
            <span class="process-step">{step.step}</span>
            <div class="process-icon">
              <i class={`fas ${step.icon}`}></i>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
