---
title: Usando z.infer para inferir tipos TypeScript a partir de esquemas Zod
---

Além de fornecer validação de dados em tempo de execução, o Zod também pode ser usado para **inferir tipos TypeScript** diretamente a partir de schemas Zod. Isso ajuda a manter uma única fonte de verdade para a validação e a tipagem, eliminando a necessidade de duplicar definições de tipos.

O método `z.infer` permite derivar automaticamente um tipo TypeScript a partir de um schema Zod. Isso é especialmente útil para evitar a necessidade de definir manualmente os tipos TypeScript separados dos schemas de validação.

### Exemplo 2: Inferindo tipos a partir de um schema Zod

```ts
import { z } from 'zod';

// Definindo o schema
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

// Inferindo o tipo TypeScript a partir do schema
type User = z.infer<typeof userSchema>;

const userData: User = {
  name: 'John Doe',
  age: 30,
};

console.log(userData);
```

### Explicação

- **Schema e tipo**: Aqui, o `userSchema` define a estrutura do dado, e o `z.infer<typeof userSchema>` cria automaticamente um tipo TypeScript chamado `User`, que reflete essa estrutura.
- **Manutenção simplificada**: Ao usar `z.infer`, você garante que o tipo TypeScript será sempre consistente com o schema de validação do Zod. Se o schema for alterado, o tipo será atualizado automaticamente.

### Exemplo 3: Uso de inferência em uma função

```ts
function createUser(user: z.infer<typeof userSchema>) {
  console.log('Usuário criado:', user);
}

createUser({ name: 'Alice', age: 25 }); // Valido
```

Aqui, usamos o tipo inferido diretamente como o tipo do argumento da função, garantindo que os dados passados para `createUser` sempre sigam a estrutura definida no schema.

---

## Conclusão

O Zod é uma ferramenta poderosa que complementa o TypeScript fornecendo **validação em tempo de execução** para garantir a integridade dos dados em cenários onde o TypeScript não pode atuar. Além disso, com `z.infer`, é possível unificar a definição de tipos e validação, evitando inconsistências e facilitando a manutenção do código. Isso ajuda a criar aplicações mais seguras e robustas.
