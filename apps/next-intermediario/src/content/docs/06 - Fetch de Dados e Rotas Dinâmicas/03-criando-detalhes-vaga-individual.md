---
title: Criando detalhes da vaga individual
---

Ótimo, até agora criamos a listagem de vagas. Mas como fazer para criarmos páginas individuais para cada uma das vagas?

Para isso, vamos criar uma rota dinâmica. Uma rota dinâmica é uma rota "*catch-all*", ou seja, pega tudo.

Crie uma pasta dentro da pasta vagas chamado `[id]`. Dentro desta pasta, crie um arquivo `page.tsx`. E retorne um "hello world" por enquanto.

Veja que a partir de agora, quando acessamos a rota `/vagas/qualquer-coisa`, não temos mais um erro 404, mas sim renderizamos nosso *hello world*.

E mais, conseguimos pegar o segmento de rota passado com o nome que foi dado à pasta. No nosso caso como a pasta se chama `[id]`, nosso segmento chegará dentro de `params.id` como *prop* na nossa página

Com esse dado, podemos fazer um fetch subsequente para (i.) saber se esse recurso existe - e eventualmente lançar um erro; (ii.) pegar os dados da vaga.

## Fazendo o fetch da vaga individual

Agora, vamos criar uma função que faz o fetch de uma vaga individual usando o endpoint `/vagas/{id}`.

Se não houver vaga com aquele endpoint, então iremos retornar lançar a função do next chamada `notFound()`.

Vamos mostrar as infos do job na tela com `JSON.stringify()`. O código vai ficar, por enquanto assim:

```typescript
// app/vagas/[id]/page.tsx

import { notFound } from "next/navigation";

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`,
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

export default async function JobItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;
  const job = await fetchJob(jobId);

  if (!job) {
    notFound();
  }

  return (
    <div>
      <pre>{JSON.stringify(job, null, 2)}</pre>
    </div>
  );
}
```
