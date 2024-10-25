---
title: Instalando o Zod
---

Para começar a utilizar o **Zod** em seus projetos, você precisa instalá-lo. O processo é simples e direto, seja você utilizando **npm** ou **yarn**. Vamos ver como fazer essa instalação.

## Usando npm

Se você utiliza o **npm** como seu gerenciador de pacotes, basta rodar o seguinte comando no terminal:

```bash
npm install zod
```

Esse comando irá adicionar o Zod ao seu projeto e o tornará disponível para uso imediato.

## Usando yarn

Se você prefere o **yarn**, o comando para instalar o Zod é igualmente simples:

```bash
yarn add zod
```

Assim como com npm, o Zod será adicionado ao seu projeto, permitindo que você comece a utilizá-lo rapidamente.

## Usando CDN

Caso você queira usar o Zod em um projeto sem configurar npm ou yarn, também é possível carregá-lo diretamente em um arquivo HTML via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/zod"></script>
```

Dessa forma, você terá acesso ao Zod diretamente no navegador, sem necessidade de configurar um ambiente de desenvolvimento completo.

## Verificando a Instalação

Após instalar o Zod, você pode verificar se está funcionando corretamente importando-o em seu código:

```ts
import { z } from 'zod';

const exampleSchema = z.string();
console.log(exampleSchema.parse('Teste bem-sucedido!'));
```

Se tudo estiver configurado corretamente, você verá a string sendo validada com sucesso no console.

## Conclusão

Com o Zod instalado, você está pronto para começar a definir schemas e validar seus dados de forma eficiente. Agora que a instalação foi concluída, vamos explorar como utilizá-lo em seus projetos!

---
