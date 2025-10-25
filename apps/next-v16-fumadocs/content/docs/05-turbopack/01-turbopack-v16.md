---
title: Turbopack como bundler padrão
---

O Next.js 16 torna o Turbopack o bundler padrão para qualquer projeto, substituindo o Webpack nas rotas App e Pages. O ganho percebido é abertura de servidores de desenvolvimento consideravelmente mais rápida e builds de produção mais estáveis, com diagnósticos mais detalhados.

## O que muda na prática

- `next dev` inicia direto com Turbopack, sem a flag `--turbo`.
- `next build` usa Turbopack sempre que possível; caindo para Webpack apenas se você utilizar APIs ainda não suportadas.
- Logs e mensagens de erro passam a seguir o formato do novo bundler (arquivos `.ts` com colunas precisas).

## File System Cache

Em aplicações grandes, ative o cache de sistema de arquivos para compilações incrementais muito mais rápidas:

```ts
// next.config.ts
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
}

export default nextConfig
```

Esse cache guarda artefatos compilados entre execuções do `next dev`, o que reduz o tempo de setup em times que alternam frequentemente entre branches.

## Migração suave

- Se você usa plugins de Webpack customizados, isole-os atrás de verificações para evitar que rodem quando `process.env.NEXT_RUNTIME === 'turbopack'`.
- Fique atento a warnings: o CLI lista features automaticamente transpiladas por Webpack para garantir que nada quebre.
- Use `next dev --webpack` temporariamente caso identifique regressões, mas reporte os casos à equipe (muitos já são resolvidos na alpha do Turbopack plugin API).
