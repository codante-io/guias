# next-v16-fumadocs

Documentação oficial do mini workshop **“O que há de novo no Next.js v16”** agora construída com Next.js 16 + Fumadocs.
Todo o conteúdo foi migrado do app Starlight (`apps/next-v16`) para MDX, preservando a estrutura dos capítulos.

## Como rodar

```bash
# na raiz do monorepo
pnpm install
pnpm dev --filter next-v16-fumadocs
```

- O servidor sobe em `http://localhost:3000`.
- A busca local é alimentada automaticamente pelo `fumadocs-mdx` após o `postinstall`.

## Estrutura principal

| Caminho | Descrição |
| --- | --- |
| `content/docs` | Arquivos MDX copiados do guia Starlight (mesmos diretórios numerados). |
| `src/app/(home)` | Landing page com hero, CTAs e link rápido para a introdução. |
| `src/app/docs` | Layout padrão do Fumadocs, carregando o `pageTree` gerado via `source`. |
| `src/lib/layout.shared.tsx` | Configura o título/navegação global e os links rápidos do topo. |
| `source.config.ts` | Define coleções e esquema de frontmatter usando `fumadocs-mdx`. |

## Scripts úteis

- `pnpm dev --filter next-v16-fumadocs` – ambiente de desenvolvimento.
- `pnpm build --filter next-v16-fumadocs` – build pronto para deploy.
- `pnpm lint --filter next-v16-fumadocs` – validação com ESLint configurado pelo CLI do Fumadocs.

## Referências

- [Fumadocs – Documentação oficial](https://fumadocs.dev)
- [Guia original no Starlight](https://github.com/codante-io/guias/tree/main/apps/next-v16)
