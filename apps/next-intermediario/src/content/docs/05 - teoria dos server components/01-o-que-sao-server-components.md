---
title: O que são Server Components no React?
---


Vamos tentar responder a duas perguntas nessa seção.

1. O que são React Server Components (RSC)?
2. Por que RSC importam tanto para o Next.js?

## O que são RSC?

Os Server Components são uma funcionalidade nova no React que permite renderizar componentes React diretamente no servidor.

Com eles você pode principalmente fazer fetch de dados diretamente no servidor (ao invés no navegador do cliente) o que pode melhorar o desempenho e segurança nas aplicações.

## Por que RSC importam tanto para o Next.js?

O Next.js a partir da sua versão 13 utiliza RSC como padrão - e um componente React padrão no framework não funciona mais da forma como funcionava antes.

Isso porque agora, a não ser que você estabeleça o contrário, todo componente será renderizado no servidor e algumas coisas devem ser observadas:

1. Você não pode usar interatividade com componentes de servidor (eventos e listenters, estado, hooks, browser APIs).

2. Você pode usar `await` em componentes de servidor, especialmente para fetch de dados e pode, por exemplo, usar chaves API sem vazar para o cliente.

Enfim, o resumo da ópera é: se você quer usar o Next a partir da versão 13, é importante você ter noção do que são Server Components e como usá-los em conjunção com Client Components.
