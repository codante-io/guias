---
title: Diretivas no Tailwind
---

Diretivas no TailwindCSS são `at-rules` customizadas - ou seja, que não existem na linguagem.

`At-rules` fazem parte da linguagem do CSS e possuem a seguinte sintaxe:

```css
/* Estrutura */
@identifier (RULE);

/* Exemplo */
@charset "utf-8";
```

É importante sabermos quais `at-rules` são da linguagem CSS e quais são diretivas do TailwindCSS. Por essa razão coloquei a listagem de todas elas abaixo.

### At Rules do CSS

Abaixo estão todas as `at-rules` do CSS ([fonte](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)):

```text
@charset;
@color-profile;
@container;
@counter-style;
@font-face;
@font-feature-values;
@font-palette-values;
@import;
@keyframes;
@layer;
@media;
@namespace;
@page;
@position-try;
@property;
@scope;
@starting-style;
@supports;
@view-transition;
```

### Diretivas do TailwindCSS

Abaixo estão todas as **diretivas** do TailwindCSS:

```text
@import;
@theme;
@source;
@utility;
@variant;
@custom-variant
@apply;
@reference;
@config;
@plugin;
```

## @layer

O `@layer` é uma `at-rule` que é relativamente importante para quem usa TailwindCSS já que a biblioteca é construída em cima deles.

os layers utilizados pelo `TailwindCSS` são:

```css
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css" layer(utilities);
```
