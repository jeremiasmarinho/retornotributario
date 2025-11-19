import { testimonials } from "../content/data";

export const TestimonialsSection = () => (
  <section class="section section-dark testimonials" data-animate="fade-up">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Depoimentos</span>
        <h2>Histórias reais e humanizadas</h2>
        <p class="section-subtitle">
          Nada comunica melhor do que ouvir quem já acelerou resultados com a
          gente.
        </p>
      </div>
      <div class="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div
            class="testimonial-card tilt-card"
            key={testimonial.name}
            data-animate="zoom-in"
          >
            <div class="testimonial-header">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                loading="lazy"
                decoding="async"
              />
              <div>
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.role} • {testimonial.company}
                </span>
              </div>
            </div>
            <p>{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
