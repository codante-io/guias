---
title: Funções
---

Além de diretivas, o TailwindCSS duas funções utilitárias que podem ser úteis quando você estiver manipulando seu código CSS em arquivos CSS .

A primeira (`--alpha()`) serve para ajustar a opacidade de uma cor que você quer referenciar pelo nom dela.

A segunda serve para gerar valor de espaçamento de acordo com o tema.

## --alpha()

Da documentação

```CSS
.my-element {
  color: --alpha(var(--color-lime-300) / 50%);
}
```

## --spacing()

Da documentação:

```CSS
.my-element {
  margin: --spacing(4);
}
```

Você também pode usar diretamente no HTML se estiver usando valores arbitrários:

```HTML
<div class="py-[calc(--spacing(4)-1px)]">
  <!-- ... -->
</div>
```

## theme() -- deprecada

Existe ainda uma função theme - que está deprecada com a v4, estou só colocando aqui pois já usei no passado. Agora, com as variáveis CSS sendo *first-class citizen* não será mais necessário.

Basicamente o que ela fazia é recuperar valores - e usava a notação de pontos:

Da documentação:

```CSS
.my-element {
  margin: theme(spacing.12);
}
```
