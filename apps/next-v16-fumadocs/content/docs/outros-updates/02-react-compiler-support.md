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

```ts title="next.config.js"
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
```

## Considerações

- Compilador é automático, não há mudanças necessárias no código existente
- Compatível com código que já usa `useMemo` e `useCallback`
- Pode resultar em builds ligeiramente mais lentos (compensado pela performance em runtime)
- Ideal para aplicações com muitos componentes reativos
