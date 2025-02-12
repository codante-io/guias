---
title: Valores, Propriedades e Variantes arbitrários
---

Às vezes (ou muitas vezes), não queremos ficar presos às limitações de design do Tailwind. Eventualmente **vou querer uma cor diferente** - mas também não quero adicioná-la como tema. Outras, vou querer um **tamanho específico em pixels** sem usar as escalas do TailwindCSS.

Claro que sempre podemos usar CSS puro com TailwindCSS - e não há nada que impeça isso - é perfeitamente válido.

Mas eu particularmente evito ao máximo usar arquivos `.css`. E para isso, uso frequentemente os **valores, propriedades e variantes arbitrários**.

### Qual a diferença?

| Recurso                      | Descrição                                                                                                                                                                                                                                                    | Exemplo                                                                          | Uso e Complexidade |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------- |
| **Valores Arbitrários**      | Permite usar valores CSS personalizados que não estão incluídos na configuração padrão do Tailwind, sem precisar estender o tema.                                                                                                                            | `bg-[#bada55]` (cor de fundo personalizada), `w-[123px]` (largura personalizada) | **O Mais Comum**          |
| **Propriedades Arbitrárias** | Permite aplicar classes utilitárias com propriedades CSS que não são _nativamente_ suportadas pelo Tailwind, ou seja, você "inventa" a propriedade que quer usar com o valor que precisar. É um recurso mais "avançado".                                     | `[grid-area:span_2/span_2]` (define um grid-area)                                | **Uso Avançado**     |
| **Variantes Arbitrárias**    | Permite criar modificadores de estado (como `:hover`, `:focus`, etc.) personalizados ou aplicar variantes em contextos específicos que não são fornecidos por padrão pelo Tailwind. Isso é extremamente útil para responsividade e seletores mais avançados. | `lg:hover:[&:nth-child(3)]:bg-blue-500`                                          | **O Mais Avançado/Poderoso**       |

### Espaços em branco

Quando estiver usando algum valor ou propriedade arbitrária, os espaços em brancos devem ser substituídos por _underlines_ `_`.
