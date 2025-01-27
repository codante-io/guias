---
title: Imagens com `next/image`
---


Imagens são a parte mais "pesada" de websites modernos. Isso porque uma imagem pode chegar facilmente a alguns megabytes de tamanho - o que pode ser maior do que praticamente todo o código restante de uma aplicação.

Além disso, imagens são as principais responsáveis por *layout shift*, que queremos evitar a todo custo para preservar a UX de nossa aplicação.

Resolvemos esses problemas quando usamos o `next/image`.

## Imagens próprias e imagens remotas

Podemos usar o componente `<Image>` em nossas próprias imagens que estão no nosso projeto como também em imagens que estão hospedadas remotamente.

:::caution
Quando usamos imagens remotas, precisamos configurar uma "whitelist/allow list" para explicitamente determinarmos quais domínios permitimos.

Além disso, quando usamos imagens externas, precisamos determinar explicitamente qual é a largura e altura da imagem para evitarmos layout shift - isso não é necessário quando as imagens são próprias.
:::

## Tamanho das imagens

Antes de usarmos o `next/image` uma das coisas mais importantes a saber é que o componente de imagem **sempre** trabalha com tamanhos de imagens (largura x altura). Isso permite que o componente consiga evitar *layout shift*.

O `next/image` precisa sempre ter o tamanho das imagens e isso acontece de três formas:

1. O tamanho é inferido automaticamente pelo `next/image` quando uma imagem é importada de forma estática.
2. O tamanho deverá ser informado manualmente através das propriedades `width` e `height`
3. O tamanho é inferido implicitamente quando você usa a prop `fill` - o que causa que a imagem seja expandida para completar o elemento pai

Mais infos sobre tamanho de imagens [aqui](https://nextjs.org/docs/app/building-your-application/optimizing/images#image-sizing).

## Exercício - Migrando imagens para `next/image`

O exercício aqui é simples. Precisamos fazer com que todas as imagens de nossa aplicação sejam servidas através do componente `next/image`.

## Permitindo `avif`

Podemos configurar para que o `next/image` sirva imagens em `avif` ao invés de `webp` para mais otimização ainda. Para isso, vamos modificar nossas configurações do arquivo `next.config.mjs`:

```typescript title="next.config.mjs"
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  }
};

export default nextConfig;
```
