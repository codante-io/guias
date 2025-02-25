---
title: Rotas API no Next.js
---

## Rotas API no Next.js

O Next.js foi inovador quando foi lançado justamente por lançar mão dos benefícios de uma aplicação que rodava em um servidor.

Ao contrário do tradicional SPA React, uma aplicação Next.js está rodando em um servidor e possui acesso, portanto, ao ambiente *node* do servidor.

Um dos benefícios foi poder transformar o *framework frontend* em um *framework fullstack*. E muito disso foi possível porque o Next.js implementou as chamadas **Rotas API**.

Com o Next.js v13+, as Rotas APIs foram renomeadas para `Route Handlers`.

## Anatomia das Route Handlers

### O Arquivo

Uma rota API é definida da mesma forma que uma página `page`. Exceto que o nome agora deverá ser `route.ts` ou `route.js`.

:::caution
Perceba que as rotas API são processadas inteiramente no servidor - dessa forma não aceitam `JSX`, e portanto a extensão não pode ser `jsx|tsx`.
:::

### A função

Sabemos que elas são definidas dentro de um `route.ts`. Certo, mas o que é definido nesse arquivo?

Necessariamente em uma rota API você deverá exportar uma (ou mais de uma) das seguintes funções assíncronas:

- GET
- HEAD
- POST
- PUT
- DELETE
- PATCH
- OPTIONS

Como não é difícil perceber, cada uma dessas funções exportadas se referirá a um método HTTP.

Exemplo abaixo:

```typescript
export async function GET() {}
 
export async function HEAD() {}
 
export async function POST() {}
 
export async function PUT() {}
 
export async function DELETE() {}

export async function PATCH() {}

```

### Os parâmetros

Cada uma dessas funções exportadas receberá dois parâmetros opcionais:

- `request`: um objeto do tipo `Request`
- `context`: um objeto do tipo `NextRequest`

#### O parâmetro `request`

O parâmetro `request` é um objeto do tipo `Request` que representa a requisição HTTP. O mais legal é que é um Web API Request.

Isso significa que você pode usar todos os métodos disponíveis no `Request` do browser.

Por exemplo, você pode acessar os parâmetros da requisição através do `searchParams`:

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  return new Response(`Hello ${name}`)
}
```

#### O parâmetro `context`

O parâmetro `context` é um objeto que possui uma prop `params`, que é uma promise que resolve em um objeto que contém os parâmetros da rota.
