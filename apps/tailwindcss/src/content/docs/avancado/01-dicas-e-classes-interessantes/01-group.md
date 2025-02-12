---
title: group-*
---

A gente já sabe que controlar o estado de um elemento, por exemplo, usando a variante `hover` é muito fácil com o TailwindCSS.

Mas e se quisermos controlar o estado de um elemento baseado em outro elemento? Nesse caso precisamos recorrer ao `group-*` ou ao `peer-*` ou ao `in-*`.

### Exercício

Neste exercício, você irá aprimorar um card de produto adicionando interatividade ao passar o mouse sobre a imagem. O objetivo é criar um efeito de zoom na imagem e exibir um botão "Adicione ao Carrinho" que deverá aparecer centralizado acima da imagem. Se quiser, use animações para deixar tudo mais suave.

#### Código Inicial

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 02</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <div class="">
        <img
          src="./product.jpg"
          alt="Relógio"
          class="h-auto w-full object-cover"
        />
      </div>
      <footer class="p-4">
        <h3 class="text-xl font-semibold text-gray-800">Relógio Coder</h3>
        <p class="mt-2 text-lg font-bold text-gray-600">R$ 99,99</p>
        <p class="mt-2 text-sm text-gray-500">
          Este é um relógio muito especial que traz snippets de código
          diretamente no seu pulso!
        </p>
      </footer>
    </div>
  </body>
</html>

```

#### Código Final

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 02</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div
      class="group w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <div class="relative overflow-hidden">
        <img
          src="./product.jpg"
          alt="Relógio"
          class="h-auto w-full object-cover transition-transform group-hover:scale-125"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-gray-300/90 opacity-0 transition-all group-hover:opacity-100"
        >
          <button
            class="invisible h-fit w-fit translate-y-10 cursor-pointer rounded-full bg-black px-4 py-2 text-white opacity-0 transition-all group-hover:visible group-hover:translate-0 group-hover:opacity-100"
          >
            Adicione ao Carrinho
          </button>
        </div>
      </div>
      <footer class="p-4">
        <h3 class="text-xl font-semibold text-gray-800">Relógio Coder</h3>
        <p class="mt-2 text-lg font-bold text-gray-600">R$ 99,99</p>
        <p class="mt-2 text-sm text-gray-500">
          Este é um relógio muito especial que traz snippets de código
          diretamente no seu pulso!
        </p>
      </footer>
    </div>
  </body>
</html>
```

## Nomeando grupos

Imagine agora que você precisa usar mais de um grupo diferente no seu código - o Tailwind não tem como saber com qual grupo você está trabalhando. Isso é possível de ser resolvido nomeando os grupos

A sintaxe de grupos nomeados é `group/nome`, em que nome pode ser qualquer identificador. Para usar uma variante de hover do grupo, a sintaxe é: `group-hover/nome:*`

## A variante `in-*`

A variante `in-*` tem o funcionamento igual ao do `group`. A única diferença é que ela funciona com o estado do(s) elemento(s) pai. Não dá para
