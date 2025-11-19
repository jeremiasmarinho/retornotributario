export const AboutSection = () => (
  <section
    id="quem-somos"
    class="section section-soft"
    data-animate="fade-up"
  >
    <div class="container story-grid">
      <div class="story-card tilt-card" data-animate="slide-up">
        <div class="section-header compact">
          <span class="section-tag">Quem somos</span>
          <h2>Consultoria que une narrativa, design e rigor técnico</h2>
          <p class="section-subtitle">
            A Retorno Tributário nasceu para conectar inteligência de dados,
            storytelling financeiro e profundidade jurídica em projetos de
            recuperação tributária.
          </p>
        </div>
        <ul class="icon-list">
          <li>
            <i class="fas fa-check-circle"></i> Atuação nacional com squads
            dedicadas por setor.
          </li>
          <li>
            <i class="fas fa-check-circle"></i> Metodologia proprietária que
            reduz riscos de autuação.
          </li>
          <li>
            <i class="fas fa-check-circle"></i> Time híbrido no cliente ou
            remoto, conforme a sua necessidade.
          </li>
        </ul>
      </div>
      <div class="photo-card tilt-card" data-animate="zoom-in">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
          alt="Sala de reunião moderna com documentos fiscais"
          loading="lazy"
          decoding="async"
        />
        <div class="photo-card-caption">
          <strong>+20 especialistas</strong>
          <span>jurídico • contábil • dados</span>
        </div>
      </div>
    </div>
  </section>
);
