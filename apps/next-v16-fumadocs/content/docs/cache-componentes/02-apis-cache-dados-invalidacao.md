---
title: Novas APIs de cache e deduplicação
---

O Next.js 16 expande as APIs de dados para trabalhar em conjunto com os Cache Components. O objetivo é tornar as estratégias de invalidação mais declarativas e menos dependentes de configurações espalhadas.

## `cacheTag` e `revalidateTag`

Agora você pode organizar seus dados por etiquetas. Ao servir a página, chame `cacheTag('posts')`. Quando um dado mudar, invoque `revalidateTag('posts')` em uma Server Action ou rota.

```tsx
'use cache'
import { unstable_cacheTag as cacheTag } from 'next/cache'

export default async function Blog() {
  cacheTag('posts')
  const posts = await getPosts()
  return <PostsList posts={posts} />
}
```

```ts
// app/actions/posts.ts
'use server'
import { revalidateTag } from 'next/cache'

export async function publishPost(id: string) {
  await cms.publish(id)
  revalidateTag('posts')
}
```

## `cacheLife` granular

A função `cacheLife` aceita presets (`minutes`, `hours`, `days`) e perfis customizados definidos no `next.config.ts`. Você pode alterar `stale`, `revalidate` e `expire` em runtime, permitindo que um segmento tenha comportamento diferente dependendo da requisição.

```tsx
'use cache'
import { unstable_cacheLife as cacheLife } from 'next/cache'

export default async function ProductPage({ params }) {
  cacheLife({ stale: 300, revalidate: 60, expire: 86400 })
  const product = await getProduct(params.slug)
  return <ProductView data={product} />
}
```

## Request Memoization evoluído

Chamadas `fetch` com a mesma URL, método e corpo passam a serem deduplicadas em paralelo por padrão, reduzindo overfetching. Se precisar forçar bypass, use `cache: 'no-store'` ou `next: { revalidate: 0 }` explicitamente.
