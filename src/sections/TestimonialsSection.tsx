import { testimonials } from "../content/data";

export const TestimonialsSection = () => (
  <section
    class="section section-dark testimonials bg-gray-950 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div class="section-header text-center">
        <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Depoimentos
        </span>
        <h2 class="text-3xl font-semibold text-white">
          Histórias reais e humanizadas
        </h2>
        <p class="section-subtitle text-white/70">
          Nada comunica melhor do que ouvir quem já acelerou resultados com a
          gente.
        </p>
      </div>
      <div class="testimonials-grid grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            class="testimonial-card tilt-card rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-lg"
            key={testimonial.name}
            data-animate="zoom-in"
          >
            <div class="testimonial-header mb-4 flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                loading="lazy"
                decoding="async"
                class="h-12 w-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <strong class="block text-white">{testimonial.name}</strong>
                <span class="text-xs text-white/60">
                  {testimonial.role} • {testimonial.company}
                </span>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-white/70">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
