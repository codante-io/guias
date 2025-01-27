---
title: Action - apagando uma vaga
---

Ao invés de definirmos a função de forma *inline*, vamos colocá-la em um arquivo à parte.

Como não teremos muitas *server actions*, podemos criar um arquivo `actions.ts` dentro da pasta `lib`.

Vamos definir a action `deleteJob()`.

Note que as *server actions* sempre recebem um `FormData` automaticamente como argumento. De forma que podemos pegar qualquer dado usando o FormData. Se você ainda não está familiarizado com o objeto FormData, [dê uma olhada aqui](https://developer.mozilla.org/pt-BR/docs/Web/API/FormData/FormData).

Para recuperar um dado de um `FormData`, podemos usar a função `FormData.get()`.

:::tip
FormData é uma API Web, e não é uma funcionalidade específica ao Next.js
:::

```typescript
"use server";

export async function deleteJob(formData: FormData) {
  const jobId = formData.get("id");

  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete job");
  }
}
```

## Usando a Action

Vamos usar nossa Server Action em nosso componente. Como agora o Next.js preza por usar mais as funcionalidades nativas da web, vamos usar um formulário web nativo. Logo, o botão deverá ser envolto por um `<form>`. Como boa prática, vamos usar o componente `<Form>` do próprio Next.js.

E para passarmos a variável que desejamos (que é o `id` da vaga), vamos usar um `input:hidden` para a tarefa.

```typescript
// ...
import Form from "next/form";

// ...
<Form action={deleteJob}>
  <input type="hidden" name="id" value={job.id} />
  <Button variant="destructive">Apagar Vaga</Button>
</Form>

```

Ótimo, a vaga deverá ser apagada e seremos redirecionados para a página `/vagas`.
