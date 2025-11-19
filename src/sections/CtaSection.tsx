export const CtaSection = () => (
  <section class="section section-cta bg-gradient-to-r from-amber-300 to-yellow-400 py-16 text-slate-900" data-animate="fade-up">
    <div class="mx-auto max-w-5xl px-6">
      <div class="cta-panel tilt-card flex flex-col items-start gap-6 rounded-[32px] bg-white/80 p-10 shadow-2xl md:flex-row md:items-center md:justify-between">
        <div class="space-y-4">
          <span class="text-xs uppercase tracking-[0.4em] text-slate-600">Próximo passo</span>
          <h2 class="text-3xl font-semibold text-slate-900">
            Vamos desenhar um roteiro de recuperação alinhado à sua estratégia?
          </h2>
          <p class="text-base text-slate-600">
            Reunimos documentos essenciais, criamos projeções e apresentamos um storytelling financeiro pronto
            para ser levado ao board.
          </p>
        </div>
        <a href="#contato" class="btn-primary btn-glow bg-slate-900 text-white hover:bg-slate-800" data-ripple>
          <i class="fas fa-calendar-week"></i>
          Agendar diagnóstico guiado
        </a>
      </div>
    </div>
  </section>
);
