---
title: Regras dos Server Components
---

Existem algumas "regrinhas" que devem ser observadas para que possamos usar os RSC de forma eficiente e sem erros.

1. **Sem Estado (e hooks) no Lado do Cliente:**
Server Components não podem usar hooks do React que gerenciam estado, como `useState` ou `useEffect`. RSC não têm estado e renderizam com base nas props que recebem.

1. **Sem Event Listeners:**
Server Components não podem anexar *event listeners* ou lidar com interações do usuário diretamente. Eles não podem usar props de eventos como `onClick`.

1. **Sem APIs do Navegador (Browser APIs):**
Server Components não têm acesso a APIs específicas do navegador como `window` ou `document`. Eles rodam no servidor, então não podem interagir com o ambiente do navegador.

1. **Renderização Assíncrona:**
Server Components podem ser assíncronos. Eles podem usar a sintaxe `async/await` para fetch de dados ou realizar outras operações assíncronas.

1. **Fetch de Dados:**
Server Components são ideais para fetch de dados. Eles podem acessar diretamente bancos de dados ou APIs no servidor sem expor informações confidenciais ao cliente.

1. **Acesso ao Sistema de Arquivos:**
Server Components podem interagir com o sistema de arquivos no servidor, o que não é possível em *Client Components*.

1. **A Diretiva `useClient`:**
Server Components não devem incluir a diretiva `"use client"`. Esta diretiva é usada para marcar o limite onde *Client Components* começam.

1. **Composição com *Client Components*:**
Server Components podem renderizar *Client Components*, permitindo uma mistura de renderização do lado do servidor e do lado do cliente em sua aplicação.

1. **Hierarquia:**
Uma vez que você tem um *Client Component* em sua árvore de componentes, todos os componentes renderizados dentro dele (sejam eles importados ou filhos diretos) também serão, implicitamente, *Client Components*. Isso significa que não é possível renderizar um Componente de Servidor diretamente dentro de um *Client Component*.
