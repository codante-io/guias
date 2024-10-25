---
title: Por que o Zod é útil?
---

O **Zod** é uma ferramenta extremamente útil para desenvolvedores que trabalham com **JavaScript** e **TypeScript**, especialmente quando se trata de **validação de dados**. Hoje, vamos explorar por que o Zod é tão valioso e como ele pode ser utilizado para garantir que os dados em sua aplicação estejam sempre no formato correto.

## Validação de dados

Em muitas aplicações, os dados vêm de fontes externas, como **APIs** ou entradas de usuário. Não podemos garantir que esses dados estejam no formato esperado. A validação é uma prática essencial para garantir que a integridade dos dados seja mantida ao longo do ciclo de vida da aplicação. Com o Zod, você pode definir **schemas** (esquemas) para esses dados e validá-los de maneira eficiente em **tempo de execução**.

## Exemplo de validação de objetos

Vamos criar um exemplo onde temos um objeto representando um usuário, e precisamos garantir que esse objeto tenha as propriedades `name`, `email` e `age`. A propriedade `name` e `email` devem ser strings, enquanto `age` deve ser um número.

### Exemplo 1: Definindo e validando o schema do usuário

```ts
import { z } from 'zod';

// Definindo o schema para um objeto 'User'
const UserSchema = z.object({
  name: z.string(), // 'name' deve ser uma string
  email: z.string().email(), // 'email' deve ser uma string válida de email
  age: z.number().min(18), // 'age' deve ser um número e a idade mínima é 18
});

// Validando um objeto de usuário
const user = {
  name: 'Lucas',
  email: 'lucas@email.com',
  age: 24,
};

try {
  UserSchema.parse(user); // Valida o objeto 'user'
  console.log('Usuário validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

### Explicação

Nesse exemplo, criamos um schema para o objeto `User`, que define as regras que `name`, `email` e `age` devem seguir. O método `parse` valida se o objeto `user` segue essas regras e lança um erro se houver qualquer inconsistência. Por exemplo, se `email` não for um e-mail válido, ou se `age` for menor que 18, a validação falhará.

## Por que usar Zod?

O Zod facilita a vida dos desenvolvedores ao fornecer uma API simples e declarativa para definir as regras de validação de dados. Ao integrá-lo no seu projeto, você ganha controle sobre a **consistência dos dados**, reduzindo significativamente a chance de erros provenientes de dados mal formados.
