import { contactMethods } from "../content/data";

export const ContactSection = () => (
  <section
    id="contato"
    class="section section-contact bg-gradient-to-br from-gray-950 to-gray-900 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
      <div
        class="contact-card flexible tilt-card glass-panel p-8"
        data-animate="slide-up"
      >
        <div class="section-header compact">
          <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
            Contato
          </span>
          <h2 class="text-3xl font-semibold text-white">
            Conte-nos sobre o seu cenário tributário e receba um plano visual e
            estratégico.
          </h2>
        </div>
        <div class="contact-methods grid gap-3">
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
                <small class="block text-xs text-white/60">
                  {method.description}
                </small>
              </div>
            </a>
          ))}
        </div>
        <div class="cta-note mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          <i class="fas fa-lock text-amber-300"></i>
          Análise 100% confidencial e sem compromisso.
        </div>
      </div>
      <div
        class="contact-card form-card tilt-card glass-panel p-8 flex flex-col"
        data-animate="zoom-in"
      >
        <div class="section-header compact mb-6">
          <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
            Lead
          </span>
          <h3 class="text-2xl font-semibold text-white">
            Solicite uma análise
          </h3>
          <p class="text-sm text-white/70 mt-2">
            Preencha o formulário e nossa equipe entrará em contato.
          </p>
        </div>

        <form class="lead-form space-y-4 flex-1 flex flex-col" data-form="lead">
          <div class="form-group">
            <label
              for="lead-name"
              class="block text-sm font-semibold text-white mb-2"
            >
              Nome Completo
            </label>
            <input
              id="lead-name"
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/30 transition"
            />
          </div>

          <div class="form-group">
            <label
              for="lead-email"
              class="block text-sm font-semibold text-white mb-2"
            >
              E-mail
            </label>
            <input
              id="lead-email"
              type="email"
              name="email"
              placeholder="seu.email@example.com"
              required
              class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/30 transition"
            />
          </div>

          <div class="form-group flex-1">
            <label
              for="lead-message"
              class="block text-sm font-semibold text-white mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="lead-message"
              name="message"
              placeholder="Descreva brevemente sua situação tributária..."
              rows={4}
              required
              class="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/30 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn-primary btn-glow w-full mt-2"
            data-ripple
          >
            <i class="fas fa-paper-plane"></i>
            Enviar Solicitação
          </button>

          <p class="text-xs text-white/50 text-center mt-4">
            <i class="fas fa-lock text-amber-300 mr-1"></i>
            Seus dados são confidenciais e seguros.
          </p>
        </form>
      </div>
    </div>
  </section>
);
