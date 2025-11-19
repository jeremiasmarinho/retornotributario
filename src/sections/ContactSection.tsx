import { contactMethods } from "../content/data";

export const ContactSection = () => (
  <section id="contato" class="section section-contact" data-animate="fade-up">
    <div class="container contact-grid">
      <div class="contact-card flexible tilt-card" data-animate="slide-up">
        <div class="section-header compact">
          <span class="section-tag">Contato</span>
          <h2>
            Conte-nos sobre o seu cenário tributário e receba um plano visual e
            estratégico.
          </h2>
        </div>
        <div class="contact-methods">
          {contactMethods.map((method) => (
            <a
              class="contact-pill"
              href={method.link}
              key={method.title}
              target={method.icon === "fa-location-dot" ? "_blank" : "_self"}
              rel="noreferrer"
              data-animate="fade-up"
            >
              <i class={`fas ${method.icon}`}></i>
              <div>
                <strong>{method.title}</strong>
                <span>{method.value}</span>
                <small>{method.description}</small>
              </div>
            </a>
          ))}
        </div>
        <div class="cta-note">
          <i class="fas fa-lock"></i>
          Análise 100% confidencial e sem compromisso.
        </div>
      </div>
      <div class="contact-card visual tilt-card" data-animate="zoom-in">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
          alt="Arquitetura moderna representando solidez"
          loading="lazy"
          decoding="async"
        />
        <div class="contact-overlay">
          <p>Base em Araguaína • Projetos em todo o Brasil</p>
        </div>
      </div>
    </div>
  </section>
);
