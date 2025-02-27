---
title: Na prática
---

Vamos fazer, na prática, um exercício de Estado na URL.

### Modificando as chamadas da API

Eu adicionei à nossa API inicial mais dois _query parameters_ que podem ser passados pela URL da API:

1. O `page`, que será responsável pela paginação dos elementos
2. O `search`, que será responsável por uma busca textual dos elementos

:::tip
Se nada for passado para o parâmetro page, o _default_ é a primeira página (página 1).  
:::

Agora, com esses dois parâmetros na API podemos adicionar duas novas funcionalidades: **busca textual instantânea** e **paginação**.

As duas funcionalidades irão utilizar o estado na URL. Uma vantagem que teremos desde já é que as buscas poderão ser "compartilháveis" por URL!
