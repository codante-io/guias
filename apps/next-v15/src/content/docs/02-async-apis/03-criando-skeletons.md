---
title: Criando Skeletons
---

No exercício anterior, utilizamos fallbacks simples com mensagens de `Carregando...`. Agora, vamos melhorar a experiência do usuário implementando `skeletons` - representações visuais do conteúdo enquanto ele carrega.

### O que são Skeletons?

Skeletons são versões simplificadas da UI que servem como placeholders enquanto o conteúdo real está carregando. Eles ajudam a:

- Reduzir a percepção de tempo de carregamento
- Prevenir _layout shifts_
- Dar uma ideia do conteúdo que está por vir
- Manter a consistência visual da aplicação

### Instalando o react-loading-skeleton

Vamos usar a biblioteca `react-loading-skeleton` para criar nossos skeletons. Primeiro, instale-a:

```bash
npm install react-loading-skeleton
```

Adicione os estilos necessários importando-os no seu arquivo _root layout_:

```typescript
// app/layout.tsx
import 'react-loading-skeleton/dist/skeleton.css';
```

### Criando Skeletons para JobDetails

Primeiro, vamos criar um skeleton para os detalhes da vaga. Crie um novo componente:

```typescript
// app/vagas/[id]/job-details-skeleton.tsx
import Skeleton from 'react-loading-skeleton';

export default function JobDetailsSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mb-4">
        <Skeleton height={32} width={200} />
      </div>
      <div className="mb-6">
        <Skeleton height={20} width={150} />
      </div>
      <div className="mb-6">
        <Skeleton count={3} />
      </div>
      <div className="flex gap-2">
        <Skeleton height={30} width={100} />
        <Skeleton height={30} width={100} />
      </div>
    </div>
  );
}
```

### Criando Skeletons para Comments

Agora, vamos criar um skeleton para a seção de comentários:

```typescript
// app/vagas/[id]/comments-skeleton.tsx
import Skeleton from 'react-loading-skeleton';

export default function CommentsSkeleton() {
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">Comentários</h2>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="max-w-lg">
            <Skeleton height={80} className="mb-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Atualizando a página principal

Agora vamos atualizar nossa página principal para usar esses skeletons:

```typescript
// app/vagas/[id]/page.tsx
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import JobDetails from './job-details';
import Comments from './comments';
import JobDetailsSkeleton from './job-details-skeleton';
import CommentsSkeleton from './comments-skeleton';

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
      <Suspense fallback={<JobDetailsSkeleton />}>
        <JobDetails jobId={jobId} />
      </Suspense>
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments jobId={jobId} />
      </Suspense>
    </div>
  );
}
```

### Criando Skeleton para a lista de vagas

Não podemos esquecer da página principal que lista todas as vagas. Vamos criar um skeleton para ela também:

```typescript
// app/vagas/jobs-list-skeleton.tsx
import Skeleton from 'react-loading-skeleton';

export default function JobsListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-md"
        >
          <div className="mb-2">
            <Skeleton height={24} width={200} />
          </div>
          <div className="mb-4">
            <Skeleton height={16} width={150} />
          </div>
          <div className="flex gap-2">
            <Skeleton height={24} width={80} />
            <Skeleton height={24} width={80} />
          </div>
        </div>
      ))}
    </div>
  );
}
```

E atualizar o arquivo loading.tsx da página de vagas:

```typescript
// app/vagas/loading.tsx
import JobsListSkeleton from './jobs-list-skeleton';

export default function Loading() {
  return <JobsListSkeleton />;
}
```

### Dicas para criar bons Skeletons

1. **Deixamos a estrutura relativamente similar:** O skeleton deve refletir o layout do conteúdo real para evitar mudanças bruscas quando o conteúdo carregar.
2. **É mais fácil esperar com animações:** A biblioteca `react-loading-skeleton` já inclui animações por padrão.

### Resultado final

Com essas implementações, nossa aplicação agora tem:

- _Loading states_
- Melhor feedback visual durante o carregamento
- Transições mais suaves entre estados de _loading_ e conteúdo
- Uma experiência mais profissional e polida
