---
title: Configurando o projeto
---

Antes de começarmos a validar nossos dados com o Zod, é importante configurar um ambiente básico para trabalharmos. Aqui está o passo a passo para configurar seu projeto.

## Passo 1: Inicialize o Projeto

Se você ainda não criou seu projeto, inicie um novo projeto com **npm** ou **yarn**:

```bash
npm init -y
```

Ou, se estiver usando **yarn**:

```bash
yarn init -y
```

Esse comando criará um `package.json` para gerenciar as dependências do seu projeto.

## Passo 2: Instale o Zod

Conforme vimos anteriormente, instale o Zod usando o comando:

```bash
npm install zod
```

Ou com yarn:

```bash
yarn add zod
```

Agora que o Zod está instalado, podemos começar a utilizá-lo.

## Passo 3: Estrutura do Projeto

Sua estrutura de diretórios pode ser algo simples como:

```
/meu-projeto
  ├── /src
  │   └── index.ts
  └── package.json
```

No arquivo `index.ts`, faremos nossos exemplos de validação com o Zod.
