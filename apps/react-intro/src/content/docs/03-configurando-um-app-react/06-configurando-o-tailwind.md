---
title: Configurando o Tailwind
---

Instalar o Tailwind não tem mistério. Primeiro, vamos instalar as dependências necessárias:

```bash
npm install -D tailwindcss postcss autoprefixer
```

> A opção `-D` é para instalar as dependências apenas para o desenvolvimento. Essas dependências não são incluídas no build do projeto.

Depois disso, rodamos o comando para "iniciar" o Tailwind:

```bash
npx tailwindcss init -p
```

Você vai ver que esse comando criou um arquivo chamado `tailwind.config.js` na raiz do projeto.

Abra esse arquivo e adicione o seguinte conteúdo:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Com isso, você está dizendo ao Tailwind onde ele vai procurar os estilos que ele vai compilar. Caso você altere a estrutura de pastas, por exemplo, se você mude o `src` para `app`, você vai precisar alterar essa linha para `"./app/**/*.{js,ts,jsx,tsx}"`.

Depois disso, vá até o arquivo `./src/index.css` e adicione o seguinte conteúdo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Agora é só rodar o projeto e ver se está funcionando:

```bash
npm run dev
```

Para mais detalhes, consulte a [documentação oficial do Tailwind](https://tailwindcss.com/docs/guides/vite).
