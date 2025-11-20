import { navLinks } from "../content/data";

export const FooterSection = () => (
  <footer className="footer bg-gray-950 py-16 text-white/70">
    <div className="mx-auto max-w-6xl px-6">
      <div className="footer-content grid gap-8 border-b border-white/10 pb-10 md:grid-cols-3">
        <div className="footer-brand space-y-3">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <img src="/logo.png" alt="Retorno Tributário" className="logo-footer" />
          </div>
          <p className="text-sm">
            Estratégia, evidência e execução para liberar caixa fiscal.
          </p>
        </div>
        <div className="footer-links">
          <h4 className="mb-4 text-sm font-semibold text-white">Menu rápido</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <a href={link.href} className="text-sm transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact space-y-2">
          <h4 className="mb-4 text-sm font-semibold text-white">Contato direto</h4>
          <p className="text-sm">
            <i className="fas fa-map-marker-alt text-amber-300"></i> Araguaína - TO
          </p>
          <p className="text-sm">
            <i className="fas fa-envelope text-amber-300"></i>{" "}
            retornotributario@gmail.com
          </p>
          <p className="text-sm">
            <i className="fas fa-phone text-amber-300"></i> (63) 98117-9341
          </p>
        </div>
      </div>
      <div className="footer-bottom pt-8 text-center text-xs uppercase tracking-[0.3em] text-white/50">
        &copy; {new Date().getFullYear()} Retorno Tributário. Todos os direitos
        reservados.
      </div>
    </div>
  </footer>
);
