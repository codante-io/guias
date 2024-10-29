---
title: React com JSX
description: Vamos explorar como usar JSX para tornar nosso código React mais legível e intuitivo
---

No exemplo anterior, vimos como criar elementos React usando `React.createElement()`. Agora, vamos dar um passo adiante e usar JSX, uma extensão de sintaxe para JavaScript que torna a escrita de elementos React muito mais intuitiva e semelhante ao HTML.

Para usar JSX, precisamos de um transpilador que converta o código JSX em JavaScript puro que o navegador possa entender. Vamos usar o Babel para isso.

Primeiro, crie uma nova pasta para este exemplo:

```bash
mkdir exemplo-03-react-jsx
cd exemplo-03-react-jsx
```

Agora, crie um arquivo `index.html` com a seguinte estrutura:

```html
<html>
  <body>
    <div id="root"></div>
    <script src="dist/script.js" type="module"></script>
  </body>
</html>
```

## Criando o arquivo JSX

Crie um arquivo chamado `script.jsx` com o seguinte conteúdo:

```jsx
import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const App = () => (
  <h1 id="title">
    Boas vindas ao workshop de React,{" "}
    <span
      id="name"
      onClick={(ev) => {
        ev.target.style.color = "red";
      }}
    >
      @fulano
    </span>
  </h1>
);

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));
rootElement.render(<App />);
```

## Transpilando JSX com Babel

Agora, vamos usar o Babel para transpilar nosso código JSX em JavaScript puro. Usaremos o npx para executar o Babel sem precisar instalá-lo globalmente:

```bash
npx babel script.jsx -o dist/script.js --presets=@babel/preset-react
```

Este comando faz o seguinte:

1. Usa o `@babel/cli` para executar o Babel.
2. Aplica o preset `@babel/preset-react` para transpilar o JSX.
3. Lê o arquivo `script.jsx`.
4. Gera o output em `dist/script.js`.

## Executando o exemplo

Para executar o exemplo, você pode usar o mesmo servidor HTTP que usamos anteriormente:

```bash
npx http-server .
```

Acesse `http://localhost:8080` no seu navegador para ver o resultado.

## Comparando com o exemplo anterior

Observe como o código JSX é muito mais legível e intuitivo comparado ao uso direto de `React.createElement()`. Com JSX, podemos escrever nossa interface quase como se estivéssemos escrevendo HTML, mas com todo o poder do JavaScript à nossa disposição.

Agora que já entendemos como funciona o React por trás dos panos, podemos partir para o próximo exemplo, onde vamos criar nossos primeiros componentes usando o React com Vite.
