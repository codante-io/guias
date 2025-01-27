---
title: O que é o Turbopack
---

O Turbopack é um bundler e dev server que é otimizado para rodar o Next.js.

Quando você roda `npx next dev` (ou `npm run dev` que roda o `next dev`) por trás dos panos, o compila as rotas e arquivos e sobe um servidor que se recarrega toda vez que um arquivo é alterado.

Como ele é escrito em Rust e tem uma integração profunda com o Next.js ele faz com que o desenvolvimento seja mais rápido do que com o servidor anterior (que usava webpack por trás dos panos).

Pra rodar o seu *dev server* com Turbopack, basta rodar `npm run dev` ou, se estiver em versões antigas do next, passando a flag `--turbopack`.
