---
title: Turbopack
---

O Turbopack é o novo bundler oficial do Next.js 16, substituindo o Webpack como bundler padrão. Ele é escrito em Rust e otimizado para projetos grandes, oferecendo velocidades de compilação significativamente mais rápidas.

## Por que Turbopack?

O Turbopack foi projetado especificamente para resolver problemas de performance do Webpack em projetos grandes:

- **700x mais rápido que o Webpack** em cold starts
- **Compilação incremental** extremamente rápida
- **HMR (Hot Module Replacement)** instantâneo
- **Melhor suporte a TypeScript** com verificação de tipos mais eficiente
- **Diagnósticos mais precisos** com informações detalhadas sobre erros

## Mudanças no Next.js 16

Com o Next.js 16, o Turbopack se torna o bundler padrão para desenvolvimento:

- `next dev` agora inicia diretamente com Turbopack, sem necessidade da flag `--turbo`
- `next build` usa Turbopack sempre que possível, caindo para Webpack apenas se você utilizar APIs ainda não suportadas
- Logs e mensagens de erro seguem o formato do novo bundler com informações mais precisas

## Características principais

### Compilação rápida

O Turbopack consegue compilar projetos grandes em segundos, não minutos. Isso é especialmente útil em:

- Projetos com milhares de módulos
- Times com múltiplos desenvolvedores trabalhando simultaneamente
- CI/CD pipelines que precisam de builds rápidos

### HMR instantâneo

O Hot Module Replacement do Turbopack é quase instantâneo, permitindo que você veja suas mudanças no navegador em milissegundos. Isso transforma a experiência de desenvolvimento.

### Compatibilidade

O Turbopack mantém compatibilidade com:

- Ecossistema React completo
- CSS e frameworks CSS
- TypeScript nativo
- Módulos Node.js

## Plugins e extensibilidade

O Turbopack está desenvolvendo sua própria API de plugins para substituir os plugins do Webpack. Se você usa plugins customizados:

- Isole-os atrás de verificações para evitar que rodem quando `process.env.NEXT_RUNTIME === 'turbopack'`
- O CLI lista features automaticamente transpiladas para garantir que nada quebre
- Use `next dev --webpack` temporariamente caso identifique regressões

## Migração do Webpack

Para a maioria dos projetos, a migração para o Turbopack é transparente:

1. Não é necessário instalar dependências adicionais
2. O Next.js 16 usa o Turbopack automaticamente
3. Seus imports e código existente funcionam sem modificações

## Benefícios em produção

Embora focado em desenvolvimento rápido, o Turbopack também oferece benefícios em builds de produção:

- Builds mais estáveis e previsíveis
- Melhor tree-shaking e otimização
- Geração de bundles mais otimizados
- Diagnósticos mais detalhados para troubleshooting

## Próximos passos

O Turbopack está em desenvolvimento ativo. Para ficar por dentro das últimas atualizações:

- Consulte a [documentação oficial do Turbopack](https://turbo.build/pack)
- Participe das discussões na comunidade Next.js
- Reporte bugs e feedback para ajudar a melhorar o bundler

## Comparação de performance

| Operação | Webpack | Turbopack |
|----------|---------|-----------|
| Cold start (app básico) | ~3s | ~50ms |
| Cold start (app grande) | ~15s | ~100ms |
| HMR | ~500ms | ~50ms |

Essas melhorias significam que desenvolvedores passam menos tempo esperando por builds e mais tempo escrevendo código.
