# 📋 Estrutura do Projeto - Retorno Tributário

## 🎯 Visão Geral

O projeto foi refatorado para estar **100% em TypeScript** com **Tailwind CSS** como único framework de estilos. Não há conflitos de CSS ou estilos duplicados.

---

## 📁 Estrutura de Diretórios

```
webapp/
├── src/
│   ├── main.tsx               # Entry React + bootstrap do App
│   ├── App.tsx                # Composição das seções da landing
│   ├── index.tsx              # (Legado) handler Hono – manter para referência
│   ├── renderer.tsx           # (Legado) renderer Hono
│   ├── sections/              # Componentes da página
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── DifferentialsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── ThesesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── index.ts           # Exportação centralizada
│   ├── styles/
│   │   └── main.css           # ✅ Fonte de verdade das camadas Tailwind
│   ├── content/               # Conteúdo estruturado
│   │   └── data.ts
│   ├── __tests__/             # Testes Vitest
│   └── test/                  # Setup de testes
├── public/
│   └── static/
│       └── script.js          # Scripts JavaScript customizados
├── tailwind.config.ts         # Configuração Tailwind (TS)
├── postcss.config.js          # Configuração PostCSS
├── vite.config.ts             # Configuração Vite
├── tsconfig.json              # Configuração TypeScript
├── package.json               # Dependências e scripts
└── .gitignore                 # Ignora dist/ e node_modules/
```

---

## 🎨 Sistema de Estilos

### ✅ Correto - USAR APENAS

**Arquivo Principal:** `src/styles/main.css`

Este arquivo contém:

- Diretivas `@tailwind` (base, components, utilities)
- Customizações em `@layer base` (estilos globais)
- Componentes customizados em `@layer components` (classes reutilizáveis)
- Animações e utilidades em `@layer utilities`

### ❌ NÃO USE

- `src/style.css` - Arquivo antigo removido
- Arquivos CSS separados por componente
- Inline styles com conflitos

### 🔄 Fluxo de Build de CSS

```
src/styles/main.css
  ↓
(importado em src/main.tsx)
  ↓
Vite + PostCSS (dev/build)
  ↓
Dist bundle otimizado
```

---

## 🏗️ Componentes

Todos os componentes estão em **`src/sections/`** e são:

- ✅ Totalmente TypeScript (`.tsx`)
- ✅ Modularizados e reutilizáveis
- ✅ Apenas com classes do Tailwind CSS
- ✅ Sem estilos inline (exceto variáveis CSS necessárias)

**Exemplo de componente correto:**

```tsx
export const HeroSection = () => (
  <section class="hero brand-aurora relative pb-24 text-white" data-aurora>
    <div class="mx-auto max-w-6xl px-6 py-20">
      <h1 class="text-4xl font-bold text-white">
        Recuperação Tributária Estratégica
      </h1>
    </div>
  </section>
);
```

### Componentes Existentes

1. **HeroSection** - Hero com navbar e CTA
2. **AboutSection** - Sobre a empresa
3. **DifferentialsSection** - Diferenciais
4. **GallerySection** - Galeria/Portfolio
5. **ProcessSection** - Processo de trabalho
6. **ResultsSection** - Resultados
7. **ThesesSection** - Teses jurídicas
8. **TestimonialsSection** - Depoimentos
9. **CtaSection** - Call-to-action
10. **ContactSection** - Formulário de contato
11. **FooterSection** - Rodapé

---

## 📝 Scripts Available

```bash
# Desenvolvimento
npm run dev                # Inicia servidor dev (Vite)

# Build
npm run build              # Build completo (Vite + Tailwind integrados)

# Preview
npm run preview            # Preview do build em produção

# Tests
npm run test               # Testes unitários (Vitest)
npm run test:watch         # Testes em watch mode
```

---

## ⚙️ Configurações Importantes

### `tailwind.config.ts`

- Define cores customizadas (brand.gold, brand.black, etc)
- Define fontes (Poppins, Roboto)
- Define box-shadows customizadas
- Amplia/estende configurações padrão do Tailwind

### `postcss.config.js`

- Ativa Tailwind CSS
- Ativa Autoprefixer para compatibilidade

### `renderer.tsx`

- Configura o HTML base
- Renderiza markup base quando usado no modo Hono legado
- Define meta tags e fonts do Google

---

## 🚀 Como Adicionar Estilos

### Adicionar uma classe customizada reutilizável:

**Em `src/styles/main.css` (na seção `@layer components`):**

```css
@layer components {
  .card-custom {
    @apply rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg;
  }
}
```

**Usar no componente:**

```tsx
<div class="card-custom">Conteúdo</div>
```

### Usar Tailwind CSS direto (preferido):

```tsx
<div class="rounded-lg border border-white/10 bg-white/5 p-6 shadow-lg">
  Conteúdo
</div>
```

---

## ✅ Checklist de Qualidade

Antes de fazer commit, verifique:

- [ ] Todos os arquivos `.tsx` existem em `src/sections/` ou `src/`
- [ ] Nenhum arquivo CSS solto fora de `src/styles/main.css`
- [ ] Nenhum `style.css` em `src/`
- [ ] Nenhum arquivo `.scss` ou `.less`
- [ ] Nenhum inline style com cores hardcoded (usar classes Tailwind)
- [ ] Classes Tailwind são usadas em lugar de CSS customizado
- [ ] Build executa sem erros: `npm run build`
- [ ] Servidor dev executa: `npm run dev`

---

## 🔍 Debugging

### Se as classes Tailwind não aparecem:

1. Verifique se o arquivo está em `src/`
2. Verifique se a classe existe em `tailwind.config.ts`
3. Execute: `npm run build`
4. Limpe o cache do navegador (Ctrl+Shift+R)

### Se há conflitos de CSS:

1. Procure por arquivos `.css` fora de `src/styles/`
2. Procure por `style="..."` inline (converter para classes Tailwind)
3. Procure por `@import` em componentes

---

## 📚 Recursos

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Hono Framework](https://hono.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

**Última atualização:** 20 de Novembro de 2025
**Status:** ✅ Projeto limpo e otimizado
