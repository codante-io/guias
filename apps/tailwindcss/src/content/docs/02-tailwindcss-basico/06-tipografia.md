---
title: Tipografia
---

### Tamanho da fonte

O primeiro aspecto que percebemos em uma fonte é seu tamanho. Para alterar o tamanho da fonte, basta usar uma das classes de tamanho de fonte:

- `text-xs`
- `text-sm`
- `text-base`
- `text-lg`
- `text-xl`
- `text-2xl`
- `text-3xl`
- `text-4xl`
- `text-5xl`
- `text-6xl`
- `text-7xl`
- `text-8xl`
- `text-9xl`

### Font Family

Para mudar a fonte no TailwindCSS, a partir da V4, basta utilizar variáveis CSS.

O TailwindCSS já vem com 3 tipos de fonte: *sans-serif*, *serif* e *monospace* (classes respectivas: `font-sans`, `font-serif` e `font-mono`). Elas estão configuradas para ser as fontes do próprio sistema (*ui-sans-serif, ui-serif, ui-monospace*).

Você tem a opção ou de (i.) trocar uma dessas 3 fontes; ou (ii.) criar outras classes para outras fontes.

Para qualquer um dos casos, você deverá criar uma variável dentro da diretiva `@theme` em algum lugar no seu CSS. Vamos alterar o padrão da `font-sans`:

```css title="tailwind.css"
@theme {
  --font-sans: "Open Sans", "ui-sans-serif" 
}
```

Agora, se quisermos criar uma nova classe para uma nova fonte, podemos fazer da mesma forma

```css title="tailwind.css" ins={3}
@theme {
  --font-sans: "Open Sans", "ui-sans-serif" 
  --font-codante: "Lexend", "ui-sans-serif"
}
```

Agora teremos uma classe customizada `font-codante` que trará a família *Lexend* toda vez que a utilizarmos.

#### Instalando uma fonte do Google

Se formos testar esse código, vamos ver que a `font-codante` traz uma fonte serifada padrão - ou seja, não funcionou. Isso porque não instalamos a fonte em nosso projeto.

Para instalarmos, basta seguirmos as orientações e temos duas opções

1. Usar a diretiva `@import` no CSS
2. Importar diretamente no HTML

Feito isso nossa fonte estará funcionando!

### Peso da Fonte (weight)

Também conseguimos controlar o peso da fonte.

As classes de peso da fonte estão abaixo:

- `font-thin` - *font-weight: 100*;
- `font-extralight` - *font-weight: 200*;
- `font-light` - *font-weight: 300*;
- `font-normal` - *font-weight: 400*;
- `font-medium` - *font-weight: 500*;
- `font-semibold` - *font-weight: 600*;
- `font-bold` - *font-weight: 700*;
- `font-extrabold` - *font-weight: 800*;
- `font-black` - *font-weight: 900*;

### Espaçamento de Linha

Espaçamento de linha também é uma *arte*, para fontes cada vez maiores - ou menores, o espaçamento deverá mudar.

Não basta o tradicional 1.5x o tamanho da fonte. Quanto maior a fonte, menor deve ser o multiplicador do line height. Quanto menor a fonte, maior o multiplicador.

Para uma fonte 16px padrão provavelmente 1.5x é ideal. Mas para uma fonte 5xl, provavalmente 1x ficará melhor, enquanto que, para uma fonte xs, provavelmente 1.75x será melhor.

De novo, aqui o TailwindCSS faz esse trabalho por nós. Quando mudamos o tamanho da fonte no Tailwind, além do tamanho da fonte mudar, o espaçamento de linha também muda 🤩

De qualquer forma, você pode alterar manualmente isso:

- `leading-normal`
- `leading-tight`
- `leading-snug`
- `leading-loose`
- `leading-relaxed`
- `leading-none`

Também é possível alterar o tamanho do espaçamento de linha junto com o tamanho da fonte: `text-2xl/5` note que o número após a `/` usa a escala do espaçamento.

### Outras classes interessantes

#### Line Clamp

O `line-clamp` do TailwindCSS ajusta várias propriedades do CSS para que o texto seja truncado em um número máximo de linhas. Então, se usarmos `line-clamp-3`, o máximo de linhas do texto será `3`.

#### Truncate

Da mesma forma que o `line-clamp` serve para truncar o máximo de linhas, a classe `truncate` serve para que o overflow do texto em uma linha seja substituído por `...`.

### Plugin de Tipografia

Vamos ver mais para frente que o TailwindCSS disponibiliza um plugin de Tipografia que traz vários padrões pré-definidos excelentes para textos.
