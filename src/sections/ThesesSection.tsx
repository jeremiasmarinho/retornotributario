import { teses } from "../content/data";

export const ThesesSection = () => (
  <section id="teses" className="section section-soft bg-gray-900/40 py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="section-header text-center" data-motion="fade-up">
        <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Teses prioritárias
        </span>
        <h2 className="text-3xl font-semibold text-white">
          Priorizamos teses com lastro jurídico e impacto financeiro
        </h2>
      </div>
      <div className="teses-grid grid gap-6 md:grid-cols-2">
        {teses.map((tese, index) => (
          <article
            className="tese-card tilt-card rounded-3xl border-l-4 border-amber-300 bg-white p-6 text-gray-950 shadow-xl"
            key={tese.title}
            data-motion="fade-up"
            data-motion-delay={index * 100 + 160}
          >
            <span className="tese-tag inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              {tese.tag}
            </span>
            <h3 className="mt-3 text-xl font-semibold text-gray-950">
              {tese.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{tese.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
