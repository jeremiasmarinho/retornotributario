export const AboutSection = () => (
  <section
    id="quem-somos"
    class="section section-soft bg-gray-900/40 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
      <div class="story-card tilt-card glass-panel p-8" data-animate="slide-up">
        <div class="section-header compact">
          <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
            Quem somos
          </span>
          <h2 class="text-3xl font-semibold text-white">
            Consultoria que une narrativa, design e rigor técnico
          </h2>
          <p class="section-subtitle text-base text-white/70">
            A Retorno Tributário nasceu para conectar inteligência de dados,
            storytelling financeiro e profundidade jurídica em projetos de
            recuperação tributária.
          </p>
        </div>
        <ul class="icon-list mt-6 space-y-3 text-sm text-white/80">
          <li class="flex items-start gap-3">
            <i class="fas fa-check-circle text-amber-300"></i>
            <span>Atuação nacional com squads dedicadas por setor.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-check-circle text-amber-300"></i>
            <span>Metodologia proprietária que reduz riscos de autuação.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-check-circle text-amber-300"></i>
            <span>
              Operação híbrida no cliente ou remota, conforme sua necessidade.
            </span>
          </li>
        </ul>
      </div>

      <div
        class="photo-card tilt-card relative overflow-hidden glass-panel"
        data-animate="zoom-in"
      >
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
          alt="Sala de reunião moderna com documentos fiscais"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover"
        />
        <div class="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-gray-900/80 px-5 py-3 text-sm text-white/80 backdrop-blur">
          <strong class="block text-xl text-white">+20 especialistas</strong>
          <span>jurídico • contábil • dados</span>
        </div>
      </div>
    </div>
  </section>
);
