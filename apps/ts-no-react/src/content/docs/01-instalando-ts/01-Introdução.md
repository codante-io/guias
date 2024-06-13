---
title: Criando um projeto Vite
description: Boas vindas ao workshop de Typescript no React
---

Vamos criar um projeto **JS** para posteriormente transformá-lo em **TS**.

Podemos rodar o comando `npm create vite@latest` e seguir os passos. Importante selecionar um projeto *react* com ***javascript***.

Se você ainda não usou o *vite* antes, essa é uma boa oportunidade para aprendê-lo.

### Migrando para TS

Vamos instalar agora as bibliotecas necessárias para migrarmos nossa aplicação para TS.

```bash
npm install typescript @types/react @types/react-dom
```

Feito isso, vamos iniciar o projeto com o cli do *typescript*

```bash
npx tsc --init
```

Se você perceber, um arquivo foi criado: o famoso `tsconfig.json`. Ele parece indecifrável no começo, mas no fim do dia é muito mais comentário do que código.
