---
title: Garantindo estruturas de dados e tipos corretos
---

Além de validar entradas, podemos usar o Zod para garantir que as respostas enviadas por uma API sigam uma estrutura de dados específica. Isso é crucial para garantir que o cliente que consome a API receba sempre uma resposta no formato correto.

Vamos ver um exemplo onde garantimos que os dados retornados pela API estejam corretos, tanto em formato quanto em tipo.

## Exemplo 2: Garantindo tipos corretos na resposta da API

Neste exemplo, validamos os dados antes de enviá-los de volta ao cliente para garantir que a estrutura está correta.

```ts
// src/app/api/products/route.ts

import { z } from 'zod';
import { NextResponse } from 'next/server';

// Definindo o schema para a estrutura dos produtos
const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().positive(),
  inStock: z.boolean(),
});

// Definindo o schema para uma lista de produtos
const productsSchema = z.array(productSchema);

export async function GET() {
  const products = [
    { id: 1, name: 'Produto 1', price: 99.99, inStock: true },
    { id: 2, name: 'Produto 2', price: 149.99, inStock: false },
  ];

  try {
    // Validando a estrutura de dados antes de enviar a resposta
    const validatedProducts = productsSchema.parse(products);

    return NextResponse.json(validatedProducts);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Erro ao processar a resposta' },
      { status: 500 }
    );
  }
}
```

### Explicação

- **Schema**: O `productSchema` define a estrutura que cada produto deve seguir: `id` (número), `name` (string), `price` (número positivo), e `inStock` (booleano).
- **Validação**: Antes de enviar a lista de produtos, utilizamos `productsSchema.parse()` para garantir que cada item da lista siga o formato correto. Isso assegura que o cliente sempre receba os dados com a estrutura correta.
- **Erro**: Se os dados não estiverem no formato esperado, retornamos um erro com status 400.

---

## Conclusão

Usando **Zod** com as **API Routes** do Next.js, podemos garantir que tanto os dados recebidos quanto os dados enviados sigam a estrutura correta, assegurando que nossa API seja robusta e confiável. Isso evita problemas com dados mal formatados e melhora a comunicação entre o backend e o frontend.
