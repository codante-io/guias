---
title: Validação simples de campos obrigatórios
---

Agora que entendemos o conceito de schemas, vamos ver como o Zod facilita a validação de **campos obrigatórios** em seus dados.

Em muitas aplicações, certos campos precisam ser preenchidos obrigatoriamente, como o nome de um usuário ou a idade. O Zod permite definir essas regras de forma simples.

## Exemplo 1: Validando campos obrigatórios

```ts
const UserSchema = z.object({
  name: z.string(), // Campo obrigatório
  age: z.number(), // Campo obrigatório
});

const userData = {
  name: 'Lucas',
  age: 24,
};

try {
  UserSchema.parse(userData);
  console.log('Usuário validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Nesse exemplo, `name` e `age` são obrigatórios. Se tentarmos validar um objeto que omite qualquer um desses campos, o Zod lançará um erro, garantindo que esses dados estejam presentes.

## Exemplo 2: Lidando com erros de validação

Se os dados não atenderem às exigências do schema, o Zod retorna um erro detalhado. Vamos ver como capturar esses erros:

```ts
const invalidUserData = {
  name: 'Lucas',
  // 'age' está faltando
};

try {
  UserSchema.parse(invalidUserData);
} catch (err) {
  console.error('Erro de validação:', err.errors); // Exibe detalhes dos campos inválidos
}
```

Quando o campo `age` estiver ausente, o Zod retornará uma mensagem de erro explicando qual campo não está presente e qual era o tipo esperado.

## Conclusão

Com o Zod, você pode garantir que campos obrigatórios sejam sempre validados de forma eficaz. Se os dados não estiverem no formato correto, o Zod retorna mensagens de erro detalhadas, permitindo que você capture e trate esses erros facilmente em sua aplicação.
