---
title: Build Adapters (alpha)
---

Os Build Adapters estreiam no Next.js 16 como uma API experimental para ajustar o comportamento do build antes e depois da compilação. A proposta é permitir que plataformas de deploy, ferramentas internas ou equipes com pipelines específicos possam inspecionar e modificar o resultado gerado pelo framework.

## Quando faz sentido usar

- Você precisa gerar manifests customizados (Cloudflare, Netlify, AWS Lambda, etc.).
- É necessário enviar artefatos do build para outro serviço (ex.: armazenar rotas em um repositório interno).
- Há regras corporativas que devem rodar logo após o build (scan de segurança, invalidação de CDN, etc.).

## Ativando um adapter

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    adapterPath: require.resolve('./my-adapter.js'),
  },
}

export default nextConfig
```

O arquivo apontado por `adapterPath` deve exportar um objeto que implementa a interface `NextAdapter`. Os dois ganchos principais são `modifyConfig`, executado sempre que o `next.config.ts` é carregado, e `onBuildComplete`, chamado após o término do `next build`.

```js
// my-adapter.js
/** @type {import('next').NextAdapter} */
const adapter = {
  name: 'codante-internal-adapter',

  async modifyConfig(config, { phase }) {
    if (phase === 'phase-production-build') {
      return {
        ...config,
        images: { ...config.images, minimumCacheTTL: 14400 },
      }
    }
    return config
  },

  async onBuildComplete({ outputs, routes }) {
    console.log('Total de páginas App Router:', outputs.appPages.length)
    await sendRoutesToDashboard(routes)
  },
}

module.exports = adapter
```

## Boas práticas

- Versione o adapter como um pacote interno para facilitar reuso entre projetos.
- Registre métricas no `onBuildComplete` (quantidade de rotas, tamanho dos bundles) para acompanhar regressões.
- Combine com o conceito de **adapters de infraestrutura** do seu provedor. Equipes que usam plataformas externas podem focar no essencial e permitir que a plataforma disponibilize o adapter oficial.
