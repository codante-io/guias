---
title: Tipando useRef
---

## Tipando useRef

Podemos basicamente usar o useRef de duas formas:

1. Para termos referência de um elemento do DOM (nesse caso o `.current` do `ref` será read-only e gerenciado pelo React)
2. Para armazenar alguma variável mutável

### Elemento do DOM

A tipagem é basicamente essa:

```jsx
const divRef = useRef < HTMLDivElement > null;
```

Lembrando que, nesse caso o `.current` é read-only e você não conseguirá atribuir nenhum valor.

### Valor Mutável

Aqui o `ref` é utilizado como um container para armazenar alguma variável que irá se manter ao longo das renderizações. Seria o equivalente a uma variável de instância nos ~falecidos~ componentes de classe

Nesse caso, a tipagem é basicamente:

```jsx
const intervalIdRef = useRef<number | null>(null);
```

Nesse caso, o `.current` pode ser escrito (não é read-only).
