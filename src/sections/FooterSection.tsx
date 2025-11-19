import { navLinks } from "../content/data";

export const FooterSection = () => (
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <i class="fas fa-balance-scale"></i>
            <span>RETORNO TRIBUTÁRIO</span>
          </div>
          <p>Design, dados e estratégia para recuperar o que é seu.</p>
        </div>
        <div class="footer-links">
          <h4>Menu rápido</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={`footer-${link.href}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contato direto</h4>
          <p>
            <i class="fas fa-map-marker-alt"></i> Araguaína - TO
          </p>
          <p>
            <i class="fas fa-envelope"></i> retornotributario@gmail.com
          </p>
          <p>
            <i class="fas fa-phone"></i> (63) 98117-9341
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Retorno Tributário. Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);
