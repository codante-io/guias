---
title: Exemplos práticos de Cache
---

Vamos criar uma aplicação nova com *Next.js* que irá fazer o fetch da [API da ISS](http://open-notify.org/Open-Notify-API/ISS-Location-Now/).

Ela atualiza frequentemente então é uma boa forma de entendermos o que foi e o que não foi cacheado.

## Entendendo Full Route Cache (página estática vs dinâmica)

- Vamos entender a diferença entre dev server e production
- Vamos ver o novo devtools da versão canary do next.js
- Vamos entender a exportação da const `dynamic`.

## Entendendo o Cache de múltiplos fetches (Request memoization)

- Vamos fazer 2 ou mais fetches para o mesmo endereço

## Entendendo o Data Cache

- Vamos entender o que é o Data Cache - e como é armazenado
- Vamos revalidar o Data Cache com `revalidateTag()` e `revalidatePath()`
- Vamos adicionar Tags ao nosso fetch
- Vamos adicionar tempo para invalidação do cache
-

## Entendendo o Router Cache

- Vamos ver o comportamento padrão do Router Cache
- Vamos mudar as configurações para usar o client-side router:

```typescript
// next.config.ts
// (...)
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
```
