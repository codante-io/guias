---
title: Por trás dos panos
---

Para a mágica do Tailwind acontecer, alguns processos são necessários. Nas versões mais antigas, tudo era feito com a biblioteca *PostCSS*. E era necessária uma série de plugins - por exemplo, *nesting*, *autoprefixer*, *import*.

Toda a compilação de classes era feita através de JavaScript, o que tornava o processo menos eficiente.

### Entram Lightning.CSS e Oxide

Agora, por trás dos panos, o CSS todo é manipulado com a biblioteca [Lightning CSS](https://lightningcss.dev/), que é escrita em Rust e deixa tudo muito mais rápido e eficaz.

Na parte do TailwindCSS, a "engine" que faz o parse dos nomes das classes é chamada pelo time de **Oxide**.

Dê uma olhada na função `is_valid_candidate_string` ou nos testes [desse arquivo](https://github.com/tailwindlabs/tailwindcss/blob/main/crates/oxide/src/parser.rs) para tentar entender um pouco como funciona o parsing de strings do TailwindCSS.

### Indo mais a fundo

Se você tiver interesse em entender um pouco mais sobre o que está por trás do Tailwind, você pode [assistir a esta apresentação](https://www.youtube.com/watch?v=CLkxRnRQtDE) do Adam Wathan.
