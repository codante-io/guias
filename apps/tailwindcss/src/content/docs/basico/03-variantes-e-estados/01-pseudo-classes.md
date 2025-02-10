---
title: Pseudo-classes hover, focus, active, disabled
---

Uma pseudoclasse, segundo o _chatGPT_ (😅), é uma condição ou estado aplicados a elementos sem modificar o HTML base. Elas mudam (ou podem mudar) o estilo de acordo com _interações do usuário_, _posição no DOM_ ou _estado do elemento_.

As principais são:

1. `hover`
2. `focus`
3. `active`
4. `disabled` (para botões)
5. `checked` (para checkboxes ou radio buttons)
6. `has()`
7. `nth-child(n)` e `first-child`

É fácil aplicar uma variante de pseudoclasse; basta adicionar uma variante _antes da classe_ que se quer aplicar condicionalmente.

Por exemplo, imagine que quero um botão que fique vermelho quando seu estado é _hover_. Basta eu aplicar a classe `hover:bg-red-500`, e assim obtenho o resultado desejado. Da mesma forma, posso utilizar os outros estados, como `focus`, `active`, etc.

### Exercício

Crie um botão azul que:

- no hover, fica amarelo
- quando está focado, fica vermelho
- quando está ativo, fica roxo (se não sabe o que é ativo, [olha aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/:active))
- quando está desabilitado, fica cinza
- quando está no hover, fica verde
- quando está no hover, muda a primeira letra para ter tamanho maior e cor vermelha

### Resolução

```html
<button
  class="rounded bg-blue-300 p-4 hover:bg-green-400 hover:first-letter:text-xl hover:first-letter:text-red-500 focus:bg-red-300 active:bg-purple-300 disabled:bg-gray-300"
>
  Olá mundo
</button>
```

No último requisito, deu para perceber duas coisas:

1. É possível acumular variantes;
2. A ordem importa!
