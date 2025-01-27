---
title: Roteamento - Introdução
---


Agora vamos começar a mergulhar mais a fundo em nossa aplicação e entender como é que funciona o sistema de roteamento do Next.js usado a pasta `app`.

Mas lembrando que existem duas formas de lidar com rotas no Next.js: (i.) usando a pasta `app`, que é a forma mais moderna; ou (ii.) usando a pasta `pages`, que é a forma mais antiga.

> [!IMPORTANT]
> Neste workshop vamos apenas trabalhar com a forma mais moderna do Next.js, isto é, com o `app router`.

## Criando as primeiras rotas

A primeira coisa que eu faço quando vou estruturar uma nova aplicação é criar algumas rotas iniciais do meu app.

Dessa forma, se formos olhar no Figma do **CodanteVagas**, podemos perceber que temos algumas páginas que deverão ser criadas:

- Homepage (ou landing page)
- Sobre a empresa
- Listagem de vagas
- Cadastro de nova vaga
- Visualização de uma vaga específica (roteamento dinâmico)

Vamos começar criando as primeiras quatro páginas - e deixar a rota de visualização de uma vaga específica para depois - e você irá entender a razão disso mais pra frente.

Além disso vamos também criar uma **página 404** customizada com o Next.js

### Criando a Home

A homepage já está criada para nós. é a `app/page.tsx`, que num projeto novo já vem pré-definida. Já que não precisaremos criá-la, vamos tirar tudo que é do next dela.

Ela vai ficar mais ou menos assim:

```tsx title="app/page.tsx"
export default function Home() {
  return (
    <div>
      <h1>Olá mundo</h1>
    </div>
  );
}
```

Veja que ao alterar esse componente `Home()`, as mudanças automaticamente se refletem no  navegador - e você deverá ver um `Olá mundo` quando rodar o `npm run dev`.

### Criando as rotas: Sobre, Vagas e Cadastro de Vagas

Queremos criar respectivamente as seguintes rodas:

1. `/sobre`
2. `/vagas`
3. `vagas/cadastro`

Os nomes são autoexplicativos para cada uma delas. Uma rota vai sempre basear na estrutura de pastas do nosso projeto.

> [!TIP]
> Cada rota, no fim das contas, é um componente React. A diferença neste componente é que ele deve estar localizado e nomeado de acordo com a convenção do Next.js. Dessa forma o framework usa esse componente para criar uma rota específica a partir dele.

Uma rota obrigatoriamente deverá ser nomeada dentro da pasta que a representa, com o nome `page.tsx`, `page.jsx` `page.js`.

Assim, se quisermos criar a rota `/sobre`, precisamos criar um arquivo `app/sobre/page.tsx`. Ou seja, o segmento da rota `sobre` será o nome da pasta que conterá o arquivo da página.
