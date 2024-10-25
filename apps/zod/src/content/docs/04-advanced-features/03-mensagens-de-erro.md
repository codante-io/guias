---
title: Manipulação de mensagens de erro e erros de parsing
---

O Zod permite uma manipulação refinada das **mensagens de erro**, tornando mais fácil personalizar as respostas de erro para o usuário final. Você pode ajustar mensagens padrão ou fornecer mensagens personalizadas para casos específicos.

## Mensagens de Erro Personalizadas

Para adicionar uma mensagem personalizada a um campo, você pode usar o método `.refine()` ou diretamente ao definir as regras do schema.

### Exemplo 1: Personalizando mensagens de erro

```ts
const ageSchema = z
  .number()
  .min(18, { message: 'A idade mínima permitida é 18 anos.' });

try {
  ageSchema.parse(16); // Inválido
} catch (err) {
  console.error('Erro de validação:', err.errors); // Exibe a mensagem personalizada
}
```

Nesse exemplo, a validação falha e a mensagem de erro personalizada é exibida ao invés da mensagem padrão.

## Capturando e Tratando Erros de Parsing

Quando o Zod falha na validação, ele lança uma exceção com detalhes sobre o erro. Você pode capturar esses erros e tratá-los como achar necessário.

### Exemplo 2: Capturando erros de parsing

```ts
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const invalidData = { name: 'John', age: 'não é um número' }; // Dado inválido

try {
  userSchema.parse(invalidData);
} catch (err) {
  if (err instanceof z.ZodError) {
    console.error('Erros de validação:', err.errors);
  }
}
```

Aqui, capturamos os erros lançados pelo Zod e acessamos o array `err.errors` para obter detalhes específicos de onde e por que a validação falhou.

## Conclusão

O Zod facilita não só a validação de dados, mas também o controle detalhado de **mensagens de erro** e **tratamento de erros** de parsing, proporcionando uma experiência mais amigável e eficaz para o desenvolvedor e o usuário final.
