---
title: Como funciona o jeito React?
description: Vamos explorar com exemplos práticos como funciona a criação de interfaces com React
---

Após entendermos como funciona a manipulação do DOM de forma tradicional, vamos agora explorar como o React aborda a criação de interfaces de usuário.

## O jeito React

O React introduz uma abordagem **declarativa** (ao invés de **imperativa**) para a construção de interfaces de usuário. Em vez de manipular diretamente o DOM, você descreve como sua interface deve parecer em cada estado, e o React se encarrega de atualizar e renderizar os componentes de forma eficiente.

Vamos criar um exemplo similar ao anterior, mas agora usando React.

Primeiro, crie uma nova pasta para este exemplo:

```bash
mkdir exemplo-02-react
cd exemplo-02-react
```

Agora, crie um arquivo `index.html` com a seguinte estrutura:

```html
<html>
  <body>
    <div id="root"></div>
    <script src="script.js" type="module"></script>
  </body>
</html>
```

Note que adicionamos uma `<div>` com `id="root"`. Este será o ponto de entrada para nossa aplicação React.

Agora, vamos criar o arquivo `script.js`:

```javascript
import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const newH1 = React.createElement(
  "h1",
  { id: "title" },
  "Boas vindas ao workshop de React, "
);

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));

rootElement.render(newH1);
```

Vamos analisar este código:

1. Importamos as bibliotecas React e ReactDOM diretamente de um CDN (Content Delivery Network) usando ESM (ECMAScript Modules).

> **Nota:** A sintaxe `https://esm.sh/react@18` é uma URL que aponta para o pacote React 18. O ESM é um padrão de módulos JavaScript que permite importar módulos de forma dinâmica e assíncrona. Porém, a abordagem mais comum utilizada é instalar o React localmente e utilizar uma ferramenta como Vite ou Webpack para importar e buildar os pacotes (veremos isso mais a frente).

2. Usamos `React.createElement()` para criar nossos elementos. Esta função recebe três argumentos:

   - O tipo do elemento (ex: 'h1', 'span')
   - Um objeto com as propriedades do elemento (ex: id, onClick)
   - O conteúdo do elemento (pode ser uma string ou um array de elementos filhos)

3. Criamos um elemento raiz com `ReactDOM.createRoot()`, passando o elemento DOM onde queremos renderizar nossa aplicação.

4. Finalmente, chamamos o método `render()` no elemento raiz, passando nosso elemento React.

Com isso, você deverá ver a seguinte tela:

![Exemplo 02](../../../assets/exemplo-01-react.png)

Agora vamos adicionar o nome do usuário e a interação com ele.

```javascript
const newH1 = React.createElement("h1", { id: "title" }, [
  "Boas vindas ao workshop de React, ",
  React.createElement(
    "span",
    { id: "name", onClick: (ev) => (ev.target.style.color = "red") },
    "@fulano"
  ),
]);
```

Repare que onde tínhamos uma string, agora temos um array de elementos. Todos esses elementos serão filhos (children) do elemento h1.

E agora temos a mesma aplicação, mas agora usando React.

![Exemplo 02](../../../assets/exemplo-02-tradicional.png)

## Abordagem Declarativa

Esta abordagem é chamada de **Abordagem Declarativa**. Em vez de dar instruções passo a passo sobre como manipular o DOM, declaramos como queremos que nossa interface pareça, e o React se encarrega de fazer as atualizações necessárias.

É como se você estivesse "descrevendo" para o React o que você quer:

- React, eu quero um h1
- Dentro desse h1, eu quero o texto "Boas vindas ao workshop de React, "
- Depois desse texto, eu quero um span
- Nesse span, eu quero o texto "@fulano"
- Quando alguém clicar nesse span, mude a cor para vermelho

O React então se encarrega de criar e atualizar o DOM de forma eficiente com base nessa descrição.

## Mas esse código não está mais complexo do que o anterior?

Você tem toda razão! Esse código, aparentemente, é bem mais complexo do que o anterior.

Mas aí é que vem uma das grandes "sacadas" do React: o JSX (javascript xml).

Pensando em tornar mais fácil a declaração de interfaces, o React introduziu o JSX, que basicamente mistura o HTML com o JavaScript.

Vamos ver como ficaria o mesmo exemplo usando JSX.
