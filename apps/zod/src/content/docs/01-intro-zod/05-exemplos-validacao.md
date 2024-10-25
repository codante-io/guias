---
title: Exemplos básicos de validação
---

Agora que entendemos os tipos suportados pelo Zod, vamos explorar alguns exemplos básicos de como utilizar a biblioteca para validar dados. O Zod permite realizar validações de maneira muito simples e clara. Vamos ver como isso funciona na prática com alguns exemplos de validação.

## Validação de Strings

O Zod facilita a validação de strings, seja para verificar se o valor realmente é uma string ou se cumpre critérios específicos, como ser um e-mail válido.

### Exemplo 1: Validando uma string simples

```ts
import { z } from 'zod';

const stringSchema = z.string(); // Definindo que o dado deve ser uma string

try {
  stringSchema.parse('Olá, mundo!'); // Dado válido
  console.log('Validação bem-sucedida!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Neste exemplo, validamos se o dado passado é uma string. Se tentarmos passar um número ou qualquer outro tipo, o Zod lançará um erro de validação.

### Exemplo 2: Validando um e-mail

```ts
const emailSchema = z.string().email(); // Validação específica para e-mail

try {
  emailSchema.parse('john@email.com'); // E-mail válido
  console.log('E-mail validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

O Zod permite validar se uma string é um e-mail válido com a função `email()`. Se o formato do e-mail estiver incorreto, a validação falhará.

## Validação de Números

Você também pode validar números e aplicar restrições, como verificar se um número é maior que um determinado valor.

### Exemplo 3: Validando um número com restrição de valor mínimo

```ts
const numberSchema = z.number().min(18); // Número deve ser maior ou igual a 18

try {
  numberSchema.parse(42); // Número válido
  console.log('Número validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui estamos validando que o número seja no mínimo 18. Se passarmos um número menor, o Zod retornará um erro de validação.

## Validação de Booleanos

Vamos ver como validar valores booleanos (true ou false).

### Exemplo 4: Validando um booleano

```ts
const booleanSchema = z.boolean(); // Definindo que o dado deve ser um booleano

try {
  booleanSchema.parse(true); // Dado válido
  console.log('Booleano validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Esse exemplo mostra a validação de um booleano. Qualquer valor que não seja `true` ou `false` falhará na validação.

## Validação de Arrays

O Zod também facilita a validação de arrays, garantindo que todos os elementos sigam um formato específico.

### Exemplo 5: Validando um array de números

```ts
const numberArraySchema = z.array(z.number()); // Array deve conter apenas números

const data = [1, 2, 3, 4, 5];

try {
  numberArraySchema.parse(data); // Array válido
  console.log('Array validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui estamos validando que o array contenha apenas números. Se qualquer elemento do array for de um tipo diferente, a validação falhará.

## Validação de Objetos

Validação de objetos é um dos recursos mais utilizados no Zod, pois permite definir estruturas complexas de dados.

### Exemplo 6: Validando um objeto simples

```ts
const objectSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const userData = {
  name: 'John',
  age: 42,
};

try {
  objectSchema.parse(userData); // Objeto válido
  console.log('Objeto validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Neste exemplo, validamos um objeto `user` que contém duas propriedades: `name` como string e `age` como número.

## Conclusão

Esses exemplos mostram como o Zod facilita a validação de dados básicos como strings, números, booleanos, arrays e objetos. A flexibilidade e simplicidade do Zod tornam sua aplicação em validação de dados bastante eficiente, além de melhorar a qualidade e segurança dos dados nas aplicações.
