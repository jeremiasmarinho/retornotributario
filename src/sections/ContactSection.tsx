import { contactMethods } from "../content/data";

export const ContactSection = () => (
  <section
    id="contato"
    class="section section-contact bg-gradient-to-br from-slate-950 to-slate-900 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
      <div class="contact-card flexible tilt-card glass-panel p-8" data-animate="slide-up">
        <div class="section-header compact">
          <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">Contato</span>
          <h2 class="text-3xl font-semibold text-white">
            Conte-nos sobre o seu cenário tributário e receba um plano visual e estratégico.
          </h2>
        </div>
        <div class="contact-methods grid gap-4">
          {contactMethods.map((method) => (
            <a
              class="contact-pill flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 transition hover:border-amber-300"
              href={method.link}
              key={method.title}
              target={method.icon === "fa-location-dot" ? "_blank" : "_self"}
              rel="noreferrer"
              data-animate="fade-up"
              data-ripple
            >
              <i class={`fas ${method.icon} text-amber-300`}></i>
              <div>
                <strong class="text-white">{method.title}</strong>
                <span class="block text-sm text-white/70">{method.value}</span>
                <small class="text-xs text-white/60">{method.description}</small>
              </div>
            </a>
          ))}
        </div>
        <div class="cta-note mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          <i class="fas fa-lock text-amber-300"></i>
          Análise 100% confidencial e sem compromisso.
        </div>
      </div>
      <div class="contact-card visual tilt-card relative overflow-hidden glass-panel" data-animate="zoom-in">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
          alt="Arquitetura moderna representando solidez"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover"
        />
        <div class="contact-overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 text-sm text-white">
          Base em Araguaína • Projetos em todo o Brasil
        </div>
      </div>
    </div>
  </section>
);
