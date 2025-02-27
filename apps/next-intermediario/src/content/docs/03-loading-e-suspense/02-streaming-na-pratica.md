---
title: Streaming na Prática
---

Agora que fizemos uma breve introdução sobre Streaming, está na hora de colocarmos em prática (e observarmos) o que é.

Vamos fazer uma série de exercícios mostrando como podemos fazer o loading de nossa aplicação.

### Passo 1. Deixar tudo mais lento

Ok, eu criei uma "flag" na nossa API de vagas. Se você adicionar `slow=true` como parâmetro para a rota da API, tudo vai demorar bem mais para carregar.

Primeiro passo: deixe a rota de `/vagas` mais lenta usando o _query parameter_.

#### Resolução

Para fazer isso, vamos alterar a função `fetchJobs()` para adicionar `slow=true`:

```typescript {3}
async function fetchJobs() {
  const res = await fetch(
    'https://apis.codante.io/api/job-board/jobs?slow=true',
    {
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    throw new Error('Ops, alguma coisa deu errada!');
  }

  const json = await res.json();
  const jobs: Job[] = json.data;
  return jobs;
}
```

Dê uma olhada na UX do seu código agora - péssima!!!!

### Passo 2. Criar um `loading.tsx`

Vamos ver como podemos melhorar nossa UX apenas adicionando um arquivo - o `loading.tsx`.

Dentro do arquivo loading, vamos colocar este código:

```typescript
// app/vagas/loading.tsx
export default function Loading() {
  return <div>Carregando...</div>;
}
```

Com um arquivo e 3 linhas de código, melhorou muito!

O que acontece é que o HTML do layout + fallback é enviado para o nosso navegador quase que instantaneamente. Quando os dados terminam de ser carregados no servidor, eles são adicionados e enviados ao _html_ final.

### Passo 3. Vamos deixar a rota de vaga individual lenta

Vamos fazer a mesma coisa que fizemos para a rota de vagas, agora para a vaga individual:

```typescript {4}
// vagas/[id]/page.tsx
async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}?slow=true`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}
```

Diferentemente da primeira vez, agora já temos o `loading` funcionando, então a experiência não fica tão ruim assim.

### Passo 4. Vamos adicionar comentários na vaga individual

Mas e no caso em que há múltiplos fetches de dados de diferentes fontes?
Imagine agora que nossa aplicação, ao acessar a vaga individual, não apenas faz o fetch dos dados daquela vaga, mas também dos comentários associados a ela. Temos 2 endpoints agora:

1. Fetch da vaga individual
2. Fetch de comentários

Vamos adicionar a flag `slow` em ambos.

Na API, deixamos o fetch da vaga individual com 2 segundos de delay, enquanto o fetch dos comentários tem 4 segundos de delay.

O que vai acontecer é que **toda a página** vai demorar no mínimo 4 segundos para carregar - mesmo com o conteúdo principal já tendo sido carregado em 2 segundos!

A solução para isso é trazer granularidade nos limites do `<Suspense>`. E é exatamente isso que faremos agora.

#### Código - Carregando comentários na vaga individual

Primeiro, vamos carregar os comentários na tela.

Vamos criar uma função `fetchComments()`:

```typescript ins={15-22, 24-28, 37,55-70}
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JobPostingCard from './job-posting-card';

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}?slow=true`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

async function fetchComments(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}/comments?slow=true`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

type Comment = {
  id: string;
  author: string;
  content: string;
};

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;
  const job = await fetchJob(jobId);
  const comments = await fetchComments(jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <JobPostingCard job={job} />
      <div className="mt-8">
        <h2 className="mb-6 text-2xl font-bold">Comentários</h2>
        <div className="space-y-4">
          {comments.map((comment: Comment) => (
            <div
              key={comment.id}
              className="max-w-lg rounded-lg border-l-4 border-l-blue-400 bg-gray-50 p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="mb-2 flex items-center gap-3">
                <p className="font-semibold text-gray-800">{comment.author}</p>
              </div>
              <p className="leading-relaxed text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

Tudo parece estar funcionando... mas ainda temos um problema: estamos aguardando os comentários para carregar o conteúdo principal da página!

### Passo 5. Streaming com granularidade usando `<Suspense>`

A primeira coisa que precisamos fazer é "isolar" os componentes que consomem dados. Isto é, precisamos separar os componentes que fazem fetch de dados em componentes diferentes.

Vamos criar dois componentes:

1. `JobDetails` - responsável por mostrar os detalhes da vaga
2. `Comments` - responsável por mostrar os comentários

#### Criando o componente JobDetails

Vamos criar um novo arquivo para o componente JobDetails, que será responsável por buscar e exibir os detalhes da vaga:

```typescript
// app/vagas/[id]/job-details.tsx
import { notFound } from 'next/navigation';
import JobPostingCard from './job-posting-card';

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}?slow=true`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

export default async function JobDetails({ jobId }: { jobId: string }) {
  const job = await fetchJob(jobId);

  if (!job) {
    notFound();
  }

  return <JobPostingCard job={job} />;
}
```

#### Criando o componente Comments

Agora, vamos criar um novo arquivo para o componente Comments:

```typescript
// app/vagas/[id]/comments.tsx
type Comment = {
  id: string;
  author: string;
  content: string;
};

async function fetchComments(jobId: string) {
  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}/comments?slow=true`
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

export default async function Comments({ jobId }: { jobId: string }) {
  const comments = await fetchComments(jobId);

  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">Comentários</h2>
      <div className="space-y-4">
        {comments.map((comment: Comment) => (
          <div
            key={comment.id}
            className="max-w-lg rounded-lg border-l-4 border-l-blue-400 bg-gray-50 p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
            <div className="mb-2 flex items-center gap-3">
              <p className="font-semibold text-gray-800">{comment.author}</p>
            </div>
            <p className="leading-relaxed text-gray-600">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### Atualizando o page.tsx

Agora vamos atualizar nossa página principal para usar o Suspense:

```typescript
// app/vagas/[id]/page.tsx
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import JobDetails from './job-details';
import Comments from './comments';

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <Suspense fallback={<div>Carregando detalhes da vaga...</div>}>
        <JobDetails jobId={jobId} />
      </Suspense>
      <Suspense fallback={<div>Carregando comentários...</div>}>
        <Comments jobId={jobId} />
      </Suspense>
    </div>
  );
}
```

Com essa estrutura, conseguimos:

1. Separar a lógica de busca de dados em componentes específicos
2. Usar Suspense para mostrar fallbacks enquanto os dados carregam
3. Carregar os detalhes da vaga e os comentários de forma independente
4. Melhorar a experiência do usuário mostrando o conteúdo assim que estiver disponível

Agora, quando você acessar a página de uma vaga individual:

- Os detalhes da vaga carregam em 2 segundos, mostrando um fallback enquanto carrega
- Os comentários levam 4 segundos para carregar, mas isso não bloqueia a exibição dos detalhes da vaga
- Cada componente tem seu próprio estado de loading, tornando a experiência mais granular e agradável

### Próximos passos

Nos próximos exercícios, vamos melhorar ainda mais nossa UX criando skeletons mais elaborados e explorando outras técnicas de loading.
