---
title: Tipos primitivos
---

O Zod oferece suporte a validações simples e diretas de **tipos primitivos**, como strings, números, booleanos e mais. Esses tipos são a base para muitas validações em aplicações reais.

### Exemplo 1: Validando strings

```ts
import { z } from 'zod';

const stringSchema = z.string(); // Deve ser uma string

try {
  stringSchema.parse('Olá, Zod!'); // Válido
  console.log('String validada com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Neste exemplo, garantimos que o valor seja uma string. Se outro tipo for passado, o Zod lançará um erro de validação.

### Exemplo 2: Validando números

```ts
const numberSchema = z.number(); // Deve ser um número

try {
  numberSchema.parse(42); // Válido
  console.log('Número validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, o número é validado para garantir que o valor seja do tipo `number`. O Zod também oferece métodos adicionais para números, como limites mínimo e máximo.

---
