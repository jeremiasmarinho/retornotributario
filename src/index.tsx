import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="hero">
        <nav class="navbar">
          <div class="container">
            <div class="logo">
              <i class="fas fa-balance-scale"></i>
              <span>RETORNO TRIBUTÁRIO</span>
            </div>
            <ul class="nav-links">
              <li><a href="#quem-somos">Quem Somos</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#resultados">Resultados</a></li>
              <li><a href="#teses">Teses</a></li>
              <li><a href="#contato" class="btn-contact">Contato</a></li>
            </ul>
          </div>
        </nav>

        <div class="hero-content">
          <div class="container">
            <div class="hero-text">
              <h1 class="fade-in">Recuperação Tributária Estratégica para Empresas do Lucro Real</h1>
              <p class="subtitle fade-in delay-1">Reduzindo custos, aumentando margens e devolvendo o que é seu por direito.</p>
              <div class="hero-cta fade-in delay-2">
                <a href="#contato" class="btn-primary">
                  <i class="fas fa-search"></i>
                  Solicitar Análise Gratuita
                </a>
                <a href="#processo" class="btn-secondary">
                  <i class="fas fa-play-circle"></i>
                  Como Funciona
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stats">
          <div class="container">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-icon"><i class="fas fa-shield-alt"></i></div>
                <div class="stat-number">100%</div>
                <div class="stat-label">Segurança Jurídica</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon"><i class="fas fa-gavel"></i></div>
                <div class="stat-number">Teses</div>
                <div class="stat-label">Pacificadas</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon"><i class="fas fa-chart-line"></i></div>
                <div class="stat-number">2-8%</div>
                <div class="stat-label">Recuperação Média</div>
              </div>
              <div class="stat-item">
                <div class="stat-icon"><i class="fas fa-clock"></i></div>
                <div class="stat-number">60</div>
                <div class="stat-label">Meses Analisados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Sobre Nós</span>
            <h2>Quem Somos</h2>
            <p class="section-subtitle">Especialistas em recuperação de créditos tributários</p>
          </div>

          <div class="content-box">
            <p class="lead">
              A <strong>Retorno Tributário</strong> é uma empresa especializada em recuperação de créditos tributários e 
              revisão fiscal estratégica para empresas enquadradas no Lucro Real.
            </p>
            <p>
              Nosso propósito é revelar oportunidades ocultas dentro da carga tributária brasileira, 
              transformando impostos pagos a maior em resultado financeiro imediato e legítimo.
            </p>
            <p>
              Atuamos com base em <strong>teses pacificadas e consolidadas no CARF, STJ e STF</strong>, garantindo 
              segurança jurídica total e tranquilidade operacional ao empresário.
            </p>
          </div>

          <div class="partners-section">
            <h3>Sócios</h3>
            <div class="partners-grid">
              <div class="partner-card">
                <div class="partner-icon"><i class="fas fa-user-tie"></i></div>
                <h4>Marquislei Martins Marques</h4>
                <p class="partner-title">Advogado Tributarista</p>
                <p class="partner-oab">OAB n. 11.778</p>
                <p class="partner-credential">Pós-Graduado em Recuperação de Créditos Tributários</p>
              </div>
              <div class="partner-card">
                <div class="partner-icon"><i class="fas fa-user-tie"></i></div>
                <h4>Robson Nunes Pereira de Sousa</h4>
                <p class="partner-title">Advogado Tributarista</p>
                <p class="partner-oab">OAB n. 12.159</p>
                <p class="partner-credential">Pós-Graduado em Recuperação de Créditos Tributários</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" class="section section-dark">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Por Que Escolher</span>
            <h2>Nosso Diferencial</h2>
            <p class="section-subtitle">Trabalho técnico, sigiloso e orientado a performance</p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-check"></i>
              </div>
              <h3>Atuação 100% Segura</h3>
              <p>Apenas com teses já pacificadas e consolidadas nos tribunais superiores.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-virus"></i>
              </div>
              <h3>Sem Riscos Fiscais</h3>
              <p>Nenhum impacto na operação corrente da empresa. Você continua operando normalmente.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-search-dollar"></i>
              </div>
              <h3>Análise Gratuita</h3>
              <p>Diagnóstico completo e confidencial antes de qualquer compromisso.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-users-cog"></i>
              </div>
              <h3>Equipe Integrada</h3>
              <p>Time jurídico e contábil trabalhando de forma coordenada.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Foco em Resultado</h3>
              <p>Você só paga honorários sobre o valor efetivamente recuperado.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Performance Comprovada</h3>
              <p>Milhões recuperados em créditos tributários para nossos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Metodologia</span>
            <h2>Como Funciona o Processo</h2>
            <p class="section-subtitle">Recuperação tributária em 4 etapas simples</p>
          </div>

          <div class="process-timeline">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <div class="timeline-content">
                <h3><i class="fas fa-file-search"></i> Diagnóstico Fiscal Gratuito</h3>
                <p>
                  Realizamos uma análise minuciosa dos últimos <strong>60 meses</strong> de apuração 
                  (tributos federais, ICMS, PIS/COFINS, IRPJ/CSLL etc.).
                </p>
                <p>
                  Identificamos valores pagos indevidamente ou a maior — sempre com base em 
                  <strong>jurisprudência consolidada</strong>.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <div class="timeline-content">
                <h3><i class="fas fa-calculator"></i> Cálculo e Validação</h3>
                <p>
                  Os créditos são quantificados e documentados com base nas obrigações acessórias já 
                  entregues à Receita Federal (EFDs, DCTFs, etc.).
                </p>
                <p><strong>Sem reabertura de balanços</strong>, garantindo máxima segurança.</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <div class="timeline-content">
                <h3><i class="fas fa-undo"></i> Restituição ou Compensação</h3>
                <p>
                  Após o levantamento, iniciamos o processo de recuperação dos valores via 
                  <strong>compensação tributária</strong> ou <strong>pedido de restituição</strong>, 
                  conforme o caso.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <div class="timeline-content">
                <h3><i class="fas fa-chart-pie"></i> Acompanhamento e Relatórios</h3>
                <p>
                  Mantemos o cliente informado em todas as etapas, com <strong>relatórios de andamento</strong> 
                  e resultados parciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" class="section section-highlight">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Impacto Real</span>
            <h2>Resultados Reais</h2>
            <p class="section-subtitle">Recuperação média de 2% a 8% do faturamento anual</p>
          </div>

          <div class="results-content">
            <div class="result-visual">
              <div class="result-card-large">
                <div class="result-header">
                  <i class="fas fa-building"></i>
                  <span>Exemplo Prático</span>
                </div>
                <div class="result-body">
                  <div class="result-row">
                    <span class="result-label">Faturamento Anual:</span>
                    <span class="result-value">R$ 50.000.000</span>
                  </div>
                  <div class="result-divider"></div>
                  <div class="result-row highlight">
                    <span class="result-label">Recuperação Estimada:</span>
                    <span class="result-value-range">
                      <span>R$ 1.000.000</span>
                      <span class="range-separator">até</span>
                      <span>R$ 4.000.000</span>
                    </span>
                  </div>
                  <div class="result-footer">
                    <i class="fas fa-info-circle"></i>
                    Em créditos tributários a recuperar
                  </div>
                </div>
              </div>
            </div>

            <div class="result-info">
              <div class="info-box">
                <i class="fas fa-lightbulb"></i>
                <p>
                  <strong>Você sabia?</strong> A maioria das empresas do Lucro Real possui créditos 
                  tributários não aproveitados, simplesmente por desconhecimento das teses 
                  jurídicas aplicáveis.
                </p>
              </div>
              <div class="info-box">
                <i class="fas fa-money-bill-wave"></i>
                <p>
                  <strong>Dinheiro parado:</strong> Esses valores podem ser utilizados para 
                  compensar tributos futuros ou restituídos diretamente em conta corrente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teses */}
      <section id="teses" class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Segurança Jurídica</span>
            <h2>Teses Tributárias Seguras</h2>
            <p class="section-subtitle">Apenas teses já pacificadas nos tribunais superiores</p>
          </div>

          <div class="teses-intro">
            <p class="lead">
              Trabalhamos exclusivamente com teses <strong>julgadas e reconhecidas pelo CARF, STJ e STF</strong>, 
              assegurando segurança jurídica total.
            </p>
          </div>

          <div class="teses-grid">
            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Exclusão do ICMS da base do PIS e COFINS</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Pacificada no STF</p>
            </div>

            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Exclusão do ICMS-ST da base do PIS e COFINS</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Reconhecida no STJ</p>
            </div>

            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Exclusão do ISS da base do PIS e COFINS</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Jurisprudência consolidada</p>
            </div>

            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Créditos de PIS/COFINS sobre insumos</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Ampla aplicação</p>
            </div>

            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Exclusão dos créditos presumidos de ICMS da base de cálculo do IRPJ e da CSLL</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Decidido no STF</p>
            </div>

            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>Juros sobre capital próprio (JCP) - dedução da base de cálculo do IRPJ e da CSLL</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Consolidada</p>
            </div>

            <div class="tese-card">
              <div class="tese-icon"><i class="fas fa-check-circle"></i></div>
              <h4>INSS sobre verbas indenizatórias</h4>
              <p class="tese-status"><i class="fas fa-gavel"></i> Pacificada no STF</p>
            </div>
          </div>

          <div class="security-banner">
            <i class="fas fa-shield-alt"></i>
            <div>
              <h3>100% dos processos com respaldo documental, administrativo e jurídico</h3>
              <p>Segurança jurídica total para o seu negócio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Retorno Tributário */}
      <section class="section section-why">
        <div class="container">
          <div class="why-content">
            <div class="why-text">
              <h2>Por Que a Retorno Tributário</h2>
              <ul class="why-list">
                <li><i class="fas fa-check"></i> Milhões recuperados em créditos tributários</li>
                <li><i class="fas fa-check"></i> Empresas atendidas em Araguaína-TO</li>
                <li><i class="fas fa-check"></i> Equipe formada por advogados tributaristas e contadores especializados</li>
                <li><i class="fas fa-check"></i> 100% dos processos com respaldo documental, administrativo e jurídico</li>
              </ul>
              <div class="mission-statement">
                <i class="fas fa-quote-left"></i>
                <p>Nosso nome é nosso propósito: gerar <strong>retorno</strong> — com base em técnica, ética e resultado.</p>
              </div>
            </div>
            <div class="why-visual">
              <div class="trust-badge">
                <i class="fas fa-award"></i>
                <h3>Confiança e Resultado</h3>
                <p>Recuperar o que é seu é nosso negócio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" class="section section-contact">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Fale Conosco</span>
            <h2>Vamos Conversar Sobre Quanto Sua Empresa Pode Estar Deixando na Mesa</h2>
            <p class="section-subtitle">Solicite uma análise gratuita e sigilosa do seu cenário tributário</p>
          </div>

          <div class="contact-content">
            <div class="contact-methods">
              <div class="contact-card">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <h3>E-mail</h3>
                <a href="mailto:retornotributario@gmail.com">retornotributario@gmail.com</a>
              </div>

              <div class="contact-card">
                <div class="contact-icon"><i class="fas fa-phone"></i></div>
                <h3>Telefone</h3>
                <a href="tel:+5563981179341">(63) 98117-9341</a>
              </div>

              <div class="contact-card">
                <div class="contact-icon"><i class="fas fa-globe"></i></div>
                <h3>Website</h3>
                <a href="https://www.retornotributario.com.br" target="_blank">www.retornotributario.com.br</a>
              </div>
            </div>

            <div class="cta-final">
              <h3>Pronto para recuperar seus créditos tributários?</h3>
              <a href="mailto:retornotributario@gmail.com" class="btn-primary-large">
                <i class="fas fa-paper-plane"></i>
                Solicitar Análise Gratuita Agora
              </a>
              <p class="cta-note">
                <i class="fas fa-lock"></i>
                Análise 100% confidencial e sem compromisso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-brand">
              <div class="footer-logo">
                <i class="fas fa-balance-scale"></i>
                <span>RETORNO TRIBUTÁRIO</span>
              </div>
              <p>Recuperar o que é seu é nosso negócio.</p>
            </div>
            <div class="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#quem-somos">Quem Somos</a></li>
                <li><a href="#diferenciais">Diferenciais</a></li>
                <li><a href="#processo">Processo</a></li>
                <li><a href="#resultados">Resultados</a></li>
                <li><a href="#teses">Teses</a></li>
              </ul>
            </div>
            <div class="footer-contact">
              <h4>Contato</h4>
              <p><i class="fas fa-map-marker-alt"></i> Araguaína - TO</p>
              <p><i class="fas fa-envelope"></i> retornotributario@gmail.com</p>
              <p><i class="fas fa-phone"></i> (63) 98117-9341</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Retorno Tributário. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scripts */}
      <script src="/static/script.js"></script>
    </>
  )
})

export default app
