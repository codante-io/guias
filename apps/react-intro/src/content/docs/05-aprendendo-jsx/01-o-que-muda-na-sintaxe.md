---
title: O que muda na sintaxe
description: Quais as diferenças entre JS e JSX?
---

Como mostramos no começo do workshop, o React implementou a ideia do `jsx` para facilitar a descrição da estrutura da nossa aplicação.

Na prática, o JSX é uma extensão de sintaxe para o JavaScript que permite escrever HTML dentro do JavaScript. Então se você já conhece HTML e JS, não vai ser difícil entender o JSX. Mas você tem que se atentar a algumas diferenças.

## HTML no meio do JS?

Pode parecer um pouco estranho ver HTML no meio do JS, mas é assim mesmo. Da mesma forma que você pode escrever uma string no meio do JS, você pode escrever HTML no meio do JS.

Fica mais ou menos assim:

```jsx
const element = <h1>Hello, world!</h1>;
```

Você pode também retornar HTML de dentro de uma função:

```jsx
function App() {
  return <h1>Hello, world!</h1>;
}
```

## Expressões no meio do JSX

Até agora isso pode estar parecendo estranho, mas você começa a perceber o quão poderoso é quando mistura HTML com JS. Por exemplo, você pode fazer operações dinâmicas no meio do HTML:

```jsx
function App() {
  return (
    <div>
      <h1>A data de hoje é {new Date().toLocaleDateString()}</h1>
    </div>
  );
}
```

No meio do HTML, você pode usar expressões JavaScript quando colocadas entre chaves `{}`.

Da mesma forma você pode fazer isso com as propriedades de um elemento:

```jsx
function App() {
  const imageUrl = "https://via.placeholder.com/150";

  return <img src={imageUrl} alt="placeholder" />;
}
```

Com isso, você pode criar elementos dinamicamente, a partir de variáveis, funções, retornos de APIs, etc.

## Composição de componentes

Quando você define um componente em JSX, você pode inseri-lo dentro de outro componente:

```jsx
function UserAvatar() {
  return <img src="https://via.placeholder.com/150" alt="placeholder" />;
}

function Header() {
  return (
    <div>
      <UserAvatar />
    </div>
  );
}
```

## Tags com autofechamento vs Tags com childrens

Um componente pode ter filhos (children) ou não. Daqui a pouco vamos explorar em mais detalhes isso com as `props`.

Portanto, você pode passar filhos para um componente abrindo e fechando suas tags. Por exemplo:

```jsx
function Books() {
  return (
    <BookList>
      <div>
        <h1>Livros</h1>
      </div>
    </BookList>
  );
}
```

Quando um componente não tem filhos, ele pode ser auto fechado. Por exemplo:

```jsx
function BookItem() {
  return <Book />;
}
```

### Hierarquia de componentes

Quando um componente está dentro do outro, dizemos que eles são "pais" e "filhos". Por exemplo:

```jsx
function App() {
  return <Header />;
}
```

Nesse caso, o componente `App` é o "pai" e o componente `Header` é o "filho".

```jsx
function App() {
  return (
    <Header>
      <UserAvatar />
    </Header>
  );
}
```

Nesse caso, o componente `App` é o "pai" e o componente `Header` é o "filho". E o componente `Header` por sua vez, tem como "filho" o componente `UserAvatar`.

```jsx
function App() {
  return (
    <Header>
      <Logo />
      <UserAvatar />
    </Header>
  );
}
```

Por fim, se os componentes compartilham o mesmo "pai", dizemos que eles são "irmãos". Como o caso de `Logo` e `UserAvatar` acima.

## Eventos

Os eventos do HTML são mapeados no JSX com o prefixo `on`. Por exemplo:

```jsx
function Button() {
  return <button onClick={() => alert("Clicou")}>Clique aqui</button>;
}
```

## Expressões condicionais

Você pode usar qualquer expressão JavaScript no JSX, inclusive condicionais. Por exemplo:

```jsx
function App() {
  return (
    <div>{isLoggedIn ? <p>Bem vindo, usuário!</p> : <p>Faça login</p>}</div>
  );
}
```

Outra coisa comum é utilizar o `&&` para renderizar condicionalmente um elemento:

```jsx
function App() {
  return <div>{isLoggedIn && <p>Bem vindo, usuário!</p>}</div>;
}
```

### Curiosidade:

O que vai ser renderizado?

```jsx
function App() {
  return <div>{false}</div>;
}
```

```jsx
function App() {
  return <div>{null}</div>;
}
```

```jsx
function App() {
  return <div>{undefined}</div>;
}
```

```jsx
function App() {
  return <div>{"false"}</div>;
}
```

```jsx
function App() {
  return <div>{{ nome: "Ícaro", empresa: "Codante" }}</div>;
}
```

## O que pode ser renderizado?

Como você viu acima, nem tudo pode ser renderizado no JSX.

O React vai exibir na tela somente `strings`, `numbers` e outros componentes jsx válidos.

Você pode também renderizar arrays contendo elementos válidos. Se você adicionar um array, o React vai transformar cada elemento do array em um elemento JSX.

```jsx
function App() {
  const frutas = ["banana", "maçã", "laranja"];

  return <div>{frutas}</div>;
}
```

Essa funcionalidade é bastante poderosa, pois você pode criar listas de elementos dinamicamente, utilizando o `map` para iterar sobre o array.

```jsx
function App() {
  const frutas = ["banana", "maçã", "laranja"];

  return (
    <ul>
      {frutas.map((fruta) => (
        <li>{fruta}</li>
      ))}
    </ul>
  );
}
```

Você pode chamar funções no meio do JSX, desde que elas retornem um valor válido.

```jsx
function digaOi(nome) {
  return `Olá ${nome}`;
}

function App() {
  return <div>{digaOi("Ícaro")}</div>;
}
```

## Classes CSS

Para adicionar classes CSS no JSX, você deve usar a propriedade `className` ao invés de `class`. Você sabe porquê?

Como o JSX mistura HTML com JS, no HTML a palavra `class` se refere ao atributo de classe CSS, enquanto no JavaScript a palavra `class` se refere a uma classe (de orientação a objetos). Para que não haja conflito, o React usa `className` para o atributo de classe CSS.
