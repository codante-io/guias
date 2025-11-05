---
title: Roteamento e Navegação Aprimorados
---

O Next.js 16 introduz melhorias significativas no sistema de roteamento, tornando a navegação mais previsível, performática e com melhor suporte a casos complexos.

## Principais Melhorias

### Deduplicação de Layout

- Layouts compartilhados são carregados uma única vez
- Isso reduz na ordem de dezenas (e até centenas) de requests para layouts compartilhados.

### Melhorias no Prefetch

- Não faz prefetch de tudo, mas apenas o que não está no cache;
- Quando o link sai do viewport, o prefetch é cancelado;
- O prefetch é priorizado no hover;
