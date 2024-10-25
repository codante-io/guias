---
title: Usando o Zod para validar entradas de formulários
---

A validação de entradas de formulário é uma parte crucial no desenvolvimento de aplicações. O **Zod** se integra facilmente com formulários para garantir que os dados recebidos estejam no formato correto antes de serem processados ou enviados para o servidor. Vamos ver como o Zod pode ser usado para validar formulários de forma eficaz.

## Validando Formulários com Zod

Em um cenário básico, você pode usar o Zod para validar diretamente os dados de um formulário após o envio. Veja um exemplo simples de validação de formulário.

### Exemplo 1: Validando um formulário de login

```ts
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Por favor, insira um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

const formData = {
  email: 'user@example.com',
  password: '123456',
};

try {
  loginSchema.parse(formData); // Validação dos dados do formulário
  console.log('Formulário validado com sucesso!');
} catch (err) {
  console.error('Erro de validação:', err.errors); // Captura e exibe os erros de validação
}
```

Nesse exemplo, usamos o Zod para garantir que o e-mail seja válido e que a senha tenha pelo menos 6 caracteres. Se qualquer uma dessas validações falhar, o Zod retorna mensagens de erro específicas.

## Tratando Mensagens de Erro

Você pode capturar os erros de validação e exibir mensagens de erro personalizadas para o usuário, melhorando a experiência no preenchimento do formulário.

---
