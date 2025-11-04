---
title: Enhanced Routing
---

O Next.js 16 introduz melhorias significativas no sistema de roteamento, tornando a navegação mais previsível, performática e com melhor suporte a casos complexos.

## Principais Melhorias

### Dynamic Routes Mais Robustos

- Melhor tratamento de parâmetros dinâmicos em rotas nested
- Suporte aprimorado para catch-all segments (`[...slug]`)
- Validação automática de tipos com `generateStaticParams`

### Route Groups com Contexto Compartilhado

- Layouts aplicados apenas a grupos específicos de rotas
- Melhor isolamento de contextos entre grupos
- Suporte a múltiplos layouts em paralelo

### Middleware Mais Poderoso

- Detecção automática de tipos em `NextRequest` e `NextResponse`
- Melhor suporte a reescrita de URLs com preservação de query strings
- Logging integrado para debugging de rotas

## Padrões Recomendados

### Organização com Route Groups

```
app/
├── (auth)/
│   ├── login/
│   ├── register/
│   └── layout.tsx
├── (dashboard)/
│   ├── overview/
│   ├── analytics/
│   └── layout.tsx
└── api/
```

### Validação de Parâmetros

Use `generateStaticParams` com tipagem forte para evitar rotas inválidas em build time:

```typescript
export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

## Migração Suave

- Rotas antigas continuam funcionando normalmente
- Combine padrões antigos e novos no mesmo projeto
- Prefira novo padrão em novos recursos
