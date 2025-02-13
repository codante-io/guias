---
title: Dark Mode
---

É bastante fácil implementar *dark mode* em nossa aplicação utilizando TailwindCSS. Após implementado - o que é extremamente simples - basta usar uma nova variante `dark:*` para estilizar o seu código quando o *dark mode* estiver ativo.

Note que o Tailwind é "light-first", ou seja, as classes utilitárias por padrão afetam o light mode. Para que elas tenham como alvo o *dark mode*, você precisa explicitamente adicionar a variante `dark`.

### Formas de ativação

Existem duas formas de "ativar" o *Dark Mode* em sua aplicação e fazer com que você consiga utilizar a classe utilitária

#### Media (padrão)

A primeira forma já vem por padrão. Ou seja, não é preciso fazer nada que a variante `dark` já irá funcionar.

#### Manualmente

Existem duas formas de ativar manualmente o *dark mode*. A primeira é adicionando uma classe `.dark` na tag `html` do seu código. A segunda é adicionando um data-attribute `[data-theme=dark]` no seu elemento `html`.

Para os dois casos precisamos sobrescrever a variante dark usando a diretiva `@custom-variant`.

##### Usando classe

```css
/* tailwind.css */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

##### Usando data-attribute

```css
/* tailwind.css */
@import "tailwindcss";
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

### Exercício

Implemente *dark mode* (i) de forma automática e depois (ii) de forma manual com um botão que, ao ser clicado, muda o tema para dark, e para light novamente. Estilize a página sensatamente.

Utilize o código inicial abaixo:

#### Código Inicial

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dark Mode</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="max-w-sm rounded-lg bg-white p-10 shadow">
      <h2 class="text-xl font-medium text-gray-700">🐕 Dingo, o cão feliz</h2>
      <p class="mt-6 font-light text-gray-500">
        O dingo, conhecido como o cão feliz, é um animal selvagem nativo da
        Austrália, famoso por sua agilidade e espírito livre.
      </p>
      <p class="mt-2 font-light text-gray-500">
        Com orelhas sempre em alerta e um sorriso que parece estampado no rosto,
        ele vive em harmonia com a natureza, explorando vastas paisagens em
        busca de caça.
      </p>
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
    <title>Dark Mode</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body
    class="flex min-h-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-900"
  >
    <div class="max-w-sm rounded-lg bg-white p-10 shadow dark:bg-gray-700">
      <h2 class="text-xl font-medium text-gray-700 dark:text-white">
        🐕 Dingo, o cão feliz
      </h2>
      <p class="mt-6 text-gray-500 dark:text-gray-400">
        O dingo, conhecido como o cão feliz, é um animal selvagem nativo da
        Austrália, famoso por sua agilidade e espírito livre.
      </p>
      <p class="mt-2 text-gray-500 dark:text-gray-400">
        Com orelhas sempre em alerta e um sorriso que parece estampado no rosto,
        ele vive em harmonia com a natureza, explorando vastas paisagens em
        busca de caça.
      </p>
    </div>
  </body>
</html>

```
