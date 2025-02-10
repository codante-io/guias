---
title: Layout Responsivo com TailwindCSS
---

Uma das principais vantagens em usar TailwindCSS é que fazer layout responsivo fica extremamente fácil.
Os *breakpoints* no TailwindCSS são variantes (ou seja, funcionam como condicionais) que podem ser aplicadas a quaisquer classes do nosso código.

:::caution
O modelo utilizado no TailwindCSS é o ***mobile first*** (os estilos básicos são aplicados para telas menores, e modificações acontecem em telas maiores). Por exemplo, se você aplicar as classes `bg-red-500` e `md:bg-blue-500`, a cor vermelha ficará do menor viewport possível (largura zero) até o breakpoint `md`. Em viewports a partir do breakpoint `md` até o *infinito*, a cor será azul.

**Isso não significa que você precise seguir a filosofica *mobile first* ao codar sua aplicação.**
:::

### Breakpoints

O TailwindCSS vem com 5 *breakpoints* por padrão:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

De novo, o TailwindCSS já tomou a decisão dos *breakpoints* para que a gente não precise pensar mais nisso. Mas claro, é possível customizar (ou adicionar mais) *breakpoints*.

:::tip
O TailwindCSS cria também, para cada tamanho de *breakpoint*, uma variante `max-*`. Com isso você pode fazer o target de um *range* de *breakpoints* ou um único *breakpoint*:

- `md:max-xl:bg-red-500` - target de um *range* de *breakpoints*
- `md:max-lg:bg-red-500` - target de um único *breakpoint*

:::
