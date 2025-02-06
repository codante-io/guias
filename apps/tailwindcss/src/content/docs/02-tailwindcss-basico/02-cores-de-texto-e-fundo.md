---
title: Cores de Texto e Fundo
---

O "Hello World" de qualquer CSS é mudar a cor - seja da borda, seja do fundo/background.

- Para mudar a cor do fundo, usamos a classe: `bg-*`.
- Para mudar a cor do texto, usamos a classe `text-*`.
- Para mudar a cor de uma borda, usamos a classe `border-*`.

Lembre-se de que essas classes devem ser utilizadas em conjunto com as cores, por exemplo, `bg-red-500`.

A documentação mostra todas as classes que usam cores [neste link](https://tailwindcss.com/docs/colors#using-color-utilities):

![alt text](image-5.png)

### Exercício 02

Temos dois botões e precisamos deixá-los iguais ao design do nosso Figma [link](https://www.figma.com/design/eZhlJehlg7pQNTb2ghaKmt/TailwindCSS---Exerc%C3%ADcios?node-id=0-1&m=dev&t=kDraca2deIecUPoQ-1):

![alt text](image-4.png)

Copie e cole o código abaixo em um arquivo novo chamado `exercicios/02-inicio.html`. Lembrando que estamos usando a configuração do Vite usado no início do Workshop.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 02</title>
    <link href="../tailwind.css" rel="stylesheet" />
    <!-- Referencie aqui o TailwindCSS -->
  </head>
  <body class="flex min-h-screen items-center justify-center">
    <div class="flex gap-4 px-10 py-6">
      <button class="px-6 py-2">Inscreva-se</button>
      <button class="px-6 py-2">Sair</button>
    </div>
  </body>
</html>
```

### Resolução do Exercício 02

Esse exercício é bem simples, veja o código abaixo:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 02</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="flex gap-4 rounded bg-white px-10 py-6">
      <button class="rounded bg-fuchsia-800 px-6 py-2 text-white">
        Inscreva-se
      </button>
      <button
        class="rounded border border-fuchsia-300 bg-fuchsia-200 px-6 py-2 text-fuchsia-900"
      >
        Sair
      </button>
    </div>
  </body>
</html>

```
<!-- TODO: Fazer -->
