---
title: Planejando os componentes
description: Vamos analisar o app que vamos construir e planejar nossos primeiros componentes
---

Agora que você já tem uma noção do que são os componentes, vamos analisar o design que temos e pensar quais serão os componentes que vamos precisar.

🔗 [Design no Figma](https://www.figma.com/community/file/1432049109831051738)

![Design da aplicação](../../../assets/app.webp)

## Exercício

Tente definir quais serão os componentes que vamos precisar para construir a aplicação.

## Resposta

A estratégia que eu gosto de usar para pensar em páginas desse tipo é dividir em seções.

De cara, já podemos identificar algumas seções:

- Navbar
- Hero
- Imóveis em Destaque
- Entre em contato
- Footer

Então já consigo imaginar que a estrutura do meu `App.jsx` vai ser algo assim:

```jsx
// App.jsx

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImoveisEmDestaque />
      <EntreEmContato />
      <Footer />
    </div>
  );
}
```

Um padrão que eu gosto de seguir e indico você fazer o mesmo é utilizar o nome dos componentes em inglês.

Então vamos trocar para

```jsx
// App.jsx

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <ContactForm />
      <Footer />
    </div>
  );
}
```

> **OBS:** Esses códigos são em JSX, em breve vamos explorar mais sobre ele.

Outro componente que já consigo visualizar é o "card" de cada imóvel. Esse é um clássico exemplo de reutilização de componentes. Se você tem uma lista com vários itens que compartilham uma estrutura parecida, é bem provável que vai fazer sentido criar um componente para isso.

Então já podemos pensar em ter o nosso `PropertyCard.jsx`.

Agora vamos criar os arquivos para cada componente e adicioná-los no `App.jsx`.
