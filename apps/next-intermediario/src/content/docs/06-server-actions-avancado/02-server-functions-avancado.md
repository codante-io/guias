---
title: Server Functions - Outros tópicos
---

## Invocando Server Functions dentro e fora de um formulário

Quando uma Server Function é chamada em um formulário algumas coisas "mágicas" acontecem:

1. Um objeto `formData` é passado como primeiro argumento (assinatura muda)
2. A função é automaticamente envelopada em um

### Passando argumentos para uma Server Function
