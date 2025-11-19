# 💎 EXEMPLO PRÁTICO - Componente com Efeitos

## Exemplo 1: Section Hero Completa

```tsx
export const AdvancedHeroSection = () => (
  <section class="particles-bg bg-premium-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Background Effects */}
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 -left-40 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl animate-particle"></div>
      <div class="absolute bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-particle"></div>
    </div>

    {/* Content */}
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      {/* Main Title with Gradient */}
      <h1 class="animated-gradient-text text-5xl md:text-6xl font-bold mb-4 leading-tight">
        Recuperação Tributária Estratégica
      </h1>

      {/* Subtitle with Shimmer */}
      <p class="shimmer text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
        Reduzindo custos, aumentando margens e devolvendo o que é seu por
        direito.
      </p>

      {/* CTA Buttons */}
      <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <button class="pulse-glow px-8 py-4 bg-amber-400 text-slate-900 font-bold rounded-full hover:bg-amber-300 transition">
          <i class="fas fa-search mr-2"></i>
          Solicitar Análise
        </button>
        <button class="neon-border px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10">
          <i class="fas fa-play-circle mr-2"></i>
          Ver Demonstração
        </button>
      </div>

      {/* Scroll Indicator */}
      <div class="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div class="dot"></div>
        <div class="line mt-2"></div>
      </div>
    </div>
  </section>
);
```

---

## Exemplo 2: Cards Grid

