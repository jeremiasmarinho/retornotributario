import { resultMetrics } from "../content/data";

export const ResultsSection = () => (
  <section
    id="resultados"
    className="section bg-gray-950 py-20"
    data-animate="fade-up"
  >
    <div className="mx-auto max-w-6xl px-6">
      <div className="section-header text-center">
        <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Resultados
        </span>
        <h2 className="text-3xl font-semibold text-white">
          Impacto mensurável que aparece no DRE
        </h2>
      </div>
      <div className="result-grid grid gap-6 sm:grid-cols-2">
        {resultMetrics.map((result) => (
          <div
            className="result-card tilt-card rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg"
            key={result.label}
            data-animate="fade-up"
          >
            <h3 className="text-3xl font-semibold text-amber-300">
              {result.value}
            </h3>
            <p className="mt-3 text-lg text-white">{result.label}</p>
            <span className="mt-2 block text-sm text-white/60">
              {result.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
