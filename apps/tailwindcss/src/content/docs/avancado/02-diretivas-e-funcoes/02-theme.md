---
title: Diretiva `@theme`
---

A diretiva mais importante é, sem dúvidas, a diretiva `@theme`. Com ela foi possível que a V4 eliminasse completamente o arquivo de configurações do Tailwind. E é com ela que iremos ajustar nossas novas configurações de tema.

Mais informações [aqui](https://tailwindcss.com/docs/theme).

### Variáveis de tema

Especialmente a partir da versão 4, o TailwindCSS abraça integralmente as variáveis CSS.

Mas quando essas variáveis são definidas dentro da diretiva `@theme`, elas têm um peso ainda mais especial: elas tornam-se variáveis de tema (theme variables).

Com isso, elas podem influenciar as classes utilitárias do seu projeto.

Se adicionarmos um prefixo de cor (`--color-*`) à variável dentro da diretiva `@theme`, ela será uma nova cor no nosso tema e aparecerá em todas as classes utilitárias (por exemplo `fill-color-*` ou `bg-*`).

#### Atenção aos namespaces

Se você quiser que o TailwindCSS transforme sua variável de tema para classes utilitárias, a sua variável deverá ter um prefixo (ou [namespace](https://tailwindcss.com/docs/theme#theme-variable-namespaces), como a documentação traz) correto.

a lista de namespaces está na documentação e inclui prefixos tais como:

- `--color-*`
- `--font-*`
- `--text-*`
- `--font-weight-*`
- `--breakpoint-*`
- `--container-*`

dentre outros.

A lista de todas as variáveis que estão incluidas [por padrão está aqui](https://tailwindcss.com/docs/theme#default-theme-variable-reference)
