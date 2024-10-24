---
title: Arrays, enums e uniões
---

O Zod oferece suporte a **arrays**, **enums** e **uniões**, permitindo uma validação ainda mais poderosa para dados que podem ter múltiplos valores ou estruturas variadas.

## Arrays

Com o Zod, você pode garantir que um array contenha apenas elementos de um tipo específico, como strings ou números.

### Exemplo 1: Validando um array de strings

```ts
import { z } from 'zod';

const stringArraySchema = z.array(z.string()); // Definindo um array de strings

try {
  stringArraySchema.parse(['apple', 'banana', 'cherry']); // Válido
  console.log('Array validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, garantimos que o array contenha apenas strings. Se qualquer elemento do array não for uma string, a validação falhará.

## Enums

Enums são úteis para definir um conjunto limitado de valores permitidos. O Zod facilita a criação e validação de enums.

### Exemplo 2: Validando com enums

```ts
const fruitEnum = z.enum(['apple', 'banana', 'cherry']);

try {
  fruitEnum.parse('apple'); // Válido
  console.log('Enum validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Com enums, garantimos que o valor seja um dos definidos no conjunto permitido.

## Uniões

Uniões permitem que você valide que um dado seja de um **tipo ou outro**. Isso é útil para cenários onde o dado pode ter diferentes formatos válidos.

### Exemplo 3: Validando uniões

```ts
const unionSchema = z.union([z.string(), z.number()]); // Pode ser uma string ou um número

try {
  unionSchema.parse(42); // Válido
  console.log('União validada com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, o dado pode ser tanto uma string quanto um número, tornando a validação mais flexível.
