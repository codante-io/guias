---
title: Home e Sobre
---

Agora o próximo passo é incrementarmos as páginas estáticas (home e sobre) para que possamos, posteriormente, adentrarmos na parte dinâmica do nosso app (listagem de vagas, vaga individual e cadastro de vaga).

## Criando a Homepage

Não há muito o que dizer sobre a home. Precisamos de:

1. Um header
2. Um botão de call to action
3. Uma imagem

### Criando uma nova variante de botão

Precisamos criar uma nova variante de botão. Vamos alterar a variação outline de forma que a borda seja preta e sem arredondamento.

Dentro da variante `outline`, vamos deixar com essas classes:

```typescript
{
  // ...
    outline:
      'border border-black rounded-none bg-background hover:bg-accent hover:text-accent-foreground',
  // ...
}
```

Maravilha, agora já podemos utilizar esse botão na Home

### Código da Homepage

Abaixo está o código da homepage até agora

```typescript title="app/page.tsx"
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-black font-display w-xl mx-auto">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Button className="cursor-pointer mt-12" variant={'outline'}>
        Busque Uma Vaga
      </Button>
      <img
        src="/people.png"
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}
```

Por enquanto vamos apenas envolver o botão em uma tag `<a>` para redirecionar para a página `/vagas`.

## Criando a página Sobre

Agora, a última página estática que iremos criar é a página para a rota `/sobre`.

### Código da página Sobre

```typescript
export default function Sobre() {
  return (
    <section className="flex justify-between gap-4">
      <div>
        <h1 className="font-display mb-16 max-w-xl text-5xl font-black">
          O que você procura, <span className="text-blue-400">nós temos</span>!
        </h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p className="max-w-xl">
            O CodanteVagas é a plataforma ideal para profissionais de diversas
            áreas que buscam novas oportunidades e empresas que precisam de
            talentos qualificados.
          </p>
          <p className="max-w-xl">
            Com uma interface intuitiva e fácil de usar, nosso board de vagas
            conecta profissionais de diferentes setores com as melhores empresas
            do mercado.
          </p>
          <p className="max-w-xl">
            Seja você um candidato em busca de seu próximo desafio ou uma
            empresa em busca de novos talentos, o CodanteVagas facilita a
            conexão entre candidatos e empregadores, promovendo o crescimento e
            a inovação em diversos setores.
          </p>
        </div>
      </div>
      <img src="/people1.png" alt="Ilustração de pessoas" className="w-3xl" />
    </section>
  );
}

```
