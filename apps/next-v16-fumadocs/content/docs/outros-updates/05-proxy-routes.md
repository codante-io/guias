---
title: Proxy routes com proxy.ts
---

O Next.js 16 substitui boa parte do uso de `middleware.ts` pelo novo arquivo `proxy.ts`. Ele vive na raiz do projeto e roda no runtime Node.js, tornando explícita a fronteira de rede da aplicação. Com ele, criamos modificadores de requisição e resposta com o mínimo de boilerplate.

## Estrutura básica

```ts
// proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
}
```

Coloque o arquivo na raiz do projeto (mesmo nível de `next.config.ts`). O `matcher` segue o mesmo padrão das antigas configurações de middleware.

## Quando usar

- Para aproveitar caching no edge sem reimplementar lógica de REST.
- Para ofuscar tokens ou forçar headers corporativos.
- Para responder rapidamente com streaming, já que o proxy mantém o corpo original por padrão.

## Boas práticas

- Mantenha a função idempotente e sem efeitos colaterais lentos; ela roda em todas as requisições antes do roteamento.
- Encapsule regras complexas em módulos auxiliares (`auth.ts`, `rewrites.ts`) e importe-as em `proxy.ts`.
- Documente o `matcher` para que outras pessoas da equipe saibam exatamente quais rotas são afetadas.
