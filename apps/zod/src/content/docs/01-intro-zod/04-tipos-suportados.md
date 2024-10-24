---
title: Quais são os tipos suportados?
---

O **Zod** oferece suporte a uma ampla gama de tipos que podem ser usados para definir os schemas. Isso garante que você possa validar diferentes estruturas de dados de forma precisa, independentemente da complexidade ou formato dos dados. Vamos explorar os tipos mais comuns suportados pelo Zod.

## Tipos Primitivos

Os tipos primitivos são aqueles que usamos com frequência em JavaScript e TypeScript. O Zod oferece suporte total a eles, permitindo validar strings, números, booleans, e mais.

### Exemplo 1: Tipos Primitivos

```ts
import { z } from 'zod';

const primitiveSchema = z.object({
  name: z.string(), // string
  age: z.number(), // number
  isAdmin: z.boolean(), // boolean
});

const data = {
  name: 'Lucas',
  age: 24,
  isAdmin: true,
};

try {
  primitiveSchema.parse(data);
  console.log('Dados validados com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Nesse exemplo, validamos um objeto que contém uma string (`name`), um número (`age`), e um booleano (`isAdmin`). Se qualquer um desses tipos estiver incorreto, o Zod irá lançar um erro de validação.

## Arrays

Zod também permite a validação de arrays. Você pode definir o tipo de dado que o array deve conter, garantindo que todos os itens dentro do array estejam no formato correto.

### Exemplo 2: Arrays

```ts
const arraySchema = z.array(z.string()); // Array de strings

const data = ['futebol', 'programar', 'cozinhar'];

try {
  arraySchema.parse(data);
  console.log('Array validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Neste caso, garantimos que o array `data` contenha apenas strings. Se um dos itens do array fosse de outro tipo, como um número, a validação falharia.

## Objetos

O Zod também suporta objetos, permitindo que você valide não só tipos primitivos e arrays, mas também estruturas mais complexas com propriedades aninhadas.

### Exemplo 3: Objetos

```ts
const complexObjectSchema = z.object({
  user: z.object({
    name: z.string(),
    age: z.number(),
  }),
  permissions: z.array(z.string()),
});

const data = {
  user: {
    name: 'Lucas',
    age: 24,
  },
  permissions: ['read', 'write'],
};

try {
  complexObjectSchema.parse(data);
  console.log('Objeto complexo validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui estamos validando um objeto que contém outro objeto dentro (`user`), além de um array de permissões. Essa estrutura aninhada é muito comum em aplicações modernas, e o Zod lida com isso de maneira eficiente.

## Valores Opcionais e Valores Padrão

Com o Zod, você também pode definir campos opcionais ou atribuir valores padrões para propriedades que podem estar ausentes.

### Exemplo 4: Valores Opcionais e Padrões

```ts
const optionalSchema = z.object({
  name: z.string(),
  age: z.number().optional(), // Campo opcional
  role: z.string().default('user'), // Valor padrão
});

const data = {
  name: 'Lucas',
};

try {
  const result = optionalSchema.parse(data);
  console.log('Dados validados com sucesso!', result);
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Nesse exemplo, a `age` é opcional, e o campo `role` terá o valor padrão `"user"` se não for fornecido. Isso torna a validação mais flexível, acomodando casos em que algumas informações podem não estar disponíveis.

## Outros Tipos Suportados

Além dos tipos primitivos, arrays e objetos, o Zod também suporta outros tipos como:

- **Enums**: Para validar valores que devem ser um de um conjunto limitado de opções.
- **Tuples**: Para validar arrays com um número fixo de elementos, onde cada elemento pode ter um tipo diferente.
- **Unions**: Para validar que um valor corresponde a pelo menos um de vários tipos.
- **Date**: Para validação de datas.
- **Custom Types**: É possível definir validações personalizadas utilizando `z.custom()`.

### Exemplo 5: Unions e Enums

```ts
const roleSchema = z.union([z.literal('admin'), z.literal('user')]); // União de valores permitidos
const enumSchema = z.enum(['red', 'green', 'blue']); // Enum com três opções

try {
  roleSchema.parse('admin');
  enumSchema.parse('green');
  console.log('Validação de union e enum realizada com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Neste exemplo, validamos que o valor do `role` deve ser `"admin"` ou `"user"` usando `z.union()`, e validamos a cor usando um `z.enum()`.

## Conclusão

O Zod suporta uma grande variedade de tipos que cobrem praticamente qualquer estrutura de dado que você precisará validar em suas aplicações. Desde tipos primitivos e arrays, até objetos complexos e enums, você pode garantir que seus dados estejam sempre no formato correto, aumentando a robustez e segurança da sua aplicação.
