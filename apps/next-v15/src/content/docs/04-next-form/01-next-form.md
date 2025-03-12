---
title: Next Form (next/form)
---
A partir da versão 13, o Next e o React começam a usar extensivamente os formulários (forms) do HTML com Server Components.

O React, então, amplia o `form` nativo do HTML para que a action, além de receber uma string, também possa receber uma função JavaScript. Quando essa action recebe uma função JavaScript, essa função é chamada de ServerAction.

O problema é que, quando fazemos requisições GET em um formulário e passamos uma página para a action, o formulário HTML continua se comportando como um formulário nativo. Isso significa que a página será recarregada no cliente - o que nem sempre é desejável.

Além disso, quando passamos uma string para a `action`, não conseguimos fazer o pré-carregamento dessa nova página que será visitada após a submissão do formulário.

O resumo dá ópera do `<form>` no React é o seguinte:

- Quando passamos uma `string` para a `action`, o form comporta-se como um formulário nativo HTML
- Quando passamos uma função para a `action`, o form chama essa função (server action)

### Vantagens de usar `Form` ao invés de `form`

- Prefetching dos dados da página de destino.
- Client-side navigation - não é necessário um reload completo da página. Isso preserva, além da UI, também o estado (caso haja algum)

### Algumas coisas para ficar de olho 👀

Quando a `action` é uma `string`, o componente `Form` aceita as props:

- action
- replace
- scroll
- prefetch

Quando a `action` é uma `função`, o componente só aceita a prop `action`.

Ou seja, você não pde passar, por exemplo, a prop `method`.

### Na prática

Vamos agora, no Workshop, ver como funciona o `<Form>` na prática.
