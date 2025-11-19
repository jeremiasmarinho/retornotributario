# 📋 Estrutura do Projeto - Retorno Tributário

## 🎯 Visão Geral

O projeto foi refatorado para estar **100% em TypeScript** com **Tailwind CSS** como único framework de estilos. Não há conflitos de CSS ou estilos duplicados.

---

## 📁 Estrutura de Diretórios

```
webapp/
├── src/
│   ├── index.tsx              # Arquivo principal - Importa e renderiza todos os componentes
│   ├── renderer.tsx           # Configuração do renderer Hono com meta tags e links
│   ├── style.css              # ❌ REMOVIDO - Não usar
│   ├── styles/
│   │   └── tailwind.css       # ✅ FONTE DE VERDADE - Definições do Tailwind + customizações
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
│   │   └── index.ts           # Exportação centralizada de componentes
│   └── content/
│       └── data.ts            # Dados e conteúdo centralizado
├── public/
│   ├── static/
│   │   ├── style.css          # ❌ GERADO AUTOMATICAMENTE - Não editar!
│   │   └── script.js          # Scripts JavaScript customizados
│   └── logo.png               # Logo da marca
├── tailwind.config.js         # Configuração do Tailwind (cores, fonts, etc)
├── postcss.config.js          # Configuração do PostCSS
├── vite.config.ts             # Configuração do Vite
├── tsconfig.json              # Configuração do TypeScript
├── package.json               # Dependências e scripts
└── .gitignore                 # ✅ ATUALIZADO - Inclui public/static/style.css
```

---

## 🎨 Sistema de Estilos

### ✅ Correto - USAR APENAS

**Arquivo Principal:** `src/styles/tailwind.css`

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
src/styles/tailwind.css
    ↓
(npm run build:css)
    ↓
public/static/style.css (GERADO)
    ↓
(linkado no renderer.tsx)
    ↓
Browser
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
npm run build:css          # Gera CSS do Tailwind (automático)
npm run build              # Build completo (CSS + Vite)

# Preview
npm run preview            # Preview do build em produção

# Deploy
npm run deploy             # Deploy para Cloudflare Pages

# TypeScript
npm run cf-typegen         # Gera tipos do Cloudflare
```

---

## ⚙️ Configurações Importantes

### `tailwind.config.js`

- Define cores customizadas (brand.gold, brand.black, etc)
- Define fontes (Poppins, Roboto)
- Define box-shadows customizadas
- Amplia/estende configurações padrão do Tailwind

### `postcss.config.js`

- Ativa Tailwind CSS
- Ativa Autoprefixer para compatibilidade

### `renderer.tsx`

- Configura o HTML base
- Importa `public/static/style.css` gerado
- Define meta tags e fonts do Google

---

## 🚀 Como Adicionar Estilos

### Adicionar uma classe customizada reutilizável:

**Em `src/styles/tailwind.css` (na seção `@layer components`):**

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
- [ ] Nenhum arquivo CSS solto fora de `src/styles/tailwind.css`
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
2. Verifique se a classe existe em `tailwind.config.js`
3. Execute: `npm run build:css`
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

**Última atualização:** 19 de Novembro de 2025
**Status:** ✅ Projeto limpo e otimizado
