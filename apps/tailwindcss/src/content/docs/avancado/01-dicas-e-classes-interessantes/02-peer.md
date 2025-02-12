---
title: peer-*
---

O peer funciona de maneira semelhante ao group, permitindo alterar o estilo de um elemento com base no estado de outro. A diferença é que, enquanto o group atua no contexto de um elemento pai, o peer se aplica a elementos irmãos.

Para usar o `peer`:

 1. Adicione a classe peer ao elemento que servirá como referência para o estado.
 2. Use peer-* nos elementos irmãos para estilizar com base no estado do peer.

### Exemplo

```html
<input type="checkbox" class="peer hidden" id="toggle" />
<label for="toggle" class="cursor-pointer">Mostrar</label>
<p class="hidden peer-checked:block">Texto visível quando marcado</p>
```

### Exercício

Neste exercício, você deverá "melhorar" o `input` mostrado. O objetivo é exibir uma mensagem de ajuda embaixo do input quando o usuário clica nele. A mensagem deverá ser: 'Digite sua fruta favorita acima'

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
    <div class="w-64">
      <label
        class="mb-2 block text-sm font-medium text-gray-700"
        for="fruta-favorita"
      >
        Sua fruta favorita
      </label>
      <input
        type="text"
        id="fruta-favorita"
        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Banana, maçã..."
      />
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
    <div class="w-64">
      <label
        class="mb-2 block text-sm font-medium text-gray-700"
        for="fruta-favorita"
      >
        Sua fruta favorita
      </label>
      <input
        type="text"
        id="fruta-favorita"
        class="peer w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Banana, maçã..."
      />
      <p class="invisible mt-2 text-sm text-blue-600 peer-focus:visible">
        Digite sua fruta favorita acima.
      </p>
    </div>
  </body>
</html>

```
