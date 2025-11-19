import { navLinks, heroHighlights } from "../content/data";

export const HeroSection = () => (
  <section class="hero" data-aurora>
    <div class="hero-effects" aria-hidden="true">
      <span class="orb orb-one parallax-item" data-parallax-depth="0.05"></span>
      <span class="orb orb-two parallax-item" data-parallax-depth="0.08"></span>
      <span class="grid-lines"></span>
    </div>
    <nav class="navbar">
      <div class="container navbar-content">
        <div class="logo">
          <img
            src="/logo.png"
            alt="Retorno Tributário"
            style={{
              height: "58px",
              marginRight: "12px",
            }}
          />
          <span>Retorno Tributário</span>
        </div>
        <ul class="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contato" class="btn-contact">
              Vamos conversar
            </a>
          </li>
        </ul>
        <button
          class="mobile-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded="false"
          data-menu-toggle
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-drawer" data-menu-drawer>
      <div class="drawer-overlay" data-menu-overlay></div>
      <div class="drawer-panel" data-animate="slide-left">
        <div class="drawer-header">
          <div class="logo">
            <img
              src="/logo.png"
              alt="Retorno Tributário"
              style={{
                height: "36px",
                marginRight: "8px",
              }}
            />
            <span>Retorno Tributário</span>
          </div>
          <button
            class="mobile-close"
            type="button"
            aria-label="Fechar menu"
            data-menu-close
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <ul class="drawer-links">
          {navLinks.map((link) => (
            <li key={`drawer-${link.href}`}>
              <a href={link.href} data-menu-link>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contato" class="btn-primary btn-glow" data-menu-link>
          <i class="fas fa-calendar-week"></i>
          Falar com especialista
        </a>
      </div>
    </div>

    <div class="container hero-grid">
      <div
        class="hero-text parallax-item"
        data-parallax-depth="0.12"
        data-animate="slide-up"
      >
        <p class="eyebrow">Inteligência fiscal aplicada</p>
        <h1 data-sparkline>
          Recuperação Tributária com narrativa clara, dados confiáveis e
          estética premium.
        </h1>
        <p class="subtitle" data-animate="fade-up">
          Atuamos lado a lado com CFOs e times fiscais para recuperar créditos,
          reduzir margens e liberar caixa com total segurança jurídica.
        </p>
        <div class="hero-cta" data-animate="fade-up">
          <a href="#contato" class="btn-primary btn-glow">
            <i class="fas fa-magnifying-glass-dollar"></i>
            Solicitar diagnóstico gratuito
          </a>
          <a href="#processo" class="btn-secondary">
            <i class="fas fa-circle-play"></i>
            Conheça o processo
          </a>
        </div>
      </div>

      <div
        class="hero-media parallax-item"
        data-parallax-depth="0.22"
        data-animate="slide-left"
      >
        <div class="hero-photo primary tilt-card" data-animate="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
            alt="Especialista em tributos apresentando resultados"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="hero-photo secondary tilt-card" data-animate="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80"
            alt="Equipe analisando documentação fiscal"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          class="floating-card parallax-item"
          data-parallax-depth="0.28"
          data-animate="fade-up"
        >
          <p>Dashboard em tempo real</p>
          <strong>Lucro Real</strong>
          <span>Atualizado há 2 min</span>
        </div>
        <div
          class="floating-card secondary parallax-item"
          data-parallax-depth="0.32"
          data-animate="fade-up"
        >
          <i class="fas fa-shield"></i>
          <p>Compliance e pareceres liberados</p>
        </div>
      </div>
    </div>

    <div class="hero-metrics">
      <div class="container metric-grid">
        {heroHighlights.map((highlight) => (
          <div
            class="metric-card tilt-card"
            key={highlight.label}
            data-animate="fade-up"
          >
            <i class={`fas ${highlight.icon}`}></i>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
