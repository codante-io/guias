---
title: Cache no Next.js
---

Cache é uma das coisas que tem mudado bastante recentemente no Next.js 15.

Antes de adentrarmos as mudanças na v15, vale a pena recapitular a heurística do Cache do Next.js.

## Os quatro "caches" diferentes existentes

Existem 4 caches diferentes atuando em uma aplicação Next.js:

- **Full Route Cache**: Armazena HTML e payload RSC no servidor para reduzir custo de renderização
- **Data Cache**: Armazena dados no servidor entre diferentes requisições e implantações
- **Request Memoization**: Reutiliza valores de funções no servidor durante um único ciclo de requisição
- **Router Cache**: Armazena payload RSC no cliente para reduzir requisições ao servidor durante navegação

## Exemplos práticos

Vamos ver um exemplo prático de cada um desses caches na V15. Vamos utilizar, para isso, a API da ISS - Estação Espacial Internacional.

1. Full Route Cache
2. Data Cache
3. Request Memoization
4. Router Cache
