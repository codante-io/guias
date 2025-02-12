---
title: Outras Diretivas
---

## @import

Da mesma forma que a `at-rule` `@import` do CSS, aqui há um pouco mais de flexibilidade por poder inserir em qualquer ponto do seu CSS e não apenas no topo do arquivo.

## @source

A diretiva `@source` tem como função explicitamente especificar novos arquivos que deverão ser escaneados pelo TailwindCSS.

Note que o TailwindCSS já faz esse "scan" automático baseado no seu `.gitignore`. Se algum arquivo não estiver sendo escaneado - por exemplo, alguma biblioteca externa, você deve usar o `@source`.

## @utility

Você pode adicionar classes utilitárias novas usando `@utility`.

Por exemplo:

```CSS
@utility lalaland {
  font-size: 10rem;
}
```

Mas por que não utilizar apenas uma classe com css tradicional? Por que não fazer o que está abaixo?

```CSS
.lalaland {
  font-size: 10rem;
}
```

A resposta é porque desta forma, essa classe não irá funcionar com variantes como `hover:`, `sm:`, etc

## @custom-variant

Da mesma forma que podemos criar classes utilitárias que podem ser utilizadas com variantes (usando `@utility`), podemos criar variantes que podem ser utilizadas com classes utilitárias. Dessa vez vamos usar o `@custom-variant`.

```css
@custom-variant lalaland (&:where([data-theme="lalaland"] *))
```

Esse é um caso de uso bastante específico - e dificilmente você irá criar uma variante nova. O que é mais provável é você sobrescrever alguma delas.

Como referência, [aqui estão todas as variantes](https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference) do TailwindCSS

## @variant

A diretiva `@variant` tem como finalidade preponderante o uso de uma variante dentro do CSS puro (onde você não teria acesso).

O exemplo da documentação:

```CSS
.my-element {
  background: white;
  @variant dark {
    @variant hover {
      background: black;
    }
  }
}
```

## @apply

Da mesma forma que a `@variant`, a diretiva `@apply` serve para aplicar CSS customizado usando a sintaxe do TailwindCSS dentro de um arquivo CSS:

Um exemplo de botão:

```CSS
.btn {
  @apply p-4 bg-black text white rounded-lg shadow-md;
}
```

:::caution
Não é uma "boa prática" utilizar em seus componentes classes como `btn`, pois isso "mataria" uma das principais filosofias do TailwindCSS. Use com moderação.
:::
