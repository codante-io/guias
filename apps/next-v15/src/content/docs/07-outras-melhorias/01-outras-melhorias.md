---
title: Server Actions ou Server Functions?
---

## Server Actions ou Server Functions?

Até setembro de 2024, não havia distinção entre **Server Actions** e **Server Functions**. Ambos eram chamados de **Server Actions**.

A partir dessa data, criou-se a distinção entre os dois.

![alt text](image.png)

## Server Functions

### Definição de Server Function

Uma **server function** é:

- Uma função assíncrona;
- Definida pela diretiva `use server`;
- Definida no lado do servidor:
  - Inline em um server component com a diretiva `use server` no início da função;
  - Em um arquivo separado com a diretiva `use server` no topo do arquivo;
- Que pode ser utilizada tanto em *client components* quanto em *server components*.

### Chamando uma Server Function

Uma server function pode ser chamada no cliente ou no servidor. Mas não faz muito sentido chamá-la no servidor, já que no servidor você pode usar a lógica diretamente no componente, sem precisar de uma função separada.

#### Chamando no Cliente

Você pode invocar uma Server Function:

- Em um formulário (ela receberá o objeto `formData` como argumento);
- Em um event handler.

## Server Action

### Definição de Server Action

Uma **server action** é:

- Uma **Server Function**;
- Que é chamada diretamente em um `form` ou;
- Chamada dentro de uma `action` de um `form`.

Quando a server action é chamada em um `form`, ela recebe o objeto `formData` como primeiro argumento.
