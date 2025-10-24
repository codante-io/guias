---
title: Cache Components e o novo modelo de cache
---

O Next.js 16 oficializa o conceito de **Cache Components**, uma camada que combina Partial Pre-rendering (PPR) com o novo diretório de cache do React Server Components. A ideia é simples: o que puder ser pré-renderizado passa a ser armazenado de forma determinística e reaproveitado em navegações futuras, sem sacrificar trechos realmente dinâmicos.

## Como habilitar

1. Ajuste o `next.config.ts` para ativar `cacheComponents`.
2. Aplique a diretiva `'use cache'` nos arquivos ou funções que podem ser armazenados.
3. Use `cacheLife` para definir perfis (ex.: `hours`, `days` ou perfis customizados).

```ts
// next.config.ts
const nextConfig = {
  cacheComponents: true,
}

export default nextConfig
```

```tsx
'use cache'
import { unstable_cacheLife as cacheLife } from 'next/cache'

export default async function Page() {
  cacheLife({ stale: 3600, revalidate: 900, expire: 86400 })
  const posts = await fetch('https://api.codante.io/posts').then((res) => res.json())
  return <PostsList posts={posts} />
}
```

## Migração de padrões antigos

- `dynamic = "force-static"` agora é substituído por `'use cache'`.
- `revalidate` na configuração do segmento vira `cacheLife`.
- `fetchCache` se torna desnecessário dentro de escopos com `'use cache'`.

A regra prática: cacheie no nível em que você quer controlar o estado de carregamento. A cada anotação `'use cache'`, avalie se o componente depende de dados por requisição (`cookies`, `headers`, `draftMode`). Se depender, mantenha-o fora do cache ou use `revalidateTag` para invalidar sob demanda.

## Boas práticas

- Defina perfis nomeados no `cacheLife` para refletir o SLA da equipe (`minutes`, `hours`, `marketing`, etc.).
- Combine com `cacheTag` para invalidação precisa após atualizações de CMS.
- Encapsule chamadas de dados em funções cacheadas para separar responsabilidades entre fetches dinâmicos e estáticos.
