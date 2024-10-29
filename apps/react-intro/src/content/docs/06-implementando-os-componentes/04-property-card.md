---
title: PropertyCard
description: Implementando o componente PropertyCard
---

Agora vamos implementar o componente `PropertyCard` que vai exibir cada imóvel de forma mais detalhada.

Vamos começar criando o arquivo `src/components/property-card.jsx`.

```jsx
// src/components/property-card.jsx

function PropertyCard() {
  return (
    <div>
      <h1>PropertyCard</h1>
    </div>
  );
}

export default PropertyCard;
```

Já sabemos que esse componente vai receber suas informações de seu componente pai, portanto vamos precisar usar props. Vamos avaliar quais informações são necessárias nesse componente:

![PropertyCard](../../../assets/property-card.png)

Temos um `título`, uma `imagem`, uma `descrição`, `localização`, `preço` e uma badge informando se é um imóvel "em destaque".

Esse é um exemplo perfeito para exemplificar as props de componentes. Observe que a estrutura de cada card do imóvel é a mesma, mas suas informações mudam de acordo com cada imóvel.

É exatamente para isso que servem as props. Elas vão "personalizar" o componente com as informações específicas.

Vamos relembrar o exemplo do corpo humano?

Imagine que cada parte do corpo é um componente. Esse componente pode ter propriedades que vão definir características específicas de cada parte. Por exemplo:

- O `cabelo` pode ser `crespo`, `liso`, `ondulado`, etc.
- As `olhos` podem ser `azuis`, `castanhos`, `verdes`, etc.

Voltando para o `PropertyCard`, cada propriedade que ele recebe vai definir uma característica específica de cada imóvel.

```jsx
// src/components/property-card.jsx

function PropertyCard({ name, image, description, location, price, featured }) {
  return <div>{/* componente */}</div>;
}

export default PropertyCard;
```

Um detalhe interessante é que da mesma forma que podemos passar as props separadamente, podemos também passar o objeto inteiro.

```jsx
// src/components/property-card.jsx

function PropertyCard({ property }) {
  return <div>{/* componente */}</div>;
}
```

Essa é mais uma das coisas que não tem um "certo ou errado". No primeiro caso, fica mais verboso, porém mais fácil de entender. No segundo caso, fica mais curto, porém pode ser mais difícil de entender.

Com o TypeScript, eu tendo a preferir a segunda opção, porque com o tipo das props, fica fácil de saber o que tem dentro de cada objeto. No nosso caso, vou preferir a primeira opção para deixar mais explícito.

Então vamos continuar com a primeira opção.

```jsx
// src/components/property-card.jsx

import { MapPin } from "lucide-react";

function PropertyCard({ name, image, description, location, price, featured }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-emerald-500">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-600">{name}</h3>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-emerald-500" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-emerald-600">
            R$ {price.toLocaleString()}
          </span>
          {featured && (
            <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full">
              Destaque
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
```

Repare que estamos utilizando renderização condicional para exibir a badge de "Destaque" caso o imóvel seja um destaque.

## Usando o componente PropertyCard

Agora vamos voltar no componente `FeaturedProperties` e utilizar o `PropertyCard` para exibir cada imóvel.

```jsx
// src/components/featured-properties.jsx

import PropertyCard from "./property-card";

function FeaturedProperties({ properties }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Imóveis em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              name={property.name}
              description={property.description}
              location={property.location}
              price={property.price}
              featured={property.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
```

O primeiro detalhe importante aqui é a propriedade `key`. Toda vez que criamos uma lista de componentes, precisamos informar uma chave única para cada componente. Isso é importante para o React saber quais componentes foram adicionados, modificados ou removidos.

Lembra do algoritmo de reconciliação do React que comentamos anteriormente? Esse `key` vai ser utilizado exatamente para ajudar esse algoritmo a montar o `diff` do DOM. Por isso é importante que seja um valor único.

### Dica: desestruturação de objetos

Uma dica interessante é que podemos desestruturar o objeto diretamente nas props, caso as propriedades do objeto sejam as mesmas das props do componente.

```jsx
// src/components/featured-properties.jsx

import PropertyCard from "./property-card";

function FeaturedProperties({ properties }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Imóveis em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
```

Para finalizar essa etapa, lembre-se de adicionar as imagens dos imóveis na pasta `src/assets/properties`.
