# Retorno Tributário - Portfólio de Apresentação

## 🏛️ Visão Geral

Portfólio web profissional para a **Retorno Tributário**, empresa especializada em recuperação de créditos tributários e revisão fiscal estratégica para empresas do Lucro Real.

**URL de Desenvolvimento**: https://3000-ivuxsovftd7faev60apal-cc2fbc16.sandbox.novita.ai

## ✨ Características Implementadas

### Seções Completas
- ✅ **Capa/Hero**: Título impactante com CTAs e estatísticas principais
- ✅ **Quem Somos**: Apresentação da empresa e sócios
- ✅ **Diferenciais**: 6 cards com principais vantagens competitivas
- ✅ **Processo**: Timeline interativa com 4 etapas do serviço
- ✅ **Resultados Reais**: Visualização de recuperação estimada
- ✅ **Teses Tributárias**: Grid com 7 teses pacificadas
- ✅ **Por Que Escolher**: Argumentos de credibilidade
- ✅ **Contato**: Formulário de contato com informações
- ✅ **Footer**: Navegação e informações adicionais

### Design & UX
- 🎨 **Paleta de Cores**: Dourado (#D4AF37) + Preto (#0A0A0A) + Branco
- 🔤 **Tipografia**: Playfair Display (títulos) + Inter (corpo)
- ✨ **Animações**: Fade-in, scroll reveal, hover effects, parallax
- 📱 **Responsivo**: Design adaptativo para desktop, tablet e mobile
- 🎯 **Interatividade**: Smooth scroll, active nav, ripple effects

### Funcionalidades Técnicas
- 🚀 **Framework**: Hono + Cloudflare Pages
- ⚡ **Performance**: Edge-first, bundle otimizado
- 🎭 **Animações**: Intersection Observer, CSS animations
- 🔒 **SEO**: Meta tags, semantic HTML
- 📊 **Analytics**: Console logging, performance tracking

## 🎯 URIs Funcionais

### Navegação Principal
- `/` - Página principal (todas as seções em single-page)
- `/#quem-somos` - Seção Quem Somos
- `/#diferenciais` - Seção Diferenciais
- `/#processo` - Seção Processo
- `/#resultados` - Seção Resultados
- `/#teses` - Seção Teses Tributárias
- `/#contato` - Seção Contato

### Recursos Estáticos
- `/static/style.css` - Estilos CSS principais
- `/static/script.js` - Scripts JavaScript interativos

## 🏗️ Arquitetura de Dados

### Estrutura de Conteúdo
```
- Empresa
  - Nome: Retorno Tributário
  - Sócios: 2 advogados tributaristas
  - Localização: Araguaína-TO
  
- Serviços
  - Diagnóstico Fiscal (60 meses)
  - Cálculo e Validação
  - Restituição/Compensação
  - Acompanhamento
  
- Teses (7 principais)
  - Exclusão ICMS (PIS/COFINS)
  - Exclusão ICMS-ST (PIS/COFINS)
  - Exclusão ISS (PIS/COFINS)
  - Créditos PIS/COFINS insumos
  - Créditos presumidos ICMS
  - JCP (IRPJ/CSLL)
  - INSS verbas indenizatórias
  
- Contato
  - Email: retornotributario@gmail.com
  - Telefone: (63) 98117-9341
  - Website: www.retornotributario.com.br
```

### Stack Tecnológica
- **Backend**: Hono (TypeScript)
- **Deployment**: Cloudflare Pages
- **Build**: Vite
- **Process Manager**: PM2 (desenvolvimento)
- **Styling**: CSS3 com variáveis customizadas
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Font Awesome 6.5.1

## 📚 Guia do Usuário

### Navegação
1. **Menu Superior**: Click em qualquer item para scroll suave até a seção
2. **Hero CTAs**: 
   - "Solicitar Análise Gratuita" → Vai para contato
   - "Como Funciona" → Vai para seção de processo
3. **Cards Interativos**: Hover sobre cards para efeitos visuais
4. **Links de Contato**: Click direto para email, telefone ou website

### Interações Especiais
- **Scroll Reveal**: Elementos aparecem ao scrollar
- **Parallax Hero**: Fundo se move com scroll
- **Active Nav**: Link ativo muda conforme seção visível
- **Ripple Effect**: Botões têm efeito de onda ao click
- **Number Animation**: Números nas estatísticas animam ao aparecer

## 🚀 Status de Deployment

### Desenvolvimento
- ✅ **Ambiente Local**: Ativo em http://localhost:3000
- ✅ **URL Pública**: https://3000-ivuxsovftd7faev60apal-cc2fbc16.sandbox.novita.ai
- ✅ **Build**: Compilado com sucesso
- ✅ **Git**: Repository inicializado e commits realizados

### Produção
- ⏳ **Cloudflare Pages**: Aguardando configuração de API Key
- 📋 **Próximos Passos**:
  1. Configurar Cloudflare API Key no Deploy tab
  2. Executar `npm run deploy:prod`
  3. Configurar domínio customizado (opcional)

## 🔧 Comandos de Desenvolvimento

```bash
# Desenvolvimento local
npm run dev              # Vite dev server
npm run dev:sandbox      # Wrangler pages dev (0.0.0.0:3000)

# Build e deploy
npm run build           # Compilar para produção
npm run preview         # Preview do build
npm run deploy          # Deploy para Cloudflare Pages
npm run deploy:prod     # Deploy para produção com project name

# PM2 (gerenciamento de processo)
pm2 start ecosystem.config.cjs  # Iniciar
pm2 logs webapp --nostream      # Ver logs
pm2 restart webapp              # Reiniciar
pm2 stop webapp                 # Parar
pm2 delete webapp               # Remover

# Utilitários
npm run clean-port      # Limpar porta 3000
npm run test           # Testar com curl
```

## 📈 Melhorias Futuras Sugeridas

### Funcionalidades
- [ ] Formulário de contato funcional com API
- [ ] Menu mobile hamburger
- [ ] Calculadora de créditos interativa
- [ ] Blog de artigos tributários
- [ ] Área de clientes (login)
- [ ] Chat online/WhatsApp integration

### Design
- [ ] Dark mode toggle
- [ ] Mais animações micro-interações
- [ ] Galeria de cases de sucesso
- [ ] Vídeos explicativos
- [ ] Infográficos interativos

### SEO & Marketing
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] Schema.org markup
- [ ] Sitemap XML
- [ ] OpenGraph tags
- [ ] Twitter Cards

### Performance
- [ ] Lazy loading de imagens
- [ ] Service Worker (PWA)
- [ ] Image optimization
- [ ] Font preloading
- [ ] Critical CSS inline

## 👥 Informações de Contato

**Retorno Tributário**
- 📧 Email: retornotributario@gmail.com
- 📱 Telefone: (63) 98117-9341
- 🌐 Website: www.retornotributario.com.br
- 📍 Localização: Araguaína - TO

**Sócios**
- Marquislei Martins Marques - OAB 11.778
- Robson Nunes Pereira de Sousa - OAB 12.159

---

**Última Atualização**: 2025-01-15
**Status**: ✅ Ativo e Funcional
**Versão**: 1.0.0

*Desenvolvido com Hono + Cloudflare Pages*
