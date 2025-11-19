import { resultMetrics } from "../content/data";

export const ResultsSection = () => (
  <section id="resultados" class="section" data-animate="fade-up">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Resultados</span>
        <h2>Impacto mensurável que aparece no DRE</h2>
      </div>
      <div class="result-grid">
        {resultMetrics.map((result) => (
          <div
            class="result-card tilt-card"
            key={result.label}
            data-animate="fade-up"
          >
            <h3>{result.value}</h3>
            <p>{result.label}</p>
            <span>{result.detail}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
