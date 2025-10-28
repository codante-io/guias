---
title: File System Caching
---

O Turbopack oferece cache de sistema de arquivos que pode ser ativado para acelerar significativamente as compilações durante o desenvolvimento.

## Como funciona

O File System Cache armazena os artefatos compilados no disco, permitindo que compilações subsequentes reutilizem código já processado. Isso resulta em:

- **Compilações incrementais muito mais rápidas** em aplicações grandes
- **Setup mais rápido** entre execuções do servidor de desenvolvimento
- **Melhor experiência** para times que alternam frequentemente entre branches

## Ativando o cache

Para ativar o File System Cache, adicione a seguinte configuração no seu `next.config.ts`:

```ts
// next.config.ts
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
```

## Quando usar

Esse cache é especialmente útil em:

- Aplicações com muitos módulos e dependências
- Times que fazem switch frequente entre branches
- Ambiente de desenvolvimento onde o servidor é reiniciado regularmente
- Projetos com compilação lenta em cold starts

## Limpeza do cache

Se você precisar limpar o cache (por exemplo, após mudanças significativas na estrutura do projeto), você pode:

- Remover a pasta `.next` do seu projeto
- O cache será automaticamente recriado na próxima execução

## File System Cache para Build

Além do cache para desenvolvimento, o Next.js 16 também oferece File System Cache para builds de produção, otimizando significativamente o processo de compilação.

### Configuração para Build

Para ativar o cache durante o processo de build, você precisa habilitar a opção `experimental.turbopackFileSystemCacheForBuild`:

```ts
// next.config.ts
const nextConfig = {
  experimental: {
    // Cache para desenvolvimento
    turbopackFileSystemCacheForDev: true,
    // Cache para build de produção
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
```

### Quando usar File System Cache no Build

O cache de build é especialmente benéfico em:

- **Projetos grandes** com muitos módulos e dependências
- **CI/CD pipelines** que executam builds frequentemente
- **Ambientes de desenvolvimento** onde builds locais são comuns
- **Times que precisam** de builds rápidos para feedback

### Benefícios no Build

Com o File System Cache ativado para builds, você obtém:

- **Builds incrementais mais rápidos** - apenas o que mudou é recompilado
- **Redução significativa de tempo** em rebuilds após mudanças pequenas
- **Menor uso de CPU** durante builds subsequentes
- **Economia de recursos** em pipelines CI/CD

### Comparação de Performance

| Tipo de Build | Sem Cache | Com Cache |
|---------------|-----------|-----------|
| Primeira execução | ~120s | ~120s |
| Rebuild (sem mudanças) | ~120s | ~5s |
| Rebuild (pequenas mudanças) | ~120s | ~15s |
| Rebuild (mudanças grandes) | ~120s | ~80s |

### Limpeza do Cache de Build

O cache de build é armazenado na pasta `.next/cache`. Para limpar:

- Remova a pasta `.next` completamente
- Use `rm -rf .next/cache` para limpar apenas o cache
- O cache será automaticamente recriado no próximo build

## Benefícios práticos

Com o File System Cache ativado (tanto para dev quanto para build), você pode observar:

- Redução significativa no tempo de inicialização do `next dev`
- Compilações incrementais quase instantâneas após a primeira compilação
- Builds de produção muito mais rápidos em rebuilds
- Maior produtividade em workflows de desenvolvimento que exigem múltiplas reinicializações do servidor
