---
title: O que vamos aprender hoje
---

Na versão 16, o Next melhorou muito sua _developer experience_. Está muito mais fácil criar uma aplicação Next. Isso porque foi lançado um dos melhores recursos do Next, até hoje chamado de `Cache Components`.

Você verá neste workshop que os componentes de cache - `cache components` - eram o que faltava para que a nova forma de fazer aplicações React (esse movimento começou com os RSCs) fizesse sentido.

## 1. Cache Components

Em primeiro lugar, o mais importante: Cache Components.

Vamos criar uma aplicação simples usando esse recurso. Nessa parte finalmente vamos entender (à fundo) duas coisas fundamentais no Next.js:

1. A diretiva `use cache`
2. O que é PPR (Partial Pre Rendering) e como essa nova forma de renderizar faz sentido dentre todas as formas possíveis do Next.js.

A API da implementação do novo cache no Next.js mudou bastante desde a concepção do `use cache`. Mas agora ela é estável e não muda mais 🎉.

## 2. DevTools and MCP

Se você está usando agentes de código, já deve ter percebido que muitos agentes e modelos não conseguem acompanhar a velocidade com que as novas atualizações do framework acontecem. Os modelos, além de terem um _cutoff_ no passado, não são eficientes para buscar informações sobre o framework.

Por essa razão, o Next acabou de lançar um MCP. Além de trazer informações sobre como migrar uma aplicação Next para a última versão, a ferramenta também integra com o _dev server_ para fornecer aos modelos de IA os erros que estão ocorrendo em tempo real.

## 3. Next Evals

E falando de IA, a Vercel lançou uma página dedicada a avaliar os melhores modelos para se usar ao construir uma aplicação Next.js. É muito interessante 🧠

## 4. Outros Updates

- Build Adapters
- File System CAching
- Turbopack
- Proxy.ts
- Enhanced Routing
- React Compiler Support

## 5. Migrando para V16

Vamos passar rapidamente pela documentação de upgrade do Next.js - isso vai trazer um overview das principais mudanças dessa versão.
