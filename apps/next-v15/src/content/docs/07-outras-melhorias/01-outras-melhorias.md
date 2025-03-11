---
title: Outras Melhorias
---

## Função after()

Antes de mais nada, o que é a função `after()`?

A função permite que alguma tarefa secundária seja realizada depois de uma [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) ser enviada ao cliente.

Isso faz com que essas tarefas não bloqueiem a execução e o tempo de resposta.

Por exemplo, logar alguma coisa.

- Vamos fazer um GET route handler. Ele simplesmente vai responder com um olá mundo, mas irá logar no console algum dado do nosso request (user-agent).

- Supondo que esse log demore 1 segundo, vamos ver o que acontece

### Exemplo

```typescript
// app/api/route.ts
import { after } from 'next/server';

export async function GET(request: Request) {
  after(async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(request.headers.get('user-agent'));
        resolve(true);
      }, 3000)
    );
  });

  return new Response('Hello, world!');
}
```
