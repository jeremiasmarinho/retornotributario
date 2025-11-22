import { useState, useEffect } from "react";
import { navLinks, heroHighlights } from "../content/data";

// Hero Section Component
export const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <section
      className="hero brand-aurora relative pb-24 pt-20 text-white min-h-screen"
      data-aurora
    >
      <div
        className="hero-effects absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <span className="parallax-item absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl"></span>
        <span className="parallax-item absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl"></span>
        <span className="grid-lines"></span>
      </div>

      <nav
        className="navbar fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur"
        data-navbar
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-wide"
          >
            <img
              src="/logo.png"
              alt="Retorno Tributário"
              className="logo-navbar"
            />
          </a>

          <ul
            className="nav-links hidden items-center gap-6 text-sm font-medium text-white/70 md:flex"
            data-nav-links
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-nav-link
                  className="relative pb-1 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" className="btn-contact" data-ripple>
                Vamos conversar
              </a>
            </li>
          </ul>

          <button
            className={`mobile-toggle flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden ${
              isMobileMenuOpen ? "is-active" : ""
            }`}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            data-menu-toggle
            data-ripple
          >
            <span className="sr-only">Abrir menu</span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-drawer ${isMobileMenuOpen ? "is-open" : ""}`}
        data-menu-drawer
      >
        <div
          className="drawer-overlay"
          data-menu-overlay
          onClick={closeMobileMenu}
        ></div>
        <div className="drawer-panel">
          <div className="drawer-header mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <img
                src="/logo.png"
                alt="Retorno Tributário"
                className="logo-drawer"
              />
            </div>
            <button
              className="mobile-close h-10 w-10 rounded-full border border-white/20 text-white"
              type="button"
              aria-label="Fechar menu"
              data-menu-close
              data-ripple
              onClick={closeMobileMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className="drawer-links space-y-3 text-base text-white/80">
            {navLinks.map((link) => (
              <li key={`drawer-${link.href}`}>
                <a
                  href={link.href}
                  data-menu-link
                  className="block py-2"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="btn-primary btn-glow mt-6 w-full justify-center"
            data-menu-link
            data-ripple
            onClick={closeMobileMenu}
          >
            <i className="fas fa-calendar-week"></i>
            Falar com especialista
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-32 lg:grid-cols-2 relative z-10">
        <div
          className="hero-text parallax-item space-y-6"
          data-motion="fade-up"
          data-motion-duration="880"
        >
          <p className="eyebrow text-sm uppercase tracking-[0.3em] text-amber-300">
            Inteligência tributária orientada a performance
          </p>
          <h1
            data-sparkline
            className="text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            Liberamos caixa tributário com método, evidências e segurança.
          </h1>
          <p className="subtitle text-base text-white/70">
            Trabalhamos com CFOs e equipes fiscais para identificar créditos,
            reduzir a carga efetiva e acelerar fluxo de caixa — com validação
            jurídica e apresentação executiva pronta para o board.
          </p>
          <div
            className="hero-cta flex flex-wrap gap-3"
            data-motion="fade-up"
            data-motion-delay="140"
          >
            <a href="#contato" className="btn-primary btn-glow" data-ripple>
              <i className="fas fa-magnifying-glass-dollar"></i>
              Receber análise inicial
            </a>
            <a href="#processo" className="btn-secondary" data-ripple>
              <i className="fas fa-circle-play"></i>
              Ver como operamos
            </a>
          </div>
        </div>

        <div
          className="hero-media parallax-item relative flex flex-col gap-6"
          data-motion="fade-left"
          data-motion-duration="900"
        >
          <div
            className="hero-photo primary tilt-card overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl"
            data-motion="zoom-in"
            data-motion-delay="120"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
              alt="Especialista em tributos apresentando resultados"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="hero-photo secondary tilt-card relative -mt-24 w-2/3 self-end overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-xl"
            data-motion="zoom-in"
            data-motion-delay="220"
          >
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80"
              alt="Equipe analisando documentação fiscal"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="floating-card parallax-item absolute -bottom-10 -left-6 w-60 glass-panel p-5 text-sm text-white/80"
            data-motion="lift"
            data-motion-delay="320"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
              A sua empresa
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Em boas mãos
            </p>
          </div>
          <div
            className="floating-card secondary parallax-item absolute -top-6 right-4 flex w-48 items-center gap-3 glass-panel p-4 text-white/80"
            data-motion="lift"
            data-motion-delay="360"
          >
            <i className="fas fa-shield text-amber-300"></i>
            <p className="text-sm">Compliance liberado</p>
          </div>
        </div>
      </div>

      <div className="hero-metrics mt-16 border-t border-white/10 bg-white/5/10 py-12 backdrop-blur">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {heroHighlights.map((highlight, index) => (
            <div
              className="metric-card tilt-card glass-panel border-glow p-6 text-left text-white"
              key={highlight.label}
              data-motion="fade-up"
              data-motion-delay={index * 90 + 120}
            >
              <i
                className={`fas ${highlight.icon} text-2xl text-amber-300`}
              ></i>
              <strong className="mt-3 block text-2xl font-semibold">
                {highlight.value}
              </strong>
              <span className="text-sm text-white/60">{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator mt-8 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/60">
        <span className="dot"></span>
        <span className="line"></span>
        <p>Explore abaixo</p>
      </div>
    </section>
  );
};
