---
title: Estado na URL
---

O que é _estado na URL_ e quais as vantagens dessa abordagem?

Tradicionalmente, o gerenciamento de _estado_ (_state_) em uma aplicação React é feito de duas maneiras:

1. Através do hook `useState`.
2. Através do `Context API`.
3. Através de bibliotecas externas de gerenciamento de _estado_ (Redux, Zustand).

Como os componentes de página (geralmente) são _Server Components_, já não é possível utilizar hooks como o `useState`.

Também o caso de uso de _estado_ global, seja através de bibliotecas externas ou Context API, é cada vez menor. Isso porque foi-se percebendo que a maior parte das vezes o "_estado_" precisa ser sincronizado com o servidor. E sincronizar _estado_ global com _estado_ no servidor é uma tarefa que traz múltiplas dificuldades.

Quer um exemplo? Imagine uma busca e paginação em uma lista qualquer. Não faz sentido gerenciar estado local ou estado global, já que na maioria dos casos paginação e busca ocorrem no backend, e não no frontend.

Justamente esse será o exemplo que iremos utilizar: vamos fazer na prática busca e paginação, utilizando a URL para guardar nosso estado e sincronizar nosso backend/API com nosso frontend.
