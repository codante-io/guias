---
title: Solução 02
---

*Veja a [diff no github](https://github.com/robertotcestari/codante-ts-no-react-exercicio/compare/resolucao-props-children-exercicio-1...resolucao-eventos-e-event-handlers-exercico-1)*

## Extraindo um componente `<Card>` genérico

- A primeira coisa é criar o componente `components/Card.tsx`.

Feito isso, vamos colocar o código no componente:

```jsx title="src/components/Card.tsx"
function Card({ children }) {
  return (
    <article className="max-w-4xl p-10 mx-auto mt-12 bg-white border-2 border-gray-200 shadow-2xl rounded-2xl bg-opacity-10">s
      {children}
    </article>
  );
}

export default Card;
```

### Como tipar o `props.children`?

- `JSX.Element`: Não consegue receber arrays.
- `JSX.Element | JSX.Element[]`; Não aceita strings.
- `React.ReactChild`: Está deprecado
- `React.ReactChild[]`: Está deprecado
- `React.ReactNode`: É o que queremos.

Podemos então tipar dessa forma o componente `<Card>`:

```jsx ins={1-3, 5}
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <article className="max-w-4xl p-10 mx-auto mt-12 bg-white border-2 border-gray-200 shadow-2xl rounded-2xl bg-opacity-10">
      {children}
    </article>
  );
}

export default Card;
```

### O tipo `PropsWithChildren`

Uma outra forma de fazer isso é usar um tipo utilitário que é o `PropsWithChildren`:

```jsx ins={1,3}
import { PropsWithChildren } from "react";

function Card({ children }: PropsWithChildren) {
  return (
    <article className="max-w-4xl p-10 mx-auto mt-12 bg-white border-2 border-gray-200 shadow-2xl rounded-2xl bg-opacity-10">
      {children}
    </article>
  );
}

export default Card;
```

*Créditos para os @stevekinney em relação*
