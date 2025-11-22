import { contactMethods } from "../content/data";

export const ContactSection = () => (
  <section
    id="contato"
    className="section section-contact bg-gradient-to-br from-gray-950 to-gray-900 py-20"
  >
    <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
      <div
        className="contact-card flexible tilt-card glass-panel p-8"
        data-motion="fade-up"
      >
        <div
          className="section-header compact"
          data-motion="fade-up"
          data-motion-delay="120"
        >
          <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
            Contato
          </span>
          <h2 className="text-3xl font-semibold text-white">
            Descreva seu contexto tributário e receba uma pré-avaliação
            estruturada.
          </h2>
        </div>
        <div className="contact-methods grid gap-3">
          {contactMethods.map((method, index) => (
            <a
              className="contact-pill flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 transition hover:border-amber-300"
              href={method.link}
              key={method.title}
              target={method.icon === "fa-location-dot" ? "_blank" : "_self"}
              rel="noreferrer"
              data-ripple
              data-motion="fade-up"
              data-motion-delay={index * 90 + 160}
            >
              <i className={`fas ${method.icon} text-amber-300`}></i>
              <div>
                <strong className="text-white">{method.title}</strong>
                <span className="block text-sm text-white/70">
                  {method.value}
                </span>
                <small className="block text-xs text-white/60">
                  {method.description}
                </small>
              </div>
            </a>
          ))}
        </div>
        <div
          className="cta-note mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60"
          data-motion="fade-up"
          data-motion-delay="520"
        >
          <i className="fas fa-lock text-amber-300"></i>
          Análise 100% confidencial e sem compromisso.
        </div>
      </div>
      <div
        className="contact-card form-card tilt-card glass-panel p-8 flex flex-col"
        data-motion="fade-up"
        data-motion-delay="140"
      >
        <div
          className="section-header compact mb-6"
          data-motion="fade-up"
          data-motion-delay="200"
        >
          <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
            Lead
          </span>
          <h3 className="text-2xl font-semibold text-white">
            Solicitar avaliação preliminar
          </h3>
          <p className="text-sm text-white/70 mt-2">
            Respondemos com escopo inicial e próximos passos em até 24h.
          </p>
        </div>

        <form
          className="lead-form space-y-4 flex-1 flex flex-col"
          data-form="lead"
        >
          <div
            className="form-group"
            data-motion="fade-up"
            data-motion-delay="260"
          >
            <label
              htmlFor="lead-name"
              className="block text-sm font-semibold text-white mb-2"
            >
              Nome Completo
            </label>
            <input
              id="lead-name"
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/30 transition"
            />
          </div>

          <div
            className="form-group"
            data-motion="fade-up"
            data-motion-delay="340"
          >
            <label
              htmlFor="lead-email"
              className="block text-sm font-semibold text-white mb-2"
            >
              E-mail
            </label>
            <input
              id="lead-email"
              type="email"
              name="email"
              placeholder="seu.email@example.com"
              required
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/30 transition"
            />
          </div>

          <div
            className="form-group flex-1"
            data-motion="fade-up"
            data-motion-delay="420"
          >
            <label
              htmlFor="lead-message"
              className="block text-sm font-semibold text-white mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="lead-message"
              name="message"
              placeholder="Descreva brevemente sua situação tributária..."
              rows={4}
              required
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300/30 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary btn-glow w-full mt-2"
            data-ripple
            data-motion="fade-up"
            data-motion-delay="500"
          >
            <i className="fas fa-paper-plane"></i>
            Receber avaliação
          </button>

          <p
            className="text-xs text-white/50 text-center mt-4"
            data-motion="fade-up"
            data-motion-delay="580"
          >
            <i className="fas fa-lock text-amber-300 mr-1"></i>
            Seus dados são confidenciais e seguros.
          </p>
        </form>
      </div>
    </div>
  </section>
);
