---
title: Campos opcionais e anuláveis
---

Nem todos os campos de um objeto precisam ser obrigatórios. O Zod facilita a criação de **campos opcionais** e **anuláveis**, permitindo flexibilidade no tratamento de dados incompletos ou com valores nulos.

## Exemplo 1: Campos opcionais

```ts
const optionalSchema = z.object({
  name: z.string(),
  age: z.number().optional(), // Campo opcional
});

const data = {
  name: 'Lucas',
  // 'age' é opcional
};

try {
  const result = optionalSchema.parse(data);
  console.log('Dados validados com sucesso!', result);
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, o campo `age` é opcional. Se não for fornecido, a validação ainda passará, sem erros.

## Exemplo 2: Campos anuláveis

```ts
const nullableSchema = z.object({
  name: z.string(),
  age: z.number().nullable(), // Pode ser um número ou null
});

const data = {
  name: 'Lucas',
  age: null,
};

try {
  const result = nullableSchema.parse(data);
  console.log('Dados com campo nulável validados com sucesso!', result);
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Com `nullable()`, você pode permitir que um campo seja nulo, o que pode ser útil para dados que podem estar incompletos ou vazios.
