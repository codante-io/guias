---
title: Effects e chamadas de APIs
description: Vamos ver como usar effects para fazer chamadas de APIs
---

Além do estado, um outro conceito importante no React é o de effects. Effects são como efeitos colaterais, ou seja, ações que acontecem no componente quando algum dado é alterado no estado.

A sintaxe do effect é um pouco estranha no começo, mas com o tempo fica fácil de entender.

Para declarar um effect, usamos o `useEffect`.

```jsx
function App() {
  useEffect(() => {
    // ...
  }, [dependencies]);
}
```

## Como funciona o useEffect

O useEffect vai executar a função que você passar como primeiro argumento sempre que alguma variável que você passou como segundo argumento mudar.

```jsx
function funcaoASerExecutada() {
  // ...
}

const [algumEstado, setAlgumEstado] = useState(0);

useEffect(funcaoASerExecutada, [algumEstado]);
```

Se você passar mais valores no array de dependências, o useEffect vai executar a função sempre que qualquer um desses valores mudar.

```jsx
useEffect(funcaoASerExecutada, [algumEstado, outroEstado]);
```

### Regra importante: Effects (e hooks em geral) só podem ser usados dentro de componentes funcionais na função principal.

Os effects devem estar dentro do bloco principal da função do componente.

```jsx
// ✅ certo
function App() {
  useEffect(() => {
    // ...
  }, []);
}

// ❌ errado
function App() {
  if (something) {
    useEffect(() => {
      // ...
    });
  }
}

// ❌ errado
useEffect(() => {
  // ...
}, []);

function App() {}
```

## Chamadas de APIs

Uma funcionalidade comum do useEffect é fazer chamadas de APIs. O mais comum para buscar dados é fazer isso no momento em que a página é carregada.

Para fazer isso, usamos um array vazio como segundo argumento do `useEffect`.

```jsx
function App() {
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
}
```

Depois disso, precisamos salvar os dados em algum lugar. Você consegue imaginar como?

Exatamente! Usando o estado.

```jsx
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
}
```

## Simulando uma API na nossa aplicação

Até o momento, estávamos recebendo os dados dos imóveis de forma estática. Agora vamos simular uma API para buscar os dados de forma dinâmica.

Para simular nosso servidor, vamos criar um arquivo `.json` com os dados dos imóveis. Em um servidor real, esses dados provavelmente estaríamos salvos em um banco de dados.

Crie um arquivo chamado `properties.json` na pasta `src/data` e cole o seguinte conteúdo:

```json
// src/data/properties.json

[
  {
    "id": 1,
    "name": "Apartamento Moderno",
    "description": "Um belo apartamento moderno no centro da cidade",
    "location": "Centro",
    "price": 250000,
    "image": "src/assets/properties/1.webp",
    "featured": true
  },
  {
    "id": 2,
    "name": "Vila na Praia",
    "description": "Vila luxuosa com vista deslumbrante para o oceano",
    "location": "Área Costeira",
    "price": 750000,
    "image": "src/assets/properties/2.webp",
    "featured": true
  },
  {
    "id": 3,
    "name": "Casa de Campo",
    "description": "Espaçosa casa familiar com um grande quintal",
    "location": "Interior",
    "price": 480000,
    "image": "src/assets/properties/3.webp",
    "featured": false
  }
]
```

Agora vamos fazer o fetch dos dados no nosso componente App.

```jsx
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturedProperties from "./components/featured-properties";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

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

Com isso, nossa primeira versão da aplicação já está funcionando da forma como gostaríamos.

Parabéns! 🎉
