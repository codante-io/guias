---
title: Instalando o React com Vite
description: Vamos iniciar a construção da aplicação enquanto aprendemos os conceitos básicos do React
---

Agora que você já sabe que para o React funcionar você precisa de um "bundler" e uma ferramenta para _transpilar_ JSX para JS, vamos utilizar o Vite para fazer tudo isso.

## Instalando o React com o Vite

Toda essa etapa está documentada oficialmente no [site do Vite](https://vite.dev/guide/), mas vamos demonstrar o passo a passo aqui.

Vamos utilizar o npm, portanto você precisa ter o Node.js instalado.

1. Primeiro, crie e navegue até o diretório do seu projeto, no nosso caso, vou usar o mesmo repositório que criamos no início do workshop, porém em outra _branch_ do Git.

```bash
cd workshop-react
git checkout main
git checkout -b app-imobiliaria
```

Verifique se não há nenhum arquivo na pasta, caso tenha, você pode exclui-lo.

2. Agora vamos rodar o comando do Vite para criar o projeto.

```bash
npm create vite@latest . -- --template react
```

Observe que a opção `.` indica que o Vite vai criar o projeto na pasta atual e o `--template react` indica que vamos utilizar o template de React. O Vite pode criar projetos com outros templates, como por exemplo, o template de Vue.

Esse comando vai criar uma série de arquivos e diretórios no seu projeto. Em breve vamos entender o que cada um desses arquivos faz.

3. Agora, antes de rodar o projeto, primeiro você precisa instalar as dependências.

```bash
npm install
```

Esse comando vai baixar todas as dependências do projeto e instalar no seu `node_modules`, por isso pode demorar um pouco.

4. Agora, para rodar o projeto, você pode usar o comando:

```bash
npm run dev
```

Com isso seu projeto estará rodando e disponível para acessar no seu navegador a partir do endereço: [http://localhost:5173](http://localhost:5173).

A porta `5173` é a porta padrão do Vite, mas você pode alterar para qualquer outra porta livre que você quiser.

Agora, vamos explorar um pouco os arquivos padrões que o Vite cria.
