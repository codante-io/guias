---
title: Context API
description: Vamos aprender a compartilhar dados na nossa aplicação usando Context API
---

Um problema comum do React é a comunicação entre componentes. Como dito antes, você só pode passar props de pais para filhos. Isso significa que se você tiver muitos componentes na sua árvore, você terá que lidar com muita passagem de props. Esse conceito é chamado de Prop Drilling

```
import React from 'react';

// Main App component
function App() {
  const user = { name: 'Alice', age: 25 };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <ParentComponent user={user} />
    </div>
  );
}

// Parent component
function ParentComponent({ user }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent user={user} />
    </div>
  );
}

// Child component
function ChildComponent({ user }) {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandchildComponent user={user} />
    </div>
  );
}

// Grandchild component
function GrandchildComponent({ user }) {
  return (
    <div>
      <h4>Grandchild Component</h4>
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
    </div>
  );
}

export default App;
```

Para evitar esse problema precisamos usar alguma ferramenta. Existem bibliotecas que vão lidar com isso como o Redux ou o React Query.

Mas antes de entrar nessas ferramentas, o React disponibiliza uma API interna chamada de Context que pode resolver esse problema.

Para ilustrar esse problema, vamos implementar na nossa aplicação um novo componente dentro de `FeaturedProperties`.

Vamos supor que queremos exibir ao lado do título a quantidade de imóveis que temos.

Para isso vamos criar um novo componente `NumberOfProperties`

```jsx
function NumberOfProperties({ properties }) {
  return <span>({properties.length})</span>;
}

export default NumberOfProperties;
```

Lembre-se de incluir esse componente dentro do `FeaturedProperties`.

```jsx
<h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
  Imóveis em Destaque
  <NumberOfProperties properties={properties} />
</h2>
```

Repare que para sair do App até chegar no componente NumberOfProperties, você teve que passar props várias vezes.

Podemos utilizar a ContextAPI nesse caso. Ela vai servir como um estado global que pode ser compartilhado sem a necessidade de passar via Props.

## Configurando a ContextAPI

Dentro do `App.jsx` você deverá criar um contexto

```jsx
export const PropertiesContext = createContext();
```

Depois disso, você deverá usar o Provider para passar os dados para dentro do Context

```jsx
// dentro do App

return (
  <PropertiesContext.Provider value={{ properties }}>
    <div>
      <Navbar />
      <Hero />
      <FeaturedProperties properties={properties} />
      <ContactForm />
      <Footer />
    </div>
  </PropertiesContext.Provider>
);
```

Agora você pode acessar o Contexto em qualquer lugar com o hook `useContext`.

No componente `NumberOfProperties`

```jsx
// src/components/number-of-properties.jsx

import { useContext } from "react";
import { PropertiesContext } from "../App";

function NumberOfProperties() {
  const { properties } = useContext(PropertiesContext);
  return <span>({properties.length})</span>;
}

export default NumberOfProperties;
```

Com isso você evita o prop drilling.

## Configurando um provider

Para organizar melhor nosso código, podemos separar o nosso Context e suas lógicas em um arquivo a parte

Vamos criar um novo arquivo

```jsx
// src/providers/properties.jsx

import React, { useContext } from "react";

const PropertiesContext = React.createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};
```

E agora podemos remover toda a lógica de dentro do `App.jsx` e deixar apenas o Provider

```jsx
// src/App.jsx

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedProperties from "./components/featured-properties";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";

export default function App() {
  return (
    <PropertiesProvider>
      <div>
        <Navbar />
        <Hero />
        <FeaturedProperties properties={properties} />
        <ContactForm />
        <Footer />
      </div>
    </PropertiesProvider>
  );
}
```

Por fim podemos criar um hook customizado para acessar o nosso Context

```jsx
export const useProperties = () => {
  const { properties, setProperties } = useContext(PropertiesContext);
  return { properties, setProperties };
};
```

Agora toda vez que formos acessar os dados do Context, ao invés de fazermos

```jsx
const { properties } = useContext(PropertiesContext);
```

Podemos fazer:

```jsx
const { properties } = useProperties();
```
