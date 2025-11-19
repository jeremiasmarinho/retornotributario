import { navLinks } from "../content/data";

export const FooterSection = () => (
  <footer class="footer bg-gray-950 py-16 text-white/70">
    <div class="mx-auto max-w-6xl px-6">
      <div class="footer-content grid gap-8 border-b border-white/10 pb-10 md:grid-cols-3">
        <div class="footer-brand space-y-3">
          <div class="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <img src="/logo.png" alt="Retorno Tributário" class="logo-footer" />
          </div>
          <p class="text-sm">
            Design, dados e estratégia para recuperar o que é seu.
          </p>
        </div>
        <div class="footer-links">
          <h4 class="mb-4 text-sm font-semibold text-white">Menu rápido</h4>
          <ul class="space-y-2">
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <a href={link.href} class="text-sm transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="footer-contact space-y-2">
          <h4 class="mb-4 text-sm font-semibold text-white">Contato direto</h4>
          <p class="text-sm">
            <i class="fas fa-map-marker-alt text-amber-300"></i> Araguaína - TO
          </p>
          <p class="text-sm">
            <i class="fas fa-envelope text-amber-300"></i>{" "}
            retornotributario@gmail.com
          </p>
          <p class="text-sm">
            <i class="fas fa-phone text-amber-300"></i> (63) 98117-9341
          </p>
        </div>
      </div>
      <div class="footer-bottom pt-8 text-center text-xs uppercase tracking-[0.3em] text-white/50">
        &copy; {new Date().getFullYear()} Retorno Tributário. Todos os direitos
        reservados.
      </div>
    </div>
  </footer>
);
