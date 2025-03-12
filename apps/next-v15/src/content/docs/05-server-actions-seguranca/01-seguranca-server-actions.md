---
title: Aumento de segurança nas Server Actions
---

No fim do dia, uma server action no Next é um endpoint HTTP que pode ser chamado no front-end.

Ou seja, toda a mágica que é feita nos bastidores com as Server Actions tem como base uma API que é pública.

Dessa forma, **mesmo que você não chame sua action em nenhum lugar no seu código, ainda é um HTTP endpoint público**

### O que mudou?

Primeiro o que **não mudou**:

- Todas as Server actions - mesmo as não importadas em lugar algum no código - geram um endpoint HTTP

**O que mudou** então:

- Agora os IDs de server actions que não utilizadas não estão mais expostos no bundle do cliente como anteriormente (antes estavam).
- E ID agora é impossível de ser "adivinhado". E também é recalculado periodicamente.

### Exercício

Vamos ver como funciona o request de uma Server Action usando nosso DevTools do navegador na v14 para mostrarmos o problema de segurança em Server Actions.
