import { differentiators } from "../content/data";

export const DifferentialsSection = () => (
  <section
    id="diferenciais"
    class="section bg-gray-950 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div class="section-header text-center">
        <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Diferenciais
        </span>
        <h2 class="text-3xl font-semibold text-white">
          Estética refinada para apresentar resultados consistentes
        </h2>
        <p class="section-subtitle text-white/70">
          Conteúdo impecável, fotos reais e efeitos visuais que reforçam a
          confiança na sua marca.
        </p>
      </div>
      <div class="features-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item) => (
          <div
            class="feature-card tilt-card glass-panel border-glow p-6 text-white/80"
            key={item.title}
            data-animate="zoom-in"
          >
            <div class="icon-badge mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-300/20 text-amber-300">
              <i class={`fas ${item.icon}`}></i>
            </div>
            <h3 class="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
