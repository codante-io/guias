---
title: Entendendo nossos schemas
---

No Zod, **schemas** são utilizados para definir a estrutura e regras de validação dos dados que sua aplicação manipula. Um schema pode descrever qualquer tipo de dado, desde valores primitivos (como strings e números) até objetos e arrays complexos.

## O que é um Schema?

Um **schema** é como um contrato. Ele define o tipo de dado que você espera e as regras que esse dado deve cumprir. Por exemplo, se você tem um formulário de cadastro de usuário, pode criar um schema para validar que os campos `name` e `age` são do tipo correto.

### Exemplo 1: Criando um schema básico

```ts
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
});
```

Aqui, criamos um schema chamado `UserSchema` que espera um objeto contendo `name` (uma string) e `age` (um número). Quando aplicamos esse schema em um dado, o Zod garante que o dado siga essas regras.
