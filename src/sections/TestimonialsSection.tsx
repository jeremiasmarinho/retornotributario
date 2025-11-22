import { testimonials } from "../content/data";

export const TestimonialsSection = () => (
  <section className="section section-dark testimonials bg-gray-950 py-20">
    <div className="mx-auto max-w-6xl px-6">
      <div className="section-header text-center" data-motion="fade-up">
        <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Depoimentos
        </span>
        <h2 className="text-3xl font-semibold text-white">
          Depoimentos de quem já gerou retorno
        </h2>
        <p className="section-subtitle text-white/70">
          O que nossos clientes perceberam em performance e governança.
        </p>
      </div>
      <div className="testimonials-grid grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            className="testimonial-card tilt-card rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-lg"
            key={testimonial.name}
            data-motion="fade-up"
            data-motion-delay={index * 120 + 160}
          >
            <div className="testimonial-header mb-4 flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <strong className="block text-white">{testimonial.name}</strong>
                <span className="text-xs text-white/60">
                  {testimonial.role} • {testimonial.company}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
