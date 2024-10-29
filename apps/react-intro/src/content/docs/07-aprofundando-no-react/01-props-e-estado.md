---
title: Props e Estado
description: Entendendo as diferenças entre props e estado
---

Como aprendemos no capítulo anterior, as `props` são as "características" de um componente. Vamos aprofundar mais nesse conceito.

## Props

No React, todos os componentes podem receber `props` como argumentos. Essas `props` são passadas para o componente como atributos HTML.

```jsx
function MyComponent(props) {
  return <div>{props.name}</div>;
}

<MyComponent name="Maria" />;
```

### Imutabilidade

Existem algumas regras quando utilizamos props e a principal delas é que **props são imutáveis**.

Você não pode fazer o seguinte:

```jsx
// ❌ errado
function MyComponent(props) {
  props.name = "João";

  return <div>{props.name}</div>;
}
```

### As props podem ser qualquer valor JavaScript

Props podem ser de qualquer tipo de valor JavaScript, como números, strings, booleanos, arrays, objetos, funções, etc.

Por exemplo:

```jsx
const fruits = ["banana", "maçã", "laranja"];

<FruitsList fruits={fruits} />;
```

### As props são passadas de "pai" para "filho"

As props "navegam" de cima para baixo, ou seja, de um componente pai para um componente filho. Não é possível passar props de um componente filho para um componente pai.

```jsx
// src/app.jsx
function App() {
  return (
    <div>
      <FeaturedProperties properties={properties} />

      <div>
        <h1>Preço do imóvel mais caro:</h1>

        <p>{/* propertyPrice */}</p>
      </div>
    </div>
  );
}

// src/components/featured-properties.jsx
function FeaturedProperties({ properties }) {
  return (
    <div>
      {properties.map((property) => (
        <PropertyCard property={property} />
      ))}
    </div>
  );
}

// src/components/property-card.jsx
function PropertyCard({ property }) {
  const propertyPrice = `R$ ${property.price.toFixed(2).replace(".", ",")}`;

  return <div>{property.name}</div>;
}
```

Se precisarmos que o componente filho "converse" com o componente pai, precisaríamos utilizar estratégias diferentes, como passar uma função que altera o estado do componente pai ou então utilizar o Context API ou alguma lib como o Redux.

Por falar em estado, vamos entender um pouco mais sobre ele.

## Estado

Enquanto as props definem as características de um componente, o estado define o "momento" em que o componente está.

Como falamos antes, as props não podem ser alteradas, mas o estado pode. Então o estado é a forma correta de armazenar dados que podem mudar durante a execução do componente.

Voltando ao exemplo do corpo humano, é como se as `props` fossem o DNA e o estado fosse como a pessoa está no momento. Por exemplo, a pessoa pode ter olhos castanhos, mas pode colocar uma lente e ficar com olhos azuis.

Seria algo como:

```jsx
// src/app.jsx
function Pessoa({ corDosOlhos }) {
  const [corAtual, setCorAtual] = useState("azul");

  return (
    <div>
      Cor dos olhos: {corDosOlhos} - Cor atual: {corAtual}
    </div>
  );
}
```

Para lidar com o estado, utilizamos o hook `useState`. Esse hook retorna um array com dois valores: o primeiro é o estado atual e o segundo é uma função para atualizar o estado. Além disso, o estado inicial é passado como argumento para o hook.

### O algoritmo do React

Conforme falamos um pouco no início do workshop, o React possui um algoritmo que determina quando os componentes serão renderizados. Por padrão, a cada vez que o estado dentro de um componente é alterado, esse componente é re-renderizado.

Quando um componente é renderizado, todos os seus filhos também são renderizados.

## Incluindo estado na nossa aplicação

Na nossa aplicação, estávamos pegando os dados de imóveis de forma estática, direto no arquivo. Mas em uma aplicação real, esses dados geralmente são buscados de uma API. Vamos implementar uma simulação de API em breve, mas primeiro vamos salvar os dados em um estado.

```jsx
// src/App.jsx

const initialProperties = [
  {
    id: 1,
    name: "Apartamento Moderno",
    description: "Um belo apartamento moderno no centro da cidade",
    location: "Centro",
    price: 250000,
    image: "src/assets/properties/1.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Vila na Praia",
    description: "Vila luxuosa com vista deslumbrante para o oceano",
    location: "Área Costeira",
    price: 750000,
    image: "src/assets/properties/2.webp",
    featured: true,
  },
  {
    id: 3,
    name: "Casa de Campo",
    description: "Espaçosa casa familiar com um grande quintal",
    location: "Interior",
    price: 450000,
    image: "src/assets/properties/3.webp",
    featured: false,
  },
];

function App() {
  const [properties, setProperties] = useState(initialProperties);

  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProperties properties={properties} />
      <ContactForm />
      <Footer />
    </div>
  );
}
```
