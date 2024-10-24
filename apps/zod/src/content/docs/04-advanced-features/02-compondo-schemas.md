---
title: Compondo esquemas com .merge e .extend
---

O Zod permite que você componha e modifique schemas facilmente usando os métodos `.merge()` e `.extend()`. Esses métodos são úteis para quando você precisa reutilizar ou expandir a estrutura de um schema.

## .merge

O método `.merge()` permite combinar dois schemas de objetos. Isso é útil quando você tem dois objetos distintos e deseja unificá-los em um só.

### Exemplo 1: Combinando esquemas com .merge

```ts
const baseSchema = z.object({
  name: z.string(),
});

const extraSchema = z.object({
  age: z.number(),
});

const mergedSchema = baseSchema.merge(extraSchema);

try {
  mergedSchema.parse({ name: 'John', age: 30 }); // Válido
  console.log('Schema combinado validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, os schemas `baseSchema` e `extraSchema` são combinados em um só, permitindo a validação de um objeto que contenha ambos `name` e `age`.

## .extend

O método `.extend()` permite adicionar novas propriedades a um schema existente.

### Exemplo 2: Expandindo um schema com .extend

```ts
const originalSchema = z.object({
  name: z.string(),
});

const extendedSchema = originalSchema.extend({
  age: z.number(),
});

try {
  extendedSchema.parse({ name: 'John', age: 25 }); // Válido
  console.log('Schema expandido validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, o `originalSchema` é expandido para incluir a propriedade `age`, criando um schema mais completo.
