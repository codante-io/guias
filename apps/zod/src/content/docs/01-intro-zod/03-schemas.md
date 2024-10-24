---
title: O que são schemas?
---

Um **schema** é basicamente uma definição da estrutura e das regras de um dado. Ele diz respeito ao tipo e às características que esse dado deve ter. Por exemplo, podemos definir que o dado de um usuário precisa conter um nome (string) e uma idade (número).

Os schemas são muito úteis para garantir que nossos dados estejam no formato correto, especialmente quando estamos recebendo informações de fontes externas, como APIs ou formulários de usuário.

Em Zod, um schema não só define a estrutura de dados, mas também faz a validação deles de maneira simples e eficiente.

## Criando Schemas com Zod

Agora que entendemos o conceito de schema, vamos ver como o Zod nos permite criar e validar esses schemas de forma prática.

Vamos começar com um exemplo básico: validar os dados de um usuário.

### Exemplo 1: Definindo um schema para um usuário

```ts
import { z } from 'zod';

// Definindo o schema para um objeto 'User'
const UserSchema = z.object({
  name: z.string(), // 'name' deve ser uma string
  age: z.number().min(18), // 'age' deve ser um número e a idade mínima é 18
});

// Validando um objeto válido
const user = {
  name: 'Lucas',
  age: 24,
};

try {
  UserSchema.parse(user); // Valida o objeto 'user'
  console.log('Validação bem-sucedida!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

### Explicação

Aqui, criamos um schema chamado `UserSchema` com duas propriedades: `name`, que deve ser uma string, e `age`, que deve ser um número maior ou igual a 18. Usamos o método `parse` para validar o dado. Se o dado não cumprir as regras definidas no schema, um erro será lançado.

### Exemplo 2: Validando arrays

Agora, vamos adicionar uma lista de hobbies para o usuário, onde cada hobby deve ser uma string.

```ts
const UserWithHobbiesSchema = z.object({
  name: z.string(),
  age: z.number().min(18),
  hobbies: z.array(z.string()), // 'hobbies' deve ser um array de strings
});

// Validando um objeto com hobbies
const userWithHobbies = {
  name: 'Lucas',
  age: 24,
  hobbies: ['programar', 'cozinhar', 'ler'],
};

try {
  UserWithHobbiesSchema.parse(userWithHobbies);
  console.log('Validação com hobbies bem-sucedida!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Agora, além do nome e da idade, também validamos uma lista de hobbies, garantindo que seja um array de strings. Se qualquer hobby for de um tipo diferente, como um número, o Zod lançará um erro.

### Exemplo 3: Valores opcionais e padrões

Às vezes, alguns campos são opcionais ou têm valores padrão. Vamos ver como Zod trata isso:

```ts
const UserWithOptionalSchema = z.object({
  name: z.string(),
  age: z.number().min(18).default(30), // Idade terá valor padrão de 30 se não for fornecida
  bio: z.string().optional(), // 'bio' é um campo opcional
});

// Validando um objeto sem idade e bio
const userWithoutAgeAndBio = {
  name: 'Lucas',
};

try {
  const validatedUser = UserWithOptionalSchema.parse(userWithoutAgeAndBio);
  console.log('Usuário validado com valor padrão de idade:', validatedUser);
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, a `age` tem um valor padrão de 30, e `bio` é opcional. Se não fornecer esses campos no dado, o Zod irá preencher automaticamente o valor da `age` com 30, e a `bio` simplesmente será ignorada.

## Por que Zod?

Zod é uma ferramenta poderosa para garantir que os dados que entram no seu sistema tenham o formato correto, ajudando a evitar erros que poderiam ocorrer no uso dos dados. Ele é fácil de integrar com TypeScript e oferece uma API intuitiva e declarativa.

---

### Recapitulando

- **Schemas** definem a estrutura e as regras para os dados.
- Usamos o **Zod** para criar e validar esses schemas de maneira fácil e eficiente.
- O método `.parse()` faz a validação e lança um erro se o dado não cumprir o schema.
- Podemos validar objetos, arrays, e até definir valores opcionais ou padrões.

Espero que tenham entendido bem o conceito de schemas e como utilizá-los com Zod. Agora, vamos seguir com mais exemplos e explorar como o Zod pode se integrar com bibliotecas de formulários como **React Hook Forms**!
