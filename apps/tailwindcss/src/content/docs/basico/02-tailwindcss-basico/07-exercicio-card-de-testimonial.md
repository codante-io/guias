---
title: Exercício 04 - Card de Depoimento
---

Vamos fazer agora, do zero, um Card de Depoimento, que é um componente bastante usual em desenvolvimento web. Sem muitas delongas, o  card é esse abaixo:

![Card de Testimonial](image-10.png)

Você pode também abrir diretamente no Figma para inspecionar cores e fontes.

[Link do Figma](https://www.figma.com/design/eZhlJehlg7pQNTb2ghaKmt/TailwindCSS---Exerc%C3%ADcios?node-id=3-27&m=dev&t=kDraca2deIecUPoQ-1)

### Código Inicial

Comece com esse código abaixo:

```html
<!-- exercicios/04-inicio.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 04</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center">
    Exercício 04 - Card de Depoimento
  </body>
</html>
```

#### Resolução

A resolução proposta está abaixo:

```html
<!-- exercicios/04-final.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exercício 04</title>
    <link href="../tailwind.css" rel="stylesheet" />
  </head>
  <body class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="font-display1 max-w-sm rounded-2xl bg-white p-10 shadow-2xl">
      <h3 class="text-xl font-medium text-gray-800">
        "O Codante mudou minha vida"
      </h3>
      <p class="mt-4 text-gray-500">
        Codante me deu as ferramentas para finalmente realizar meu sonho de
        abrir a Doggo Academy. Agora, posso usar a tecnologia para ajudar ainda
        mais cães a encontrar seus lares perfeitos!
      </p>
      <footer class="mt-10 flex gap-4">
        <img src="./avatar.png" alt="" />
        <div>
          <p class="font-medium text-gray-800">Dingo Cestari</p>
          <p class="text-gray-500">CEO na Doggo Academy</p>
        </div>
      </footer>
    </div>
  </body>
</html>

```
