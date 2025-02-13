---
title: Transições
---

O Tailwind traz também uma série de padrões para transições.

Para fazer transições funcionarem - sem muito esforço - basta adicionar a classe utilitária `transition`.
Por trás dos panos ela vai fazer o setup de 3 propriedades do CSS

- `transition-property` para cores, *fill*, *stroke*, gradientes, opacidades, transforme e translates, filtros, etc.
- `transition-timing-function` para `cubic-bezier(0.4, 0, 0.2, 1)`
- `transition-duration` para `150ms`

Além de usar o `transition` apenas, você poderá utilizar o `transition-colors` ou `transition-opacity` para animar apenas propriedades específicas. Novamente, além de definir a propriedade, o TailwindCSS automaticamente já define uma duração e uma *timing function*.

### Transition behavior

A propriedade transition-behavior virou `baseline` em 2024, isto é, todos os grandes browsers agora suportam. Basicamente ela serve para animar propriedades *discretas*, como por exemplo, `display:none` para `display:block`, que antes eram inanimáveis

As classes utilitárias são:

- `transition-normal`
- `transition-discrete`

### Outras classes

Outras classes para transição são autoexplicativas:

- `transition-duration`
- `transition-timing-function`
- `transition-delay`
