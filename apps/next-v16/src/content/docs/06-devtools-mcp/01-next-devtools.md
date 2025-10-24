---
title: Next.js Devtools e o padrão MCP
---

Uma das novidades mais comentadas do Next.js 16 é o **Next.js Devtools**, um painel que roda localmente e se conecta ao projeto via MCP (Model Context Protocol). A experiência lembra uma junção do React DevTools, do layout inspector e de um painel de performance para rotas server-side.

## Instalando e abrindo

```bash
npx @next/devtools@latest
```

Com o dev server rodando (`pnpm dev`, `npm run dev` ou `next dev`), execute o comando acima em outro terminal. Uma janela web é aberta mostrando:

- Árvore de componentes com suporte a Server Components.
- Server Actions e form actions sendo monitoradas em tempo real.
- Requisições RSC com detalhes de cache (cache hits, `cacheTag`, `cacheLife`).

## Fluxo de trabalho sugerido

1. Rode `npx @next/devtools@latest` sempre que precisar depurar uma renderização diferenciada.
2. Use a aba **Performance** para entender por que um segmento não está entrando no cache: ela lista headers, tags e perfil de `cacheLife`.
3. Na aba **Routing**, teste pré-buscas (`prefetch`) e veja a diferença de payload entre navegação com e sem PPR.

## O que muda com MCP

O protocolo MCP define como ferramentas externas se conectam ao Next.js. Isso abre espaço para que IDEs, CLIs ou até assistentes de IA tenham uma visão unificada da aplicação sem hacks específicos. O Next.js Devtools é a primeira implementação pública; espere ver outros clientes MCP surgindo (ex.: integrações VS Code, painéis internos).
