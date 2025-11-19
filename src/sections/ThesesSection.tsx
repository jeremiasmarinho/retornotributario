import { teses } from "../content/data";

export const ThesesSection = () => (
  <section
    id="teses"
    class="section section-soft bg-slate-900/40 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div class="section-header text-center">
        <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">Teses prioritárias</span>
        <h2 class="text-3xl font-semibold text-white">Abordamos teses com embasamento robusto</h2>
      </div>
      <div class="teses-grid grid gap-6 md:grid-cols-2">
        {teses.map((tese) => (
          <article
            class="tese-card tilt-card rounded-3xl border-l-4 border-amber-300 bg-white p-6 text-slate-900 shadow-xl"
            key={tese.title}
            data-animate="slide-up"
          >
            <span class="tese-tag inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              {tese.tag}
            </span>
            <h3 class="mt-4 text-xl font-semibold text-slate-900">{tese.title}</h3>
            <p class="mt-2 text-sm text-slate-600">{tese.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
