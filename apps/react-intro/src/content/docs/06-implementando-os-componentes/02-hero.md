---
title: Hero
description: Implementando o componente Hero
---

Agora vamos implementar o componente Hero. Essa palavra "hero" foi popularizada pelo Bootstrap e geralmente é usada para descrever o componente principal de uma página, como uma imagem grande com um título e uma descrição.

Vamos alterar o arquivo `src/components/hero.jsx` para adicionar a imagem e os estilos.

```jsx
// src/components/hero.jsx

function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-gray-700">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Encontre a Casa dos Seus Sonhos
            </h1>
            <p className="text-xl mb-8">
              Descubra o imóvel perfeito com a ReactImóveis
            </p>
            <button className="bg-emerald-400 text-white px-4 py-2 rounded-md">
              Ver imóveis
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="src/assets/hero.webp"
              alt="Casa dos sonhos"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
```

Repare que o componente utiliza uma imagem que está no diretório `src/assets/hero.webp`.

![Hero](../../../assets/hero.webp)

Faça o download dessa imagem a partir do Figma e coloque na pasta `src/assets`.

> O Figma por padrão exporta as imagens em formato png. Você pode converter e otimizar as imagens usando uma ferramenta como o [Squoosh](https://squoosh.app/).

Agora sua aplicação deve ter um componente Hero.

![Hero](../../../assets/hero-impl.png)
