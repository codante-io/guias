---
title: Animações
---

Animações também são fáceis de serem implementadas no TailwindCSS.

Você pode optar por um dos dois caminhos:

1. Animações já disponíveis
2. Criar sua própria animação

Vamos ver com mais detalhes as duas opções

### Animações já disponíveis com TailwindCSS

O TailwindCSS já traz 4 animações disponíveis para alguns casos de uso:

- `spin`
- `ping`
- `pulse`
- `bounce`

Todas elas são infinitas e seus casos de uso são:

- Spinners
- Notificações e chamada de atenção para círculos
- Skeletons
- Chamada de atenção para elementos

Na [documentação oficial](https://tailwindcss.com/docs/animation) temos os exemplos em funcionamento para cada uma delas.

### Criando e registrando sua própria animação

Em um projeto grande é provável que as quatro animações acima não sejam suficientes. Nesse caso é bastante simples registrar uma nova animação:

```css
@theme {
  --animate-nome-da-animacao: nome-da-animacao 1s ease-in-out infinite;
}

@keyframes nome-da-animacao {
  0%,
  100% {
    transform: translate(-20px);
  }

  50% {
    transform: translate(20px)
  }
}
```

O TailwindCSS automaticamente registrará como uma classe utilitária e para usar é simples:

```html
<div class="animate-nome-da-animacao">
  <!-- ... -->
</div>
```
