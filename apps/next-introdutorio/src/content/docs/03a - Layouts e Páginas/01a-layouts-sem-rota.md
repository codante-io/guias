---
title: Layouts sem Rota
---


Vimos que criar *layouts* com o Next.js é uma tarefa relativamente simples.

Mas e se eu quiser tem dois *layouts* completamente diferentes na minha aplicação?

Por exemplo, se prestarmos atenção ao nosso Figma, podemos perceber que as rotas de `/vagas` (vagas, vaga individual e cadastro de vagas) possuem um background acinzentado, enquanto as rotas de landing page (home e sobre) possuem background branco.

Uma forma simples de resolver esse problema é deixarmos dois *layouts* separados:

1. *Layout* para vagas - o que é simples, basta colocar o arquivo dentro da pasta `app/vagas`, seria um *layout* aninhado.
2. *Layout* para as páginas estáticas / landing pages. O grande problema aqui: se eu agrupar essas páginas em uma pasta para adicionar um *layout* para elas, **essa pasta vai gerar um segmento de rota**.

Mas existe uma forma no Next.js para resolver esse problema.

## Criando grupos de rotas (Route Groups)

Para que a gente possa agrupar as páginas sem gerar um novo segmento de rota, basta criarmos o nome da pasta com parêntese em volta. Por exemplo posso criar um grupo chamado `(marketing)` em que vou aplicar um layout específico para ele (ou até mesmo nenhum layout) mas sem gerar uma rota `/marketing/outra-coisa/`.

Por exemplo, observe a estrutura abaixo:

![alt text](image-1.png)

Você consegue adivinhar quais são as rotas dessa aplicação?

Nessa estrutura as pastas `marketing` e `shop` não geram nenhuma rota e não irão aparecer na URL.

Aas rotas aqui serão:

- `/about`
- `/blog`
- `/cart`
- `/checkout`
  
## Aplicando Layouts na nossa aplicação

Para conseguirmos o layout da forma idêntica ao informado pelo Figma, vamos então criar 3 layouts na nossa aplicação.

### 1. O Layout Global

O layout global vai ser responsável por ser aplicado a todas as páginas. Ele servirá para apenas uma coisa por enquanto: agrupar a Navbar, o conteúdo e o Footer. Por isso ele possui essa estrutura:

```typescript title="app/layout.tsx"
// ...
<html lang="en">
  <body>
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </body>
</html>
// ...
```

### 2. O Layout das páginas home / sobre

Aqui precisamos apenas colocar um container (que nada mais é que uma largura máxima) de `5xl`, e um padding em cima e embaixo:

```typescript title="app/(marketing)/layout.tsx"
export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-auto max-w-5xl py-10">{children}</div>;
}
```

### 3. O Layout das páginas de vagas

Para as rotas de `/vagas`, `/vagas/id` ou `vagas/cadastro` precisamos de outro layout, dessa vez para termos certeza de que o conteúdo estará com background cinza.

```typescript title="app/vagas/layout.tsx"
export default function VagasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full border-t bg-gray-50">
      <div className="mx-auto max-w-5xl py-10">{children}</div>
    </div>
  );
}
```
