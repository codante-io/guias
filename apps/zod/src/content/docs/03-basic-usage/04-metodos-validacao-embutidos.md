---
title: Métodos de validação embutidos
---

Além de validar tipos básicos, o Zod oferece uma série de **métodos de validação embutidos** que permitem aplicar regras adicionais, como restrições de tamanho ou formatos específicos.

## Exemplo 1: Validação de strings com tamanho mínimo e máximo

```ts
const constrainedStringSchema = z.string().min(5).max(10); // Tamanho mínimo de 5 e máximo de 10 caracteres

try {
  constrainedStringSchema.parse('Zodinho'); // Válido
  console.log('String validada com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, definimos que a string deve ter entre 5 e 10 caracteres. Se passar um valor fora desse intervalo, a validação falhará.

## Exemplo 2: Validando números com limites

```ts
const constrainedNumberSchema = z.number().min(18).max(60); // Número entre 18 e 60

try {
  constrainedNumberSchema.parse(25); // Válido
  console.log('Número validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Nesse exemplo, o número deve estar entre 18 e 60. O Zod oferece métodos como `min()` e `max()` para facilitar essas restrições.

## Exemplo 3: Validação de e-mails

O Zod oferece métodos para validação de padrões comuns, como endereços de e-mail:

```ts
const emailSchema = z.string().email(); // Validação específica para e-mails

try {
  emailSchema.parse('lucas@email.com'); // E-mail válido
  console.log('E-mail validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors);
}
```

Aqui, garantimos que a string seja um e-mail válido, usando o método `.email()`.

---

## Conclusão

O Zod oferece uma abordagem poderosa e flexível para validar tipos básicos, campos opcionais e anuláveis, além de métodos de validação embutidos que tornam a verificação de dados robusta e eficaz. Esses recursos permitem que você construa aplicações mais seguras e confiáveis, garantindo a integridade dos dados.

---
