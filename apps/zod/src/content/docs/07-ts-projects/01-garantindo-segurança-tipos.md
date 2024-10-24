---
title: Garantindo segurança em tempo de execução quando tipos TypeScript não podem ser usados
---

O **TypeScript** é uma excelente ferramenta para garantir segurança de tipos em tempo de desenvolvimento, mas esses tipos são removidos durante a compilação para JavaScript. Isso significa que, em **tempo de execução**, o TypeScript não oferece nenhuma garantia sobre a estrutura dos dados. É aqui que o **Zod** entra em cena, fornecendo validação em tempo real para garantir que os dados estão corretos enquanto sua aplicação está sendo executada.

O Zod oferece uma maneira de garantir a integridade dos dados em situações onde a tipagem estática do TypeScript não pode atuar, como no caso de dados vindos de APIs, formulários ou outras fontes externas. Usando o Zod, você valida os dados em tempo de execução e garante que eles seguem os tipos e formatos esperados.

### Exemplo 1: Validando dados de uma API externa

Vamos supor que estamos buscando dados de uma API externa. O TypeScript sozinho não pode garantir que os dados recebidos estão no formato correto.

```ts
import { z } from 'zod';

const externalDataSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

async function fetchExternalData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  try {
    // Validando os dados recebidos da API em tempo de execução
    const validatedData = externalDataSchema.parse(data);
    console.log('Dados validados:', validatedData);
  } catch (err) {
    console.error('Erro de validação:', err.errors);
  }
}

fetchExternalData();
```

### Explicação

- **Validação em tempo de execução**: Mesmo que o TypeScript tipifique `data` como um objeto, só o Zod pode garantir que os dados realmente correspondem à estrutura esperada no momento em que são recebidos. Se a API enviar dados inesperados, a validação falha e podemos lidar com isso imediatamente.
- **Segurança**: Esse nível de verificação adiciona uma camada de segurança contra dados malformados que podem causar erros no sistema, garantindo a integridade dos dados processados pela aplicação.

---
