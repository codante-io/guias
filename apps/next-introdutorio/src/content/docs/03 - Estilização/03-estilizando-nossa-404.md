---
title: Estilizando nossa 404
---

Vamos então começar a estilização de nossa aplicação.

## Fontes no TailwindCSS v4

Uma das primeiras coisas que vamos fazer é estilizar as fontes. No Figma percebemos que utilizamos basicamente 2 fontes na nossa aplicação:

- Inter (textos, links, etc)
- Maven Pro (títulos e logo)

Para isso, vamos importar no topo do `app/globals.css` a fonte `Maven Pro`:

```css title="app/globals.css"
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap');
```

Feito isso, ainda no `globals.css`, vamos adicionar dentro da diretiva `@theme` nossa fonte que terá o nome de "display":

```css title="app/globals.css"
@theme {
  --font-display: 'Maven Pro', cursive;
  /* ... */
```

Pronto, agora automaticamente o TailwindCSS irá criar a classe `font-display` a qual podemos utilizar na nossa aplicação.

## Estilizando a página Not Found

Vamos estilizar a nossa página 404 para ficar um pouco mais agradável.

```typescript title="app/not-found.tsx"
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto py-20 text-center">
      <h2 className="text-4xl font-display font-black ">
        Nada encontrado aqui...
      </h2>
      <img
        className="mx-auto w-sm"
        src="/boat.png"
        alt="ilustração de um barco"
      />
      <p className="text-3xl font-extralight text-gray-400">
        Não foi possível encontrar a página solicitada.
      </p>
      <a
        className={cn('mt-10 block', buttonVariants({ variant: 'default' }))}
        href="/"
      >
        Voltar à Home
      </a>
    </main>
  );
}
```

### Observações

Algumas observações a serem feitas sobre este código:

1. Mudei um pouco os textos para deixar mais "agradável".
2. Perceba que a fonte do nosso h2 está com a classe `font-display`. Isso faz com que seja aplicada nossa fonte `Maven pro` que havíamos configurado.
3. Estamos usando a função utilitária `cn()`. Como já disse antes, isso facilitará em muito fazermos a composição de classes do TailwindCSS. Na dúvida, em qualquer estrutura mais complexa de classes, use o `cn()`.
4. Estamos usando também uma função `buttonVariants`. Isso é do `shadcn`. O botão padrão dele exporta essa função que faz com que possamos usar os estilos do botão em outros elementos *html*. Nesse caso estamos usando a estilização em uma tag `<a></a>`

Bom, eu gostei do resultado final. Claro que há algumas coisas que podemos fazer para melhorar aqui. Mas, no geral, ficou bom! 😁
