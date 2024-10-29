---
title: Exercícios
description: Vamos praticar o que aprendemos!
---

## Exercícios

### 1. O que vai ser renderizado?

```jsx
function App() {
  const isLoggedIn = false;

  return <div>{isLoggedIn ? "Bem vindo, usuário!" : "Faça login"}</div>;
}
```

### 2. O que vai ser exibido e qual vai ser a cor do texto?

```jsx
function App() {
  const frutas = ["banana", "maçã", "laranja"];

  const cor = frutas[0].length % 2 === 0 ? "verde" : "vermelho";

  return <div style={{ color: cor }}>{frutas}</div>;
}
```

### 3. Para cada fruta, exiba uma div com a quantidade de caracteres

```jsx
function App() {
  const frutas = ["banana", "maçã", "laranja"];

  // sua resposta aqui
}
```

### 4. Exiba apenas frutas que começam com a letra "m"

```jsx
function App() {
  const frutas = ["banana", "maçã", "laranja", "manga", "melão"];

  // sua resposta aqui
}
```
