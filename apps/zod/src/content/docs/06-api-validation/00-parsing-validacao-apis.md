---
title: Parsing e validação de respostas de APIs
---

Quando trabalhamos com APIs, especialmente no Next.js, é essencial garantir que os dados recebidos estejam no formato esperado. O **Zod** facilita o parsing e a validação de dados retornados pelas APIs, assegurando que os dados recebidos ou enviados estejam no formato correto.

No Next.js, podemos usar **API Route Handlers** para criar nossas APIs e aplicar a validação de dados diretamente nas rotas. Vamos ver como usar o Zod para garantir que os dados recebidos em uma requisição de API sejam válidos.

## Exemplo 1: Validação de dados recebidos em uma rota de API

Aqui, criamos uma API em Next.js que recebe um objeto com `name` e `age`, validando esses dados com o Zod.

```ts
// src/app/api/users/route.ts

import { z } from 'zod';
import { NextResponse } from 'next/server';

// Definindo o schema para validação
const userSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  age: z.number().min(18, 'A idade mínima é 18 anos.'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validando os dados recebidos
    const parsedData = userSchema.parse(body);

    // Processando os dados após validação
    return NextResponse.json({
      message: 'Dados validados com sucesso',
      data: parsedData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Erro desconhecido' }, { status: 500 });
  }
}
```

### Explicação

- **Schema**: O `userSchema` define que o campo `name` é uma string obrigatória e `age` deve ser um número com idade mínima de 18.
- **Validação**: Usamos `userSchema.parse()` para validar os dados enviados no corpo da requisição. Se houver erros, eles são capturados e enviados de volta ao cliente com status 400.
- **Resposta**: Caso os dados sejam válidos, retornamos uma resposta de sucesso com os dados validados.

---
