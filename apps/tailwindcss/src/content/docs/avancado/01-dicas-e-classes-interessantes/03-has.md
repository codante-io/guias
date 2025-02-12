---
title: has-*
---

A variante has-* permite estilizar um elemento com base na presença de um seletor dentro dele. Isso é útil para criar estilos condicionais sem a necessidade de JavaScript.

### Como usar

  1. Aplique has-* a um elemento pai.
  2. Dentro dos colchetes ([]), use um seletor CSS válido. Você pode também usar combinando com estados sem os colchetes, por exemplo `has-checked`.
  3. Defina os estilos desejados quando o seletor corresponder.

### Exercício

Neste exercício, você irá usar o `has` para que, ao selecionar um plano, o card tenha fundo `blue-50`, um ring tamanho `2` cor `blue-400`, border `blue-300`. Adicione transições para tudo ficar mais suave também

#### Código Inicial

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Subscription Plans</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      <div
        class="flex h-full flex-col justify-between rounded-lg border-2 border-gray-200 shadow-sm hover:border-gray-300"
      >
        <input type="radio" id="basic" name="plan" class="sr-only" />
        <label for="basic" class="h-full w-full cursor-pointer p-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Plano Básico</h3>
            <p class="mt-4 text-gray-500">
              Perfeito para pessoas que estão começando. Tenha acesso a recursos
              básicos e suporte.
            </p>
          </div>
          <p class="mt-4 text-2xl font-bold text-gray-700">
            $9.99<span class="text-base font-normal">/month</span>
          </p>
        </label>
      </div>

      <div
        class="flex h-full flex-col justify-between rounded-lg border-2 border-gray-200 shadow-sm hover:border-gray-300"
      >
        <input type="radio" id="pro" name="plan" class="sr-only" />
        <label for="pro" class="h-full w-full cursor-pointer p-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Plano Pro</h3>
            <p class="mt-4 text-gray-500">
              Ideal para profissionais e pequenas equipes. Aproveite recursos
              avançados e suporte prioritário.
            </p>
          </div>
          <p class="mt-4 text-2xl font-bold text-gray-700">
            R$24,99<span class="text-base font-normal">/mês</span>
          </p>
        </label>
      </div>

      <div
        class="flex h-full flex-col justify-between rounded-lg border-2 border-gray-200 shadow-sm hover:border-gray-300"
      >
        <input type="radio" id="enterprise" name="plan" class="sr-only" />
        <label for="enterprise" class="h-full w-full cursor-pointer p-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              Plano Enterprise
            </h3>
            <p class="mt-4 text-gray-500">
              Para grandes organizações que precisam de total personalização e
              suporte dedicado.
            </p>
          </div>
          <p class="mt-4 text-2xl font-bold text-gray-700">
            R$99,99<span class="text-base font-normal">/mês</span>
          </p>
        </label>
      </div>
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
    <title>Subscription Plans</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      <div
        class="flex h-full flex-col justify-between rounded-lg border-2 border-gray-200 shadow-sm transition-all duration-300 hover:border-gray-300 has-checked:border-blue-300 has-checked:bg-blue-50 has-checked:ring-2 has-checked:ring-blue-400"
      >
        <input type="radio" id="basic" name="plan" class="sr-only" />
        <label for="basic" class="h-full w-full cursor-pointer p-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Plano Básico</h3>
            <p class="mt-4 text-gray-500">
              Perfeito para pessoas que estão começando. Tenha acesso a recursos
              básicos e suporte.
            </p>
          </div>
          <p class="mt-4 text-2xl font-bold text-gray-700">
            $9.99<span class="text-base font-normal">/month</span>
          </p>
        </label>
      </div>

      <div
        class="flex h-full flex-col justify-between rounded-lg border-2 border-gray-200 shadow-sm transition-all duration-300 hover:border-gray-300 has-checked:border-blue-300 has-checked:bg-blue-50 has-checked:ring-2 has-checked:ring-blue-400"
      >
        <input type="radio" id="pro" name="plan" class="sr-only" />
        <label for="pro" class="h-full w-full cursor-pointer p-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">Plano Pro</h3>
            <p class="mt-4 text-gray-500">
              Ideal para profissionais e pequenas equipes. Aproveite recursos
              avançados e suporte prioritário.
            </p>
          </div>
          <p class="mt-4 text-2xl font-bold text-gray-700">
            R$24,99<span class="text-base font-normal">/mês</span>
          </p>
        </label>
      </div>

      <div
        class="flex h-full flex-col justify-between rounded-lg border-2 border-gray-200 shadow-sm transition-all duration-300 hover:border-gray-300 has-checked:border-blue-300 has-checked:bg-blue-50 has-checked:ring-2 has-checked:ring-blue-400"
      >
        <input type="radio" id="enterprise" name="plan" class="sr-only" />
        <label for="enterprise" class="h-full w-full cursor-pointer p-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              Plano Enterprise
            </h3>
            <p class="mt-4 text-gray-500">
              Para grandes organizações que precisam de total personalização e
              suporte dedicado.
            </p>
          </div>
          <p class="mt-4 text-2xl font-bold text-gray-700">
            R$99,99<span class="text-base font-normal">/mês</span>
          </p>
        </label>
      </div>
    </div>
  </body>
</html>


```
