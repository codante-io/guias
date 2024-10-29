---
title: Configurando o ESLint e o Prettier
description: Vamos configurar o ESLint e o Prettier para manter nosso código mais organizado e consistente
---

Por padrão, o Vite instala o ESLint para fazer validação do código. Vamos entender um pouco como ele funciona e complementar sua funcionalidade com o Prettier, uma ferramenta excelente para formatar o código de forma automática.

Primeiro, vamos analisar a configuração padrão do ESLint.

Veja o arquivo `eslint.config.js` na raiz do projeto.

```
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```

Vamos entender o que cada parte do arquivo `eslint.config.js` faz:

1. **Importações**:

   ```javascript
   import js from "@eslint/js";
   import globals from "globals";
   import react from "eslint-plugin-react";
   import reactHooks from "eslint-plugin-react-hooks";
   import reactRefresh from "eslint-plugin-react-refresh";
   ```

   Aqui estamos importando os módulos necessários para configurar o ESLint. Esses módulos incluem regras básicas do JavaScript, definições globais, e plugins específicos para React e React Hooks.

2. **Configuração Padrão**:

   - **Ignorar Diretórios**:

     ```javascript
     { ignores: ['dist'] },
     ```

     Esta linha indica que o ESLint deve ignorar a pasta `dist`, que contém os arquivos de build.

   - **Arquivos a serem Verificados**:

     ```javascript
     files: ['**/*.{js,jsx}'],
     ```

     Define que o ESLint deve verificar todos os arquivos com extensão `.js` e `.jsx`.

   - **Opções de Linguagem**:

     ```javascript
     languageOptions: {
       ecmaVersion: 2020,
       globals: globals.browser,
       parserOptions: {
         ecmaVersion: 'latest',
         ecmaFeatures: { jsx: true },
         sourceType: 'module',
       },
     },
     ```

     Configura a versão do ECMAScript a ser usada, define variáveis globais do ambiente de navegador, e habilita a sintaxe JSX.

   - **Configurações do React**:

     ```javascript
     settings: { react: { version: '18.3' } },
     ```

     Especifica a versão do React para que o ESLint possa aplicar as regras corretamente.

   - **Plugins**:

     ```javascript
     plugins: {
       react,
       'react-hooks': reactHooks,
       'react-refresh': reactRefresh,
     },
     ```

     Adiciona plugins para React, React Hooks, e React Refresh.

   - **Regras**:
     ```javascript
     rules: {
       ...js.configs.recommended.rules,
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
       ...reactHooks.configs.recommended.rules,
       'react/jsx-no-target-blank': 'off',
       'react-refresh/only-export-components': [
         'warn',
         { allowConstantExport: true },
       ],
     },
     ```
     Define as regras que o ESLint deve seguir. Aqui estamos combinando regras recomendadas do JavaScript, React, e React Hooks, além de desativar a regra `react/jsx-no-target-blank` e adicionar uma regra específica para o React Refresh. Para entender melhor cada regra, você pode consultar a [documentação oficial do ESLint](https://eslint.org/docs/latest/rules/).

## Desabilitando uma regra padrão

Agora, vamos desabilitar uma regra padrão que não é muito útil no nosso projeto. Atualmente, o mais comum com o React é utilizar Typescript para fazer a tipagem das variáveis e funções. Como estamos fazendo um workshop introdutório, não vamos nos preocupar com tipagem no momento.

Quando não há Typescript, o ESLint exige uma outra forma de tipagem que é o `prop-types`, mas não queremos isso por enquanto.

Para desabilitar a regra, vamos abrir o arquivo `eslint.config.js` e incluir a seguinte linha no array de `rules`:

```javascript
'react/prop-types': 'off',
```

Dessa forma, o arquivo final ficará assim:

```javascript
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
```

## Configurando o Prettier

Primeiro, vamos instalar o Prettier com o npm:

```bash
npm install --save-dev --save-exact prettier
```

Agora vamos criar o arquivo de configuração `.prettierrc` na raiz do projeto e adicionar o seguinte conteúdo:

```json
{}
```

Agora vamos criar o arquivo `.prettierignore` na raiz do projeto e adicionar o seguinte conteúdo:

```
build
coverage
```

> Dica: o Prettier ignora arquivos que estão no `.gitignore` por padrão, então não precisamos adicionar esses diretórios no `.prettierignore`.

Agora vamos conectar o Prettier com o ESLint. Para isso, vamos instalar o plugin `eslint-plugin-prettier`:

```bash
npm install --save-dev eslint-config-prettier
```

Depois disso, vamos abrir o arquivo `eslint.config.js` e adicionar o seguinte conteúdo no final do array de `plugins`:

```javascript
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // outras configurações
  plugins: {
    // outros plugins
    prettier: eslintConfigPrettier,
  },
];
```

Agora você pode instalar a extensão do Prettier no VSCode. Pesquise pela extensão `Prettier - Code formatter` e instale-a.

Por fim, altere a configuração do VSCode para que o Prettier seja executado automaticamente ao salvar o arquivo. Para isso, vá em `File > Preferences > Settings` e procure por `format`. Selecione `Format: Editor: Default Formatter` e escolha `Prettier - Code formatter`.

Caso seja necessário, reinicie o VSCode para recarregar as configurações.

Agora o seu editor está perfeitamente configurado para trabalhar com o React de uma forma mais produtiva.
