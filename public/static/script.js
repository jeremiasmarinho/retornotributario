// RETORNO TRIBUTÁRIO - Interactive Scripts

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const syncMobileState = () => {
    const isMobileViewport = window.innerWidth <= 768;
    const enableAnimatedMobile = isMobileViewport && !prefersReducedMotion;
    document.body.classList.toggle("is-mobile", enableAnimatedMobile);
    document.body.classList.toggle(
      "is-mobile-static",
      isMobileViewport && prefersReducedMotion
    );
  };

  syncMobileState();

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");
  const updateNavbar = () => {
    if (!navbar) return;
    if (window.pageYOffset > 100) {
      navbar.style.background = "rgba(10, 10, 10, 0.98)";
      navbar.style.boxShadow = "0 6px 30px rgba(0, 0, 0, 0.45)";
    } else {
      navbar.style.background = "rgba(10, 10, 10, 0.94)";
      navbar.style.boxShadow = "0 2px 18px rgba(0, 0, 0, 0.25)";
    }
  };
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  // Reveal animations
  const animatedElements = document.querySelectorAll("[data-animate]");
  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    animatedElements.forEach((element) => revealObserver.observe(element));
  } else {
    animatedElements.forEach((element) =>
      element.classList.add("animate-visible")
    );
  }

  // Tilt effect for cards
  if (!prefersReducedMotion) {
    const tiltCards = document.querySelectorAll(".tilt-card");
    const tiltStrength = 12;

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const rotateY = (x / bounds.width - 0.5) * tiltStrength;
        const rotateX = (y / bounds.height - 0.5) * -tiltStrength;
        card.style.setProperty("--tiltX", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--tiltY", `${rotateY.toFixed(2)}deg`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--tiltX", "0deg");
        card.style.setProperty("--tiltY", "0deg");
      });
    });
  }

  // Parallax items
  if (!prefersReducedMotion) {
    const parallaxItems = document.querySelectorAll(".parallax-item");
    const updateParallax = () => {
      const scroll = window.pageYOffset;
      parallaxItems.forEach((item) => {
        const depth = parseFloat(item.dataset.parallaxDepth || "0.12");
        const offset = scroll * depth * -0.15;
        item.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });
    };

    updateParallax();
    window.addEventListener(
      "scroll",
      () => {
        window.requestAnimationFrame(updateParallax);
      },
      { passive: true }
    );
  }

  // Hero light tracking
  const heroSection = document.querySelector(".hero");
  if (heroSection && !prefersReducedMotion) {
    heroSection.addEventListener("pointermove", (event) => {
      const bounds = heroSection.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      heroSection.style.setProperty("--hero-light-x", `${x}%`);
      heroSection.style.setProperty("--hero-light-y", `${y}%`);
    });
  }

  // Active navigation link
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a:not(.btn-contact)");

  const highlightCurrentSection = () => {
    let currentId = "";
    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 220;
      if (window.pageYOffset >= offsetTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`
      );
    });
  };

  highlightCurrentSection();
  window.addEventListener("scroll", highlightCurrentSection, { passive: true });

  // Mobile drawer menu
  const drawer = document.querySelector("[data-menu-drawer]");
  const toggleButton = document.querySelector("[data-menu-toggle]");
  const drawerOverlay = drawer?.querySelector("[data-menu-overlay]");
  const closeButtons = drawer?.querySelectorAll("[data-menu-close]");
  const drawerLinks = drawer?.querySelectorAll("[data-menu-link]");
  let menuOpen = false;

  const setMenuState = (isOpen) => {
    if (!drawer || !toggleButton) return;
    menuOpen = isOpen;
    drawer.classList.toggle("is-open", isOpen);
    toggleButton.classList.toggle("is-active", isOpen);
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-open", isOpen);
  };

  const toggleMenu = () => setMenuState(!menuOpen);
  const closeMenu = () => setMenuState(false);

  toggleButton?.addEventListener("click", toggleMenu);
  drawerOverlay?.addEventListener("click", closeMenu);
  closeButtons?.forEach((btn) => btn.addEventListener("click", closeMenu));
  drawerLinks?.forEach((link) =>
    link.addEventListener("click", () => {
      if (menuOpen) closeMenu();
    })
  );

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
    }
  });

  const handleResize = () => {
    syncMobileState();
    if (window.innerWidth > 900 && menuOpen) {
      closeMenu();
    }
  };

  window.addEventListener(
    "resize",
    () => {
      window.requestAnimationFrame(handleResize);
    },
    { passive: true }
  );

  // Ripple effect on buttons
  document
    .querySelectorAll(
      ".btn-primary, .btn-secondary, .btn-contact, .btn-primary-large"
    )
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add("ripple");

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

  // Console easter egg
  console.log(
    "%cRETORNO TRIBUTÁRIO",
    "font-size: 20px; font-weight: bold; color: #D4AF37;"
  );
  console.log(
    "%cRecuperar o que é seu é o nosso negócio.",
    "font-size: 14px; color: #AAAAAA;"
  );
  console.log(
    "%cHono + Cloudflare Pages + muito design.",
    "font-size: 12px; color: #7A7A7A;"
  );
});

// Ripple helper styles
const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
  a.btn-primary,
  a.btn-secondary,
  a.btn-contact,
  a.btn-primary-large {
    position: relative;
    overflow: hidden;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .nav-links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(rippleStyle);

// Lead Form Handler
const leadForm = document.querySelector('[data-form="lead"]');
if (leadForm) {
  leadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = leadForm.querySelector("#lead-name").value.trim();
    const email = leadForm.querySelector("#lead-email").value.trim();
    const message = leadForm.querySelector("#lead-message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Simulate form submission
    const submitButton = leadForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    try {
      // You can replace this with an actual API call
      // Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify({ name, email, message }) })

      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      alert(
        `Obrigado, ${name}! Recebemos sua mensagem e nossa equipe entrará em contato em breve.`
      );

      // Reset form
      leadForm.reset();
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}
