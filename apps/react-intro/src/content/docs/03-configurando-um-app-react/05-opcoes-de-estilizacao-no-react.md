---
title: Opções de estilização no React
description: Vamos conhecer as possibilidades de estilização do React
---

Como explicado no início do workshop, o React não possui uma solução padrão para estilização, abrindo a possibilidade de escolher entre várias opções.

Por padrão, o Vite já traz uma configuração para lidar com o CSS, implementando o PostCSS por trás dos panos. Isso permite que você crie qualquer arquivo CSS e importe em seus componentes.

Por exemplo:

```css
/* src/components/Button/styles.css */
.button {
  background-color: #f0f0f0;
}
```

```jsx
// src/components/Button/index.jsx
import "./styles.css";

export default function Button() {
  return <button className="button">Clique aqui</button>;
}
```

Você pode também utilizar o CSS Modules, que é uma técnica que permite que você crie classes CSS específicas para cada componente, evitando conflitos de nomes. Basta renomear o arquivo CSS para `styles.module.css` e o Vite cuidará do resto.

Se você quiser se aprofundar mais sobre como o Vite lida com o CSS, você pode ler a [documentação oficial](https://vite.dev/guide/features.html#css).

## Outras alternativas

É sabido que o CSS pode ser um gargalo quando sua aplicação cresce, tendo em vista que gerenciar os estilos e nomes de classes vai ficando cada vez mais complexo.

Para isso existem outras alternativas. Muitas empresas ainda usam [styled-components](https://styled-components.com/) (ou outras opções de CSS-in-JS), apesar de estar sendo cada vez menos utilizado, já que o CSS nativo está cada vez mais poderoso em conjunto com o Tailwind que vem crescendo bastante.

Aqui não existe certo ou errado, cada escolha terá suas vantagens e desvantagens. É importante ter uma postura de entender e saber lidar com isso. Por exemplo, se você está em uma empresa com um projeto que já existe há mais de 5 anos usando styled-components, você não vai querer ser a pessoa que vai chegar criticando e falando que Tailwind é melhor.

Muito provavelmente, existe um bom motivo para que a empresa ainda esteja utilizando essa tecnologia, mesmo que o motivo seja apenas "porque está funcionando e não é uma prioridade mudar isso agora".

Sendo assim, é interessante saber das possibilidades e até ter suas preferências, mas também saber lidar com as escolhas já existentes.

A minha preferência pessoal, e o que vamos utilizar neste workshop, é o Tailwind.
