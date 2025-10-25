# codando-com-ia

Guia do Codante para colocar IA generativa em prática, construído com Next.js 16 + Fumadocs.
Serve como base para workshops e estudos sobre fluxos de trabalho com IA aplicados a produtos web.

## Como rodar

```bash
pnpm install
pnpm dev --filter codando-com-ia
```

- O servidor sobe em `http://localhost:3000`.
- A busca local é alimentada automaticamente pelo `fumadocs-mdx` após o `postinstall`.

## Estrutura principal

| Caminho | Descrição |
| --- | --- |
| `content/docs` | Capítulos do guia (introdução + tópicos sobre IA aplicada). |
| `src/app/(home)` | Landing page com hero, CTAs e link rápido para a introdução. |
| `src/app/docs` | Layout padrão do Fumadocs, carregando o `pageTree` gerado via `source`. |
| `src/lib/layout.shared.tsx` | Configura o título/navegação global e os links rápidos do topo. |
| `source.config.ts` | Define coleções e esquema de frontmatter usando `fumadocs-mdx`. |

## Scripts úteis

- `pnpm dev --filter codando-com-ia` – ambiente de desenvolvimento.
- `pnpm build --filter codando-com-ia` – build pronto para deploy.
- `pnpm lint --filter codando-com-ia` – validação com ESLint configurado pelo CLI do Fumadocs.

## Referências

- [Fumadocs – Documentação oficial](https://fumadocs.dev)
- [Guia Codando com IA (este repo)](https://github.com/codante-io/guias/tree/main/apps/codando-com-ia)
