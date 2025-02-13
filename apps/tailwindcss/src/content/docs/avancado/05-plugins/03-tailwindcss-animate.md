---
title: TailwindCSS Animate
---

O plugin Typography do Tailwind CSS fornece estilos padronizados para conteúdos de texto, como artigos e posts de blogs. Ele aplica classes utilitárias predefinidas a elementos HTML comuns (p, h1, h2, ul, ol, etc.), garantindo que o texto tenha uma aparência consistente.

O **problema que este plugin resolve** é a estilização de texto dinâmico e que muitas vezes não sabemos a estrutura (vem de um CMS, por exemplo).

Para utilizar, precisamos registrar o plugin:

```css
@plugin "@tailwindcss/typography";
```

### Versão 04 do TailwindCSS

No momento da gravação do Workshop, o plugin é plenamente funcional com a versão 4, mas não é extensível. Para estender funcionalidades, é necessário utilizar o arquivo de configurações `tailwind.config.js`.

![alt text](image.png)

### Funcionamento

Para utilizar o plugin, após a instalação, basta utilizarmos a classe `prose` em nosso container de texto.

### Exercício

Transforme este código *html* em um post de blog com o mínimo esforço usando o plugin `typography` do TailwindCSS.

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
    <div class="mx-auto rounded-lg bg-white p-10 shadow">
      <h1 id="dingo-o-cachorro-feliz">Dingo, o Cachorro Feliz</h1>
      <p>
        Dingo é um cachorro que espalha alegria por onde passa. Com seu pelo
        dourado brilhando ao sol e seu rabo sempre abanando, ele conquistou o
        coração da vizinhança. Todos os dias, Dingo sai para suas caminhadas
        matinais, cumprimentando crianças, idosos e até outros animais com sua
        energia contagiante.
      </p>

      <img src="./dingo-dog.png" alt="" srcset="" />
      <h2 id="o-segredo-da-felicidade-canina">
        O Segredo da Felicidade Canina
      </h2>
      <p>
        O que faz Dingo tão especial é sua simplicidade: ele encontra felicidade
        nas pequenas coisas. Como ele mesmo &quot;diria&quot; se pudesse:
      </p>
      <blockquote>
        <p>A felicidade está nas coisas simples da vida.</p>
      </blockquote>
      <h2 id="pequenos-prazeres-do-dingo">Pequenos Prazeres do Dingo</h2>
      <p>
        Dingo nos ensina que a vida pode ser leve e cheia de momentos felizes se
        soubermos apreciar o que temos. Suas atividades favoritas incluem:
      </p>
      <ul>
        <li>Brincar com uma bolinha jogada</li>
        <li>Receber um afago atrás da orelha</li>
        <li>Tomar um banho de mangueira em um dia quente</li>
      </ul>
      <h2 id="encontro-com-o-embaixador-da-felicidade">
        Encontro com o Embaixador da Felicidade
      </h2>
      <h3 id="como-reconhecer-o-dingo">Como Reconhecer o Dingo</h3>
      <p>
        Se você cruzar com Dingo em algum dia ensolarado, saiba que estará
        diante de um verdadeiro embaixador da felicidade canina. Ele será aquele
        cachorro com:
      </p>
      <ul>
        <li>Pelo dourado brilhando ao sol</li>
        <li>Rabo sempre abanando</li>
        <li>Sorriso canino no rosto</li>
      </ul>
      <h3 id="o-que-esperar-do-encontro">O Que Esperar do Encontro</h3>
      <p>
        E quem sabe ele não te arranque um sorriso também? Afinal, como dizem
        por aí:
      </p>
      <blockquote>
        <p>Um cachorro feliz é capaz de alegrar o dia de qualquer pessoa.</p>
      </blockquote>
    </div>
  </body>
</html>
```

#### Código Final

Primeiro, precisamos instalar o plugin com o comando `npm i @tailwindcss/typography`. Em seguida, devemos registrar nosso plugin:

```css
@plugin '@tailwindcss/typography';
```

Por fim, vamos alterar o código e incluir a classe prose:

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
    <div
      class="prose prose-sm prose-img:rounded-4xl prose-slate mx-auto rounded-lg bg-white p-10 shadow"
    >
      <h1 id="dingo-o-cachorro-feliz">Dingo, o Cachorro Feliz</h1>
      <p>
        Dingo é um cachorro que espalha alegria por onde passa. Com seu pelo
        dourado brilhando ao sol e seu rabo sempre abanando, ele conquistou o
        coração da vizinhança. Todos os dias, Dingo sai para suas caminhadas
        matinais, cumprimentando crianças, idosos e até outros animais com sua
        energia contagiante.
      </p>

      <img src="./dingo-dog.png" alt="" srcset="" />
      <h2 id="o-segredo-da-felicidade-canina">
        O Segredo da Felicidade Canina
      </h2>
      <p>
        O que faz Dingo tão especial é sua simplicidade: ele encontra felicidade
        nas pequenas coisas. Como ele mesmo &quot;diria&quot; se pudesse:
      </p>
      <blockquote>
        <p>A felicidade está nas coisas simples da vida.</p>
      </blockquote>
      <h2 id="pequenos-prazeres-do-dingo">Pequenos Prazeres do Dingo</h2>
      <p>
        Dingo nos ensina que a vida pode ser leve e cheia de momentos felizes se
        soubermos apreciar o que temos. Suas atividades favoritas incluem:
      </p>
      <ul>
        <li>Brincar com uma bolinha jogada</li>
        <li>Receber um afago atrás da orelha</li>
        <li>Tomar um banho de mangueira em um dia quente</li>
      </ul>
      <h2 id="encontro-com-o-embaixador-da-felicidade">
        Encontro com o Embaixador da Felicidade
      </h2>
      <h3 id="como-reconhecer-o-dingo">Como Reconhecer o Dingo</h3>
      <p>
        Se você cruzar com Dingo em algum dia ensolarado, saiba que estará
        diante de um verdadeiro embaixador da felicidade canina. Ele será aquele
        cachorro com:
      </p>
      <ul>
        <li>Pelo dourado brilhando ao sol</li>
        <li>Rabo sempre abanando</li>
        <li>Sorriso canino no rosto</li>
      </ul>
      <h3 id="o-que-esperar-do-encontro">O Que Esperar do Encontro</h3>
      <p>
        E quem sabe ele não te arranque um sorriso também? Afinal, como dizem
        por aí:
      </p>
      <blockquote>
        <p>Um cachorro feliz é capaz de alegrar o dia de qualquer pessoa.</p>
      </blockquote>
    </div>
  </body>
</html>

```
