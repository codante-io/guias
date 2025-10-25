---
title: Plano de migração e mudanças estruturais
---

A atualização para o Next.js 16 exige preparar o ambiente antes de mexer no código. As principais exigências e remoções já aparecem como warnings na v15.5, mas agora são obrigatórias.

## Requisitos mínimos

- **Node.js 20.9** ou superior. Não há suporte oficial para Node 18.
- **TypeScript 5.1+**: revise `package.json` e o `tsconfig.json` para garantir compatibilidade.
- **Browsers**: suporte oficial a Chrome/Edge/Firefox 111+ e Safari 16.4+.

## Remoções importantes

- **`next lint`**: o comando foi retirado. Use diretamente `eslint` ou `biome`, e atualize os scripts de `package.json`.
- **AMP** (`useAmp`, `config = { amp: true }`): todas as APIs foram removidas. Planeje uma versão HTML tradicional ou migre para Web Vitals.
- **`devIndicators` customizados**: `appIsrStatus`, `buildActivity` e `buildActivityPosition` deixam de existir.
- **`serverRuntimeConfig` / `publicRuntimeConfig`**: substitua por variáveis de ambiente (`process.env`).

## Checklist sugerido

1. Execute o codemod: `npx @next/codemod@latest next-lint-to-eslint-cli .`
2. Crie ou atualize `eslint.config.mjs` ou `biome.json`.
3. Revise o `next.config.ts` em busca de flags `experimental.*` antigas.
4. Confirme que sua pipeline CI/CD usa Node 20.9+.
5. Remova dependências AMP e ajuste rotas que usavam `legacyBehavior`.

Em paralelo, teste sua aplicação com os novos Cache Components e o Turbopack default para garantir que o comportamento em produção permanece correto (considere medir TTFB e uso de memória).
