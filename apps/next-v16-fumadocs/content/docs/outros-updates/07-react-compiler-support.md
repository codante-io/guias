---
title: React Compiler Support
---

O Next.js 16 traz suporte estável para o React Compiler, uma ferramenta experimental do React que otimiza automaticamente componentes, reduzindo a necessidade de `useMemo` e `useCallback`.

## O que é o React Compiler

O React Compiler analisa seu código e:

- Identifica automaticamente dependências de efeitos
- Otimiza re-renders desnecessários
- Memoiza valores sem necessidade de `useMemo`
- Memoiza callbacks sem necessidade de `useCallback`

## Como Ativar

### Via next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

module.exports = nextConfig
```

### Ativação Parcial (por arquivo)

```javascript
// next.config.js
experimental: {
  reactCompiler: {
    compilationMode: 'annotation', // Requer "use memo" explícito
  },
}
```

Ou adicione `"use memo"` no início de arquivos específicos:

```typescript
'use memo'

export default function Component() {
  // Este componente será compilado
}
```

## Comportamento Automático

Com o compilador ativo, você pode simplificar código:

### Antes

```typescript
export default function List({ items }) {
  const sorted = useMemo(() => items.sort(), [items])

  const handleClick = useCallback((id) => {
    console.log(id)
  }, [])

  return <div>{sorted.map(item => ...)}</div>
}
```

### Depois

```typescript
export default function List({ items }) {
  const sorted = items.sort() // Compiler otimiza automaticamente

  const handleClick = (id) => { // Compiler memoiza automaticamente
    console.log(id)
  }

  return <div>{sorted.map(item => ...)}</div>
}
```

## Considerações

- Compilador é automático, não há mudanças necessárias no código existente
- Compatível com código que já usa `useMemo` e `useCallback`
- Pode resultar em builds ligeiramente mais lentos (compensado pela performance em runtime)
- Ideal para aplicações com muitos componentes reativos

## Limitações Conhecidas

- Alguns padrões complexos podem não ser otimizados
- Context API com valores mutáveis pode impactar eficácia
- Ainda em evolução; novos padrões são suportados frequentemente

## Próximos Passos

- Monitore logs de compilação para ver otimizações aplicadas
- Teste performance com DevTools do React
- Reporte padrões não otimizados para a equipe do React
