---
title: O `next/link`
---


O primeiro e mais essencial componente para uma aplicação Next.js é o `<Link>`.

Isso porque uma aplicação Next.js não é um `SPA` (single page application), ela é multi-page. Então, para que tenhamos navegação client-side precisamos usar o `<Link>` ao invés de uma *anchor tag* (`<a>`).

Uma coisa interessante sobre o Link é que, no caso de páginas estáticas, quaisquer `<Link>` que estiverem visíveis no navegador irão fazer o prefetch dos dados correspondentes. Ou seja, mais performance.

## Exercício

Vamos agora trocar todos as tags `<a>` para componentes `<Link>`, quando aplicável.

## API do componente

Vale a pena dar uma olhadinha na [API oficial](https://nextjs.org/docs/app/api-reference/components/link) deste componente - que traz mais funcionalidades existentes dentro deste componente.
