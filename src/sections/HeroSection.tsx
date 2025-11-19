import { navLinks, heroHighlights } from "../content/data";

export const HeroSection = () => (
  <section class="hero brand-aurora relative pb-24 text-white" data-aurora>
    <div
      class="hero-effects absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <span
        class="parallax-item absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl"
        data-parallax-depth="0.05"
      ></span>
      <span
        class="parallax-item absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl"
        data-parallax-depth="0.08"
      ></span>
      <span class="grid-lines"></span>
    </div>

    <nav
      class="navbar fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur"
      data-navbar
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3 text-lg font-semibold tracking-wide">
          <img src="/logo.png" alt="Retorno Tributário" class="logo-navbar" />
        </div>

        <ul
          class="nav-links hidden items-center gap-6 text-sm font-medium text-white/70 md:flex"
          data-nav-links
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-nav-link
                class="relative pb-1 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" class="btn-contact" data-ripple>
              Vamos conversar
            </a>
          </li>
        </ul>

        <button
          class="mobile-toggle flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          type="button"
          aria-label="Abrir menu"
          aria-expanded="false"
          data-menu-toggle
          data-ripple
        >
          <span class="sr-only">Abrir menu</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-drawer" data-menu-drawer>
      <div class="drawer-overlay" data-menu-overlay></div>
      <div class="drawer-panel" data-animate="slide-left">
        <div class="drawer-header mb-4 flex items-center justify-between">
          <div class="flex items-center gap-3 text-lg font-semibold">
            <img src="/logo.png" alt="Retorno Tributário" class="logo-drawer" />
          </div>
          <button
            class="mobile-close h-10 w-10 rounded-full border border-white/20 text-white"
            type="button"
            aria-label="Fechar menu"
            data-menu-close
            data-ripple
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <ul class="drawer-links space-y-3 text-base text-white/80">
          {navLinks.map((link) => (
            <li key={`drawer-${link.href}`}>
              <a href={link.href} data-menu-link class="block py-2">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          class="btn-primary btn-glow mt-6 w-full justify-center"
          data-menu-link
          data-ripple
        >
          <i class="fas fa-calendar-week"></i>
          Falar com especialista
        </a>
      </div>
    </div>

    <div class="mx-auto grid max-w-6xl gap-12 px-6 pt-32 lg:grid-cols-2">
      <div
        class="hero-text parallax-item space-y-6"
        data-parallax-depth="0.12"
        data-animate="slide-up"
      >
        <p class="eyebrow text-sm uppercase tracking-[0.3em] text-amber-300">
          Inteligência fiscal aplicada
        </p>
        <h1
          data-sparkline
          class="text-4xl font-semibold leading-tight text-white md:text-5xl"
        >
          Recuperação tributária com narrativa clara, dados confiáveis e
          estética premium.
        </h1>
        <p class="subtitle text-base text-white/70" data-animate="fade-up">
          Atuamos lado a lado com CFOs e times fiscais para recuperar créditos,
          reduzir margens e liberar caixa com segurança jurídica e narrativa
          executiva impecável.
        </p>
        <div class="hero-cta flex flex-wrap gap-3" data-animate="fade-up">
          <a href="#contato" class="btn-primary btn-glow" data-ripple>
            <i class="fas fa-magnifying-glass-dollar"></i>
            Solicitar diagnóstico gratuito
          </a>
          <a href="#processo" class="btn-secondary" data-ripple>
            <i class="fas fa-circle-play"></i>
            Conheça o processo
          </a>
        </div>
      </div>

      <div
        class="hero-media parallax-item relative flex flex-col gap-6"
        data-parallax-depth="0.22"
        data-animate="slide-left"
      >
        <div
          class="hero-photo primary tilt-card overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl"
          data-animate="zoom-in"
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
            alt="Especialista em tributos apresentando resultados"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="hero-photo secondary tilt-card relative -mt-24 w-2/3 self-end overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-xl"
          data-animate="zoom-in"
        >
          <img
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80"
            alt="Equipe analisando documentação fiscal"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="floating-card parallax-item absolute -bottom-10 -left-6 w-60 glass-panel p-5 text-sm text-white/80"
          data-parallax-depth="0.28"
          data-animate="fade-up"
        >
          <p class="text-xs uppercase tracking-[0.3em] text-amber-200">
            A sua empresa
          </p>
          <p class="mt-2 text-lg font-semibold text-white">Em boas mãos</p>
        </div>
        <div
          class="floating-card secondary parallax-item absolute -top-6 right-4 flex w-48 items-center gap-3 glass-panel p-4 text-white/80"
          data-parallax-depth="0.32"
          data-animate="fade-up"
        >
          <i class="fas fa-shield text-amber-300"></i>
          <p class="text-sm">Compliance liberado</p>
        </div>
      </div>
    </div>

    <div class="hero-metrics mt-16 border-t border-white/10 bg-white/5/10 py-12 backdrop-blur">
      <div class="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {heroHighlights.map((highlight) => (
          <div
            class="metric-card tilt-card glass-panel border-glow p-6 text-left text-white"
            key={highlight.label}
            data-animate="fade-up"
          >
            <i class={`fas ${highlight.icon} text-2xl text-amber-300`}></i>
            <strong class="mt-3 block text-2xl font-semibold">
              {highlight.value}
            </strong>
            <span class="text-sm text-white/60">{highlight.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div class="scroll-indicator mt-8 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/60">
      <span class="dot"></span>
      <span class="line"></span>
      <p>Explore abaixo</p>
    </div>
  </section>
);
