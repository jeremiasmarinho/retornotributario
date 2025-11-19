import { teses } from "../content/data";

export const ThesesSection = () => (
  <section id="teses" class="section section-soft" data-animate="fade-up">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Teses Prioritárias</span>
        <h2>Abordamos as principais teses com embasamento robusto</h2>
      </div>
      <div class="teses-grid">
        {teses.map((tese) => (
          <article
            class="tese-card tilt-card"
            key={tese.title}
            data-animate="slide-up"
          >
            <span class="tese-tag">{tese.tag}</span>
            <h3>{tese.title}</h3>
            <p>{tese.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