```tsx
export const PremiumCardsSection = () => {
  const cards = [
    {
      id: 1,
      icon: "fa-shield-alt",
      title: "Segurança Jurídica",
      description: "Análise completa com respaldo legal.",
    },
    {
      id: 2,
      icon: "fa-chart-line",
      title: "Maximização de Retorno",
      description: "Estratégias comprovadas de recuperação.",
    },
    {
      id: 3,
      icon: "fa-clock",
      title: "Processo Rápido",
      description: "Implementação ágil e eficiente.",
    },
  ];

  return (
    <section class="py-20 px-6 bg-slate-950 relative overflow-hidden">
      <div class="max-w-6xl mx-auto">
        {/* Section Header */}
        <div class="section-header mb-16">
          <span class="section-tag">Diferenciais</span>
          <h2 class="gradient-text text-4xl font-bold">
            Por que nos escolher?
          </h2>
          <p class="section-subtitle mt-4">
            Expertise em recuperação tributária com resultados comprovados
          </p>
        </div>

        {/* Cards Grid */}
        <div class="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              class="fade-in-stagger floating-card hover-lift shadow-premium"
            >
              <div class="glow-effect">
                {/* Icon */}
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-white/10 flex items-center justify-center mb-6">
                  <i class={`fas ${card.icon} text-amber-400 text-2xl`}></i>
                </div>

                {/* Content */}
                <h3 class="accent-line text-xl font-bold mb-4 text-white">
                  {card.title}
                </h3>
                <p class="text-white/70">{card.description}</p>
              </div>

              {/* Bottom CTA */}
              <button class="mt-6 text-amber-400 hover:text-amber-300 font-semibold text-sm uppercase">
                Saiba Mais <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Exemplo 3: Testimonials com Wave

```tsx
export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "CEO - TechCorp",
      text: "Resultado excepcional superou nossas expectativas.",
      image: "👔",
    },
    {
      id: 2,
      name: "Marina Santos",
      role: "CFO - LogisticaCo",
      text: "Processo profissional e transparente do início ao fim.",
      image: "💼",
    },
    {
      id: 3,
      name: "Roberto Costa",
      role: "Diretor - Industrial X",
      text: "Melhor investimento que fizemos em compliance tributário.",
      image: "🏭",
    },
  ];

  return (
    <section class="py-20 px-6 bg-gradient-to-b from-slate-950 to-brand-charcoal">
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="section-header mb-16 particles-bg">
          <span class="section-tag">Depoimentos</span>
          <h2 class="animated-gradient-text text-4xl font-bold">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div class="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              class="fade-in-stagger glass-enhanced hover-lift p-8 rounded-2xl"
            >
              {/* Stars */}
              <div class="mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} class="fas fa-star text-amber-400 mr-1"></i>
                ))}
              </div>

              {/* Text */}
              <p class="text-white/90 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div class="flex items-center gap-4 border-t border-white/10 pt-4">
                <div class="text-3xl">{testimonial.image}</div>
                <div>
                  <p class="font-bold text-white">{testimonial.name}</p>
                  <p class="text-xs text-amber-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div class="mt-16 text-center">
          <button class="neon-border px-8 py-4 rounded-full font-bold text-white hover:bg-white/5">
            Ver Mais Depoimentos
          </button>
        </div>
      </div>
    </section>
  );
};
```

---

## Exemplo 4: Processo com Timeline

```tsx
export const ProcessSection = () => {
  const steps = [
    { number: 1, title: "Avaliação", description: "Análise profunda" },
    { number: 2, title: "Planejamento", description: "Estratégia customizada" },
    { number: 3, title: "Implementação", description: "Execução segura" },
    { number: 4, title: "Acompanhamento", description: "Suporte contínuo" },
  ];

  return (
    <section class="py-20 px-6 bg-slate-950">
      <div class="max-w-6xl mx-auto">
        {/* Header */}
        <div class="section-header mb-20">
          <span class="section-tag">Processo</span>
          <h2 class="gradient-text text-4xl font-bold">Como Funciona</h2>
        </div>

        {/* Timeline */}
        <div class="relative">
          {/* Connecting Line */}
          <div class="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0"></div>

          {/* Steps */}
          <div class="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} class="fade-in-stagger text-center">
                {/* Circle */}
                <div class="pulse-glow w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mx-auto mb-6">
                  <span class="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 class="accent-line text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p class="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## Exemplo 5: CTA Premium

```tsx
export const CTASection = () => (
  <section class="py-20 px-6 bg-gradient-to-br from-brand-black via-slate-950 to-brand-charcoal relative overflow-hidden">
    {/* Background Effects */}
    <div class="absolute inset-0 pointer-events-none">
      <div class="particles-bg absolute inset-0"></div>
    </div>

    {/* Content */}
    <div class="max-w-3xl mx-auto relative z-10">
      <div class="floating-card shadow-glow border border-white/20 rounded-3xl p-12 md:p-16">
        {/* Label */}
        <span class="section-tag">Próximo Passo</span>

        {/* Title */}
        <h2 class="gradient-text text-4xl font-bold mt-4 mb-6">
          Vamos desenhar seu roteiro de recuperação?
        </h2>

        {/* Description */}
        <p class="text-white/70 mb-8 text-lg">
          Reunimos documentos essenciais, criamos projeções e apresentamos um
          storytelling financeiro pronto para ser levado ao board.
        </p>

        {/* CTA Button */}
        <button class="pulse-glow neon-border px-10 py-5 bg-amber-400 text-slate-900 font-bold rounded-full hover:bg-amber-300 transition inline-flex items-center gap-3">
          <i class="fas fa-calendar-week"></i>
          Agendar Diagnóstico Guiado
        </button>

        {/* Accent Line */}
        <div class="mt-12 pt-8 border-t border-white/10">
          <p class="text-white/50 text-sm">
            ⏱️ Resposta em até 24 horas | 🔒 100% confidencial
          </p>
        </div>
      </div>
    </div>
  </section>
);
```

---

## 🎬 Como Integrar

1. **Copie o código** do exemplo desejado
2. **Importe em `src/index.tsx`**
   ```tsx
   import { AdvancedHeroSection } from "./sections";
   ```
3. **Use no render**
   ```tsx
   <AdvancedHeroSection />
   ```
4. **Build e teste**
   ```bash
   npm run dev
   ```

---

## 🎨 Customize

Cada efeito pode ser customizado:

```tsx
// Mudar duração
<div class="floating-card" style={{ "--animation-duration": "3s" }}>

// Mudar cores
<div class="gradient-text" style={{
  "--gradient-color-1": "#fff",
  "--gradient-color-2": "#000"
}}>

// Desabilitar animação
<div class="floating-card md:animate-none">
```

---

## ✅ Performance Tips

- Usar `animate-none` em mobile se necessário
- Limitar 2-3 animações por viewport
- Usar `will-change` com cuidado
- Testar em dispositivos reais
- Monitor performance com DevTools

---

**Pronto para impressionar seus usuários!** ✨
