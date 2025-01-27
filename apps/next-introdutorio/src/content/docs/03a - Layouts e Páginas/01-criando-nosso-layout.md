---
title: Criando um Layout
---


Criar layouts no Next.js é fácil. Os layouts são orientados para a composição. Ou seja, você pode ter vários layouts aninhados de seções diferentes de sua aplicação.

- Para criar um layout, devemos utilizar o nome `layout.tsx` para nosso arquivo.
- Se o arquivo estiver na raiz da pasta `app`, ele será um layout global. Se estiver dentro de alguma subpasta, será um layout localizado.

## Criando um Layout para nossa Aplicação

No caso específico da CodanteVagas, em todas as páginas exibimos o menu superior (navbar) e o rodapé (footer). Então um bom candidato para layout seria um componente que renderize a *navbar* e o *footer*, de forma que o conteúdo fique no "meio".

Vamos criar então, antes de mais nada três componentes:

1. O componente `<Navbar>`
2. O componente `<Footer>`
3. Um componente `<Logo>`

## O Componente `<Logo>`

Com o Figma aberto, podemos extrair facilmente o logo para svg. Entretanto, especialmente neste caso (e em muitos outros) uma abordagem interessante é criarmos um componente React para nosso logo. Isso faz com que nosso *svg* fique ainda mais poderoso e interativo.

No caso da nossa aplicação, se prestarmos atenção ao design proposto, o logotipo pode tanto estar colocado em um background claro ou escuro. Dependendo da situação, a cor do logo irá mudar.

### Extraindo o logo para um componente React

