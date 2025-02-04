---
title: Sistemas de Medidas

---

Da mesma forma que as cores, os sistemas de medidas do TailwindCSS são predefinidos. E o mesmo argumento que usamos anteriormente, também se aplica aqui: é preferível utilizar os padrões do TailwindCSS, pois eles foram cuidadosamente planejados.

No Tailwind, para tudo que envolve medidas, podemos utilizar basicamente 4 tipos de escalas/sistemas:

- Escala numérica de espaçamento
- Escala percentual
- Escala de "container"
- Escala de "viewport"

### Escala numérica de espaçamento

Esta é a escala básica utilizada para espaçamentos como **padding** e **margin**.

Vamos inspecionar o DevTools para entender melhor como funciona a coisa. Adicionaremos alguns paddings e margins aleatórios e analisaremos cada classe.

![alt text](image-1.png)

Note que, para cada unidade de espaçamento, estamos usando uma variável chamada `--spacing` e multiplicando pelo valor.

Essa variável `--spacing` é igual a `0.25rem`:

![alt text](image-2.png)

E, tradicionalmente, `1rem = 16px`, de forma que cada unidade de espaçamento padrão do Tailwind é igual a `4px`.

Vale a pena consultar a [página de espaçamento padrão da documentação](https://v1.tailwindcss.com/docs/customizing-spacing#default-spacing-scale):

![alt text](image-3.png)

Na documentação, os valores vão até 64, mas também existem os valores 72, 80 e 96!

Com isso em mente, vamos começar a codar!

### Escala de Porcentagem

Utilizada para definir uma porcentagem relativa ao elemento pai. Aqui, você usa frações, por exemplo: `w-1/4`.

### Escala de Container

Também é possível usar um sistema de medidas de container. O sistema é o seguinte:

- `w-3xs`: 16rem (256px)
- `w-2xs`: 18rem (288px)
- `w-xs`: 20rem (320px)
- `w-sm`: 24rem (384px)
- `w-md`: 28rem (448px)
- `w-lg`: 32rem (512px)
- `w-xl`: 36rem (576px)
- `w-2xl`: 42rem (672px)
- `w-3xl`: 48rem (768px)
- `w-4xl`: 56rem (896px)
- `w-5xl`: 64rem (1024px)
- `w-6xl`: 72rem (1152px)
- `w-7xl`: 80rem (1280px)

:::tip
Eu geralmente uso o sistema de container quando quero definir a largura de itens grandes, como cards ou outros elementos na página. Para esses itens, o tamanho de 96 (384px) pode ser insuficiente 🙄
:::

### De acordo com viewport

Você pode usar uma escala de acordo com o `viewport`. O mais comum é usar o `*-screen`, que corresponde ao tamanho total do viewport (ele dinamicamente escolhe o viewport horizontal ou vertical dependendo da propriedade que você irá utilizar, por exemplo, `w-screen` ou `h-screen`).

:::tip
Eu particularmente uso *muito* a classe `min-h-screen` quando quero que, por exemplo, uma cor de background ocupe toda a tela - mesmo quando o conteúdo é menor do que a tela.
:::

Existem outras possibilidades, porém menos utilizadas (vou apenas citá-las aqui):

- `*-dvh` - viewport dinâmico (altura)
- `*-svh` - menor altura do viewport dinâmico
- `*-lvh` - maior altura do viewport dinâmico
- `*-dvw` - viewport dinâmico (largura)
- `*-svw` - menor largura do viewport dinâmico
- `*-lvw` - maior largura do viewport dinâmico
