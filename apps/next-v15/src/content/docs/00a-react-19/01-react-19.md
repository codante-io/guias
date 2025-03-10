---
title: React 19
---

Uma das principais mudanças na v15 do Next.js é que agora a versão do React (e react-dom) foram alteradas para a v19.

Isso significa algumas coisas

1. Não existe mais `useFormState` - use agora `useActionState`, que inclusive traz uma propriedade adicional `pending`.
2. O hook `useFormStatus` traz agora dados adicionais: `data`, `method` e `action`. No React 18 trazia apenas o dado `pending`.
3. Removido `propTypes` e `defaultProps`. Priorize o `typescript` para tipagens e parâmetros com valores padrão (ES6).
4. No `react-dom` a função `render()` foi removida em favor da função `createRoot`. A mesma coisa aconteceu com o `hydrate`, que mudou para `hydrateRoot`.
5. O `forwardRef` não é mais necessário - agora `ref` é uma prop do componente.

Todas as alterações podem ser [encontradas aqui](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