1. Vamos exportar o svg do logo do Figma
2. Vamos *passar* o svg pelo [svgomg](https://svgomg.net/) (que é uma aplicação útil para fazer uma "limpeza", garantir boas práticas e compressão no nosso *svg*)
3. Por fim vamos usar a ferramenta [svgr](https://react-svgr.com/playground/?typescript=true) para transformar nosso SVG em um componente React.

Feito isso, o céu é o limite. Temos um componente logo que agora irá aceitar uma prop `bg` que poderá ser `light` ou `dark`.

- Se a prop for `light`, o texto do logo renderizará com a cor `#333`
- Se a prop for `dark`, o texto do logo renderizará com a cor `#fff`

### Código final do componente `<Logo>`

```typescript title="components/layout/logo.tsx"
import * as React from 'react';
import { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  bg?: 'light' | 'dark';
}

const Logo = ({ bg = 'light', ...props }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={197}
    height={29}
    fill="none"
    {...props}
  >
    <path
      fill="#149BFC"
      d="M10.123 4.606a1 1 0 0 1 1.755 0l1.594 2.918a1 1 0 0 0 1.05.505l3.276-.572a1 1 0 0 1 1.094 1.372l-1.287 3.066a1 1 0 0 0 .259 1.136l2.49 2.204a1 1 0 0 1-.39 1.71l-3.2.906a1 1 0 0 0-.727.911l-.17 3.321a1 1 0 0 1-1.582.762l-2.703-1.938a1 1 0 0 0-1.165 0l-2.702 1.938a1 1 0 0 1-1.582-.762l-.17-3.32a1 1 0 0 0-.727-.912l-3.2-.905a1 1 0 0 1-.39-1.711l2.49-2.204a1 1 0 0 0 .26-1.136L3.107 8.829a1 1 0 0 1 1.094-1.372l3.276.572a1 1 0 0 0 1.05-.505l1.595-2.918Z"
    />
    <path
      fill={bg === 'light' ? '#333' : '#fff'}
      d="M42.76 23.264c-2.528 0-4.448-.672-5.76-2.016-1.312-1.36-1.968-3.448-1.968-6.264 0-2.736.64-4.8 1.92-6.192 1.28-1.408 3.216-2.112 5.808-2.112.848 0 1.696.104 2.544.312.864.208 1.696.496 2.496.864v2.88c-.816-.512-1.608-.88-2.376-1.104a7.957 7.957 0 0 0-2.232-.336c-1.056 0-1.944.192-2.664.576-.704.368-1.24.968-1.608 1.8-.352.832-.528 1.944-.528 3.336 0 1.376.184 2.48.552 3.312.368.832.912 1.432 1.632 1.8.736.368 1.648.552 2.736.552.656 0 1.36-.112 2.112-.336.768-.224 1.56-.584 2.376-1.08v2.88c-.464.224-.984.424-1.56.6-.56.176-1.136.304-1.728.384-.592.096-1.176.144-1.752.144Zm13.27.096c-1.983 0-3.471-.552-4.463-1.656-.992-1.104-1.488-2.696-1.488-4.776 0-2.224.504-3.84 1.512-4.848 1.024-1.008 2.496-1.512 4.416-1.512 1.344 0 2.464.24 3.36.72.896.464 1.56 1.168 1.992 2.112.448.944.672 2.12.672 3.528 0 2.08-.52 3.672-1.56 4.776-1.024 1.104-2.504 1.656-4.44 1.656Zm0-2.496c.705 0 1.273-.16 1.705-.48.448-.32.776-.768.984-1.344.208-.592.312-1.296.312-2.112 0-.912-.112-1.656-.336-2.232-.208-.576-.536-1-.984-1.272-.432-.272-.992-.408-1.68-.408-.704 0-1.272.144-1.704.432-.432.288-.752.72-.96 1.296-.192.576-.288 1.304-.288 2.184 0 1.28.232 2.256.696 2.928.464.672 1.216 1.008 2.256 1.008Zm14.28 2.496a9.57 9.57 0 0 1-2.376-.288 5 5 0 0 1-1.992-1.008c-.575-.48-1.031-1.144-1.367-1.992-.32-.848-.48-1.928-.48-3.24 0-1.936.472-3.464 1.415-4.584.944-1.12 2.376-1.68 4.296-1.68.273 0 .624.032 1.056.096.433.064.873.176 1.32.336.465.144.864.376 1.2.696l-.672.96V5.888h3v14.28c0 .544-.16 1.016-.48 1.416-.303.4-.72.736-1.248 1.008a7.265 7.265 0 0 1-1.751.576c-.64.128-1.28.192-1.92.192Zm.096-2.592c.656 0 1.2-.08 1.632-.24.449-.16.672-.392.672-.696v-6.144a4.073 4.073 0 0 0-1.127-.456 4.935 4.935 0 0 0-1.153-.144c-.736 0-1.344.136-1.824.408-.48.256-.84.672-1.08 1.248-.24.56-.36 1.28-.36 2.16 0 .768.097 1.44.288 2.016a2.69 2.69 0 0 0 .985 1.368c.48.32 1.136.48 1.968.48Zm13.169 2.592a9.302 9.302 0 0 1-1.92-.192 5.247 5.247 0 0 1-1.632-.624 3.388 3.388 0 0 1-1.152-1.224c-.272-.528-.408-1.184-.408-1.968 0-.816.168-1.504.504-2.064a3.132 3.132 0 0 1 1.464-1.296c.656-.304 1.456-.456 2.4-.456.576 0 1.112.056 1.608.168.496.096.944.232 1.344.408.4.176.728.368.984.576l.216 1.704c-.336-.224-.768-.4-1.296-.528a6.19 6.19 0 0 0-1.68-.216c-.848 0-1.48.136-1.896.408-.416.272-.624.696-.624 1.272 0 .4.112.736.336 1.008.224.256.512.456.864.6.352.128.72.192 1.104.192.88 0 1.512-.056 1.896-.168.4-.128.6-.392.6-.792v-4.776c0-.784-.248-1.352-.744-1.704-.496-.368-1.192-.552-2.088-.552-.688 0-1.392.12-2.112.36-.72.224-1.304.52-1.752.888v-2.76c.432-.272 1.08-.512 1.944-.72a11.871 11.871 0 0 1 2.784-.312c.416 0 .856.04 1.32.12.464.08.904.208 1.32.384.432.176.824.424 1.176.744.352.304.632.696.84 1.176.208.464.312 1.032.312 1.704v5.736c0 .752-.24 1.344-.72 1.776-.48.416-1.144.704-1.992.864-.848.176-1.848.264-3 .264Zm9.082-11.448a12.17 12.17 0 0 1 2.712-.888A14.536 14.536 0 0 1 97 10.736c.56-.08 1.088-.12 1.584-.12 1.12 0 2.048.152 2.784.456.752.288 1.312.752 1.68 1.392.384.624.576 1.448.576 2.472V23H100.6v-7.536c0-.304-.04-.592-.12-.864a1.781 1.781 0 0 0-.408-.744c-.192-.224-.456-.392-.792-.504-.336-.128-.768-.192-1.296-.192-.4 0-.808.04-1.224.12a4.9 4.9 0 0 0-1.056.312V23h-3.048V11.912Zm18.952 11.472c-1.248 0-2.2-.304-2.856-.912-.656-.624-.984-1.52-.984-2.688v-6.48h-1.872v-2.4h1.872V7.568h3.144v3.336h2.808v2.4h-2.808v6c0 .496.096.864.288 1.104.192.24.528.36 1.008.36.256 0 .52-.04.792-.12.288-.096.528-.208.72-.336v2.64a3.71 3.71 0 0 1-1.056.336c-.368.064-.72.096-1.056.096Zm10.258-.024c-1.2 0-2.248-.24-3.144-.72-.896-.496-1.592-1.216-2.088-2.16-.496-.944-.744-2.08-.744-3.408 0-2.112.504-3.72 1.512-4.824 1.024-1.12 2.456-1.68 4.296-1.68 1.328 0 2.392.288 3.192.864.816.576 1.408 1.4 1.776 2.472.384 1.056.568 2.32.552 3.792h-9.36l-.24-2.064h7.176l-.576.864c-.032-1.264-.256-2.168-.672-2.712-.4-.56-1.048-.84-1.944-.84-.544 0-1.024.128-1.44.384-.4.24-.712.648-.936 1.224-.208.576-.312 1.368-.312 2.376 0 1.248.296 2.208.888 2.88.592.656 1.496.984 2.712.984.496 0 .968-.048 1.416-.144.464-.112.888-.24 1.272-.384.4-.144.736-.28 1.008-.408v2.688c-.56.24-1.2.432-1.92.576-.704.16-1.512.24-2.424.24Zm12.736-.36-6.024-16.008h3.72l4.824 13.896h-1.08l4.8-13.872 3.432-.024L138.035 23h-3.432Zm15.019.36a9.302 9.302 0 0 1-1.92-.192 5.247 5.247 0 0 1-1.632-.624 3.388 3.388 0 0 1-1.152-1.224c-.272-.528-.408-1.184-.408-1.968 0-.816.168-1.504.504-2.064a3.132 3.132 0 0 1 1.464-1.296c.656-.304 1.456-.456 2.4-.456.576 0 1.112.056 1.608.168.496.096.944.232 1.344.408.4.176.728.368.984.576l.216 1.704c-.336-.224-.768-.4-1.296-.528a6.19 6.19 0 0 0-1.68-.216c-.848 0-1.48.136-1.896.408-.416.272-.624.696-.624 1.272 0 .4.112.736.336 1.008.224.256.512.456.864.6.352.128.72.192 1.104.192.88 0 1.512-.056 1.896-.168.4-.128.6-.392.6-.792v-4.776c0-.784-.248-1.352-.744-1.704-.496-.368-1.192-.552-2.088-.552-.688 0-1.392.12-2.112.36-.72.224-1.304.52-1.752.888v-2.76c.432-.272 1.08-.512 1.944-.72a11.871 11.871 0 0 1 2.784-.312c.416 0 .856.04 1.32.12.464.08.904.208 1.32.384.432.176.824.424 1.176.744.352.304.632.696.84 1.176.208.464.312 1.032.312 1.704v5.736c0 .752-.24 1.344-.72 1.776-.48.416-1.144.704-1.992.864-.848.176-1.848.264-3 .264Zm13.809 0c-1.136-.032-2.104-.28-2.904-.744-.8-.464-1.416-1.136-1.848-2.016-.416-.896-.624-1.992-.624-3.288 0-1.36.168-2.472.504-3.336.336-.88.8-1.56 1.392-2.04a5.22 5.22 0 0 1 2.112-1.032c.816-.192 1.68-.288 2.592-.288.944 0 1.776.12 2.496.36.736.24 1.312.592 1.728 1.056.432.464.648 1.056.648 1.776v9.456c0 .736-.12 1.4-.36 1.992a3.978 3.978 0 0 1-1.104 1.56c-.48.432-1.088.76-1.824.984-.736.24-1.616.36-2.64.36-.944 0-1.768-.072-2.472-.216-.704-.144-1.264-.304-1.68-.48v-2.712c.24.096.568.208.984.336.432.144.912.264 1.44.36a8.838 8.838 0 0 0 1.584.144c.848 0 1.488-.112 1.92-.336.448-.224.752-.52.912-.888.16-.368.24-.768.24-1.2v-1.896l.696.528a4.323 4.323 0 0 1-1.008.816c-.384.224-.816.4-1.296.528-.464.144-.96.216-1.488.216Zm.648-2.352c.432 0 .856-.048 1.272-.144a4.535 4.535 0 0 0 1.176-.48v-5.952c0-.384-.104-.664-.312-.84-.192-.192-.456-.32-.792-.384-.32-.08-.672-.12-1.056-.12-.848 0-1.512.176-1.992.528-.464.352-.792.84-.984 1.464-.192.624-.288 1.32-.288 2.088 0 1.168.256 2.104.768 2.808.512.688 1.248 1.032 2.208 1.032Zm13.199 2.352a9.302 9.302 0 0 1-1.92-.192 5.247 5.247 0 0 1-1.632-.624 3.388 3.388 0 0 1-1.152-1.224c-.272-.528-.408-1.184-.408-1.968 0-.816.168-1.504.504-2.064a3.132 3.132 0 0 1 1.464-1.296c.656-.304 1.456-.456 2.4-.456.576 0 1.112.056 1.608.168.496.096.944.232 1.344.408.4.176.728.368.984.576l.216 1.704c-.336-.224-.768-.4-1.296-.528a6.19 6.19 0 0 0-1.68-.216c-.848 0-1.48.136-1.896.408-.416.272-.624.696-.624 1.272 0 .4.112.736.336 1.008.224.256.512.456.864.6.352.128.72.192 1.104.192.88 0 1.512-.056 1.896-.168.4-.128.6-.392.6-.792v-4.776c0-.784-.248-1.352-.744-1.704-.496-.368-1.192-.552-2.088-.552-.688 0-1.392.12-2.112.36-.72.224-1.304.52-1.752.888v-2.76c.432-.272 1.08-.512 1.944-.72a11.871 11.871 0 0 1 2.784-.312c.416 0 .856.04 1.32.12.464.08.904.208 1.32.384.432.176.824.424 1.176.744.352.304.632.696.84 1.176.208.464.312 1.032.312 1.704v5.736c0 .752-.24 1.344-.72 1.776-.48.416-1.144.704-1.992.864-.848.176-1.848.264-3 .264Zm12.634 0c-.864 0-1.6-.096-2.208-.288a12.703 12.703 0 0 1-1.752-.648v-2.736c.368.24.752.472 1.152.696.416.208.856.376 1.32.504.48.128.992.192 1.536.192.64 0 1.112-.12 1.416-.36.32-.256.48-.56.48-.912 0-.336-.12-.592-.36-.768-.24-.192-.552-.352-.936-.48a38.153 38.153 0 0 0-1.224-.384 9.754 9.754 0 0 1-1.224-.384c-.4-.16-.768-.376-1.104-.648a3.076 3.076 0 0 1-.816-1.032c-.192-.432-.288-.952-.288-1.56 0-.72.144-1.328.432-1.824a3.53 3.53 0 0 1 1.128-1.2c.464-.304.976-.52 1.536-.648a6.542 6.542 0 0 1 1.632-.216c.912.032 1.648.144 2.208.336.56.176 1.088.408 1.584.696l.024 2.472a25.843 25.843 0 0 0-1.632-.816c-.528-.256-1.128-.384-1.8-.384-.624 0-1.112.112-1.464.336-.336.208-.504.504-.504.888 0 .336.104.608.312.816.208.208.48.368.816.48.336.112.704.224 1.104.336.4.112.816.24 1.248.384.432.128.832.32 1.2.576.368.256.664.6.888 1.032.24.416.36.976.36 1.68-.016.928-.264 1.68-.744 2.256-.48.56-1.112.968-1.896 1.224a7.615 7.615 0 0 1-2.424.384Z"
    />
  </svg>
);
export default Logo;

```

## O componente Navbar

O componente `<Navbar>` será feito de acordo com o Figma:

### Código do componente `<Navbar>`

```typescript title="components/layout/navbar.tsx"

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import Logo from './logo';

export default function Navbar() {
  return (
    <nav className="max-w-5xl w-full flex justify-between py-4 mx-auto">
      <div className="flex items-center">
        <Logo />
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <a className={cn(buttonVariants({ variant: 'link' }))} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={cn(buttonVariants({ variant: 'link' }))} href="/sobre">
            Sobre
          </a>
        </li>
        <li>
          <a className={cn(buttonVariants({ variant: 'link' }))} href="/vagas">
            Vagas
          </a>
        </li>
        <li>
          <a
            className={cn(buttonVariants({ variant: 'link' }))}
            href="/vagas/cadastro"
          >
            Cadastrar Vaga
          </a>
        </li>
      </ul>
    </nav>
  );
}

```

## O componente Footer

O componente `<Footer>` será feito de acordo com o Figma:

### Código do componente `<Footer>`

```typescript title="components/layout/footer.tsx"
import { Github, Instagram, LetterText, Mail } from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white flex py-4 ">
      <div className="max-w-5xl w-full mx-auto flex justify-between items-center py-4">
        <div className="w-sm">
          <Logo bg="dark" />
          <p className="font-light text-sm mt-3">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex items-center">
          {/* Social Media */}
          <ul className="flex items-center gap-3 transition-colors">
            <li className="hover:text-blue-400 transition-colors">
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </li>
            <li className="hover:text-blue-400 transition-colors">
              <a href="https://www.github.com/">
                <Github />
              </a>
            </li>
            <li className="hover:text-blue-400 transition-colors">
              <a href="mailto:teste@teste.com">
                <Mail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

```

## O componente Layout

Agora que temos os 3 componentes prontos, vamos ajustar nosso layout para que nosso conteúdo seja "abraçado" pela `<Navbar />` e pelo `<Footer />`.

Um ponto importante é que, para cada página ou layout, podemos exportar um [objeto metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) que conterá informações importantes da página (especialmente para SEO), como título, descrição e outros.

### Código do componente `<Layout />`

```typescript title="app/layout.tsx"
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "CodanteVagas",
  description:
    "O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```
