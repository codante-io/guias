---
title: useTransition e startTransition
---

Agora que temos nosso estado na URL, uma coisa interessante que podemos fazer é um indicador de loading no campo de busca para um feedback visual de que os dados estão sendo buscados.

Um bom candidato para isso é usar o par `useTransition / startTransition`. Mas antes vamos entender rapidamente o que são eles.

## O hook `useTransition()`

O Hook `useTransition` nos retorna uma variável e uma função `startTransition`:

```typescript
const [isPending, startTransition] = useTransition()
```

o `isPending` é uma variável que indica se uma transição está em andamento. Você pode usar para mostrar um indicador de *loading*.

A função `startTransition` serve para "envelopar" uma função que faz alguma alteração no estado da aplicação. Quando fazemos isso estamos dizendo que aquela alteração é uma transição e não uma atualização imediata - ou seja, ela não é urgente.

Isso é importante porque faz com que essa atualização de estado não bloqueie a interface do usuário.

## Três casos de uso

1. Evitar que uma atualização de estado bloqueie a interface do usuário.
2. Atualizações otimistas (*optimistic ui*).
3. Indicação de loading - por exemplo em um input de busca.

## Onde não faz sentido usar?

- Não faz sentido usar `startTransition` em *server components*.
- Não faz sentido usar `startTransition` quando você não está lidando com uma atualização de estado.
- Não faz sentido usar `startTransition` quando as atualizações são criticas e devem ser feitas imediatamente.

A regra básica é que `startTransition` serve para atualizações não urgentes e que podem ser adiadas ou interrompidas.
