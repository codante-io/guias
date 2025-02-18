---
title: Fetch de listagem de vagas
---


Nesta seção, vamos modificar a página de vagas para buscar dados da API e exibir as vagas dinamicamente. Atualmente, a página `app/vagas/page.tsx` está exibindo um componente `<JobItem />` estático várias vezes. O objetivo é transformar isso para que os dados sejam carregados da API e exibidos corretamente.

## Deixando o `JobItem` dinâmico

O primeiro passo é modificar o componente `<JobItem />` para que ele possa receber os dados da vaga como propriedades. Assim, ele poderá ser reutilizado para exibir diferentes vagas.

```typescript title="app/components/cards/job-item.tsx"
import { Button } from "../ui/button";

type Job = {
  id: number;
  title: string;
  company: string;
  city: string;
  salary: number;
};

type JobItemProps = {
  job: Job;
};

export default function JobItem({ job }: JobItemProps) {
  return (
    <article className="flex w-full items-center justify-between border border-t-4 border-black bg-white px-6 py-4 shadow transition-colors hover:border-blue-400">
      <h3 className="font-display text-lg font-medium text-gray-700">
        {job.title}
      </h3>
      <h4 className="font-light text-gray-500">{job.company}</h4>
      <h4 className="font-light text-gray-500">{job.city}</h4>
      <h4 className="font-light text-gray-500">R$ {job.salary.toFixed(2)}</h4>
      <Button className="cursor-pointer" variant={"outline"}>
        Mais
      </Button>
    </article>
  );
}

```

## Fetch de dados na página de vagas

Agora, vamos modificar a página `app/vagas/page.tsx` para buscar os dados da API e renderizar os componentes JobItem dinamicamente.

```typescript
// app/vagas/page.tsx
import JobItem from "@/components/cards/job-item";

async function fetchJobs() {
  const res = await fetch("https://apis.codante.io/api/job-board/jobs");

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

export default async function Vagas() {
  const jobsData = await fetchJobs();
  const jobs = jobsData.data;

  return (
    <main className="">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {jobs.map((job: any) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
```

A função `fetchJobs` é criada para fazer a requisição GET para a API de vagas.

Usamos async/await para buscar os dados de forma assíncrona.

Dentro do componente Vagas, chamamos `fetchJobs` para obter os dados das vagas. A função map itera sobre o array de vagas, renderizando um componente JobItem para cada vaga.
