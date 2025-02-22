---
title: Exercício - criando as rotas
---

Agora que fizemos uma breve introdução ao roteamento no Next.js está na vez de você tentar criar as primeiras rotas da nossa aplicação:

- Sobre a empresa (rota `/sobre`)
- Listagem de vagas (rota `/vagas`)
- Cadastro de nova vaga (rota `/vagas/cadastro`)

Para cada uma dessas rotas, exiba um texto simples diferente para diferenciá-las.

## Resolução

O primeiro passo é criar as pastas de rota. As rotas no Next.js são determinada pelos nomes das pastas dentro da pasta `app`. E para cada página nessas rotas/pastas deverá existir um arquivo `page.tsx`.

```tsx title="app/sobre/page.tsx"
export default function Sobre() {
  return (
    <div>
      <h1>Sobre nós</h1>
    </div>
  );
}
```

```tsx title="app/vagas/page.tsx"
export default function Vagas() {
  return (
    <div>
      <h1>Vagas</h1>
    </div>
  );
}
```

```tsx title="app/vagas/cadastro/page.tsx"
export default function Cadastro() {
  return (
    <div>
      <h1>Cadastro</h1>
    </div>
  );
}
```

Veja que agora, ao navegar para cada uma dessas rotas, a página estará disponível.
