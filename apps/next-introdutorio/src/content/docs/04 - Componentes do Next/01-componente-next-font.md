---
title: O Componente de Fontes `next/font`
---


O componente `next/font` pode ser utilizado tanto com **fontes do Google** quanto com **fontes locais**.

A principal função do componente de fontes do Next.js é otimizar a performance, já que fontes, quando não utilizadas corretamente, podem se tornar um gargalo em aplicações web.

## Adicionando ao Nosso Projeto

1. Começaremos importando a fonte desejada de `next/font`, no arquivo `app/layout.tsx`:

2. Em seguida, criaremos uma variável, por exemplo, `mavenPro`, que conterá as configurações desejadas. O parâmetro `subsets` define quais conjuntos de caracteres serão incluídos. Por exemplo, pode não ser necessário importar letras gregas, mas caracteres acentuados (`é`, `ã`, etc.) e cedilha são importantes. Para isso, utilizaremos `latin` como *subset*.

3. **Utilizando com TailwindCSS**: Nesta variável, também definiremos qual variável CSS será utilizada para a nossa fonte. Neste caso, nomearemos a nossa variável CSS como `--font-maven-pro`.

4. Adicionaremos essa variável à tag `<html>` do nosso projeto:

```typescript
// ...
import { Maven_Pro } from "next/font/google";
// ...

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

// ...
  return (
    <html lang="en" className={mavenPro.variable}>
    </html>
  )
// ...
```

<!-- markdownlint-disable-next-line -->
5. Agora, vamos aplicar a fonte no nosso arquivo `globals.css`:

```css
@theme {
  --font-display: var(--font-maven-pro), cursive;
}
```

<!-- markdownlint-disable-next-line -->
6. Podemos remover as importações do Google Fonts, caso existam.

Ótimo! Agora podemos utilizar qualquer fonte do Google Fonts. O mais interessante é que ela estará hospedada juntamente com os arquivos estáticos do nosso projeto, eliminando a necessidade de chamadas ao servidor do Google quando a aplicação estiver em execução.

A [API oficial](https://nextjs.org/docs/app/api-reference/components/font#variable) oferece muitos outros detalhes e vale a pena consultá-la.
