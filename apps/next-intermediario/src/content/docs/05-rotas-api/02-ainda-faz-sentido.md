---
title: Ainda faz sentido usar rotas API no Next.js?
---

Sendo direto ao ponto: depois que surgiram as Server Actions / Server Functions, *não faz mas tanto sentido utilizar rotas de API*. Isso porque elas eram especialmente úteis para acessar dados do servidor diretamente de componentes frontend. Agora que componentes de cliente podem acessar *server actions* e *server functions*, não há mais necessidade de se utilizar rotas de API para isso.

Aliás, *é muito mais fácil* usar uma `server action` do que uma rota de API para isso.

Claro que ainda existem alguns casos de uso:

1. Quando você precisa de uma rota que não é uma rota de página. Esse caso de uso pode ser útil quando você precisa acessar apenas os dados do servidor.
2. Aplicações mobile, onde você precisa fazer requisições HTTP para o backend.
