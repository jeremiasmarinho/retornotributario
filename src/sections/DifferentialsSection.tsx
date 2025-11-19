import { differentiators } from "../content/data";

export const DifferentialsSection = () => (
  <section id="diferenciais" class="section" data-animate="fade-up">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Diferenciais</span>
        <h2>Estética refinada para apresentar resultados consistentes</h2>
        <p class="section-subtitle">
          Conteúdo impecável, fotos reais e efeitos visuais que reforçam a
          confiança na sua marca.
        </p>
      </div>
      <div class="features-grid">
        {differentiators.map((item) => (
          <div
            class="feature-card tilt-card"
            key={item.title}
            data-animate="zoom-in"
          >
            <div class="icon-badge">
              <i class={`fas ${item.icon}`}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
