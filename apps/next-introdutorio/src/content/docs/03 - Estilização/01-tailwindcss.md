---
title: Estilizando com TailwindCSS
---


Vamos utilizar nesse projeto a biblioteca mais famosa de estilização atualmente, o *TailwindCSS*.

Quando criamos nosso novo projeto Next.js o padrão é que o Tailwind seja configurado.

Caso não seja esse o caso, configurar a biblioteca no Next é bastante fácil, basta [seguir esses passos](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

## O que é o TailwindCSS

O Tailwind CSS é um framework de **CSS utilitário** que permite criar interfaces estilizadas de forma rápida e eficiente usando classes predefinidas diretamente no HTML.

Em vez de escrever CSS personalizado para cada elemento, você aplica classes como `flex`, `bg-blue-500` e `text-center` para definir estilos diretamente no HTML. Essa abordagem é o que chamamos de **CSS utilitário**.

As duas principais vantagem do TailwindCSS, para mim, é que

1. O CSS é feito da mesma forma em diferentes projetos: não há muita complexidade cognitiva em um novo projeto que usa TailwindCSS - já que todos seguem o mesmo padrão
2. Velocidade: é muito mais rápido prototipar e desenhar designs próprios usando TailwindCSS.

## Upgrade do Tailwind - v4

Se ainda o seu projeto está com o TailwindCSS versão 3, vamos fazer o upgrade para usar a última versão:

```bash
npx @tailwindcss/upgrade@next
```

### Tailwind v4 e shadcn/ui

Como o release da v4 do TailwindCSS foi recente, ainda não há suporte para esta versão no shadcn/ui (especialmente porque não há mais arquivo de configuração). Para fazer funcionar, melhor é instalar primeiro o `shadcn/ui` para depois rodar o comando de migração.

## Estilizando nossa aplicação

Vamos começar a estilizar nossa Homepage de forma que fique igual ao nosso design do Figma.
