---
title: Mudanças na versão 15
---

O cache em si não mudou na v15. Ou seja, nada foi adicionado de funcionalidade nos 4 *caches* existentes (exceto pelo 'use cache' que iremos ver a seguir).

O que mudou foi o **comportamento** de *opt-in/opt-out* de dois um desses quatro *caches*.

## Client Router Cache

O **Client Router Cache**, que é o *cache* do router que fica no navegador do usuário é um mecanismo que visa aumentar a velocidade percebida na navegação client-side. Ele tinha, por padrão um `stale-time` (tempo para revalidação) de 30 segundos. Agora, o tempo de revalidação dele é zero.

### Comparação da V15 com V14

Vamos fazer uma comparação entre as duas versões na prática usando a função `Math.random()`.

### Como fazer opt in?

Para fazer *opt-in*, você deverá utilizar a configuração - experimental - `staleTimes`.

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
}
 
module.exports = nextConfig
```

As propriedades `dynamic` e `static` referem-se a páginas dinâmicas e estáticas respectivamente.

## Data Cache

O Data Cache nada mais é do que o cache do `fetch` nas aplicações Next.js.

O que mudou da v14 para a v15 é apenas o padrão da propriedade `cache` da configuração fetch. Antes, se nada fosse passado, o `cache` tinha um valor de `force-cache`. Agora, o valor padrão é `no-store`.

### Comparação do Fetch - V15 vs V14

Vamos fazer uma comparação entre as duas versões na prática. Vamos usar a API da localização da Estação Espacial para isso.

<!-- TODO - Finalizar -->