---
title: Exercício 02
---

*Use [essa branch](https://github.com/robertotcestari/codante-ts-no-react-exercicio/tree/main) para iniciar o exercício.*

### Enunciado

Já temos o componente `QuoteCard`. Vamos agora criar um componente `Card` genérico, cuja responsabilidade é apenas a UI do `QuoteCard` (que está representada na tag `<article>`).

:::tip[Enunciado do Exercício]
Extraia um componente `<Card>` do componente `<QuoteCard>`.
O componente `<Card>` deverá "envelopar" seu conteúdo, portanto não esqueça de usar a propr `children`!
:::

### E agora? Tipar Children?

Você tem algumas opções para tipar a prop `children`. Qual delas você irá usar?

- JSX.Element
- JSX.Element[]
- JSX.Element | JSX.Element[]
- React.ReactChild[]
- React.ReactNode
