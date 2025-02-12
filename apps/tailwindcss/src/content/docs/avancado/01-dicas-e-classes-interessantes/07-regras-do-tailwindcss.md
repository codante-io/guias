---
title: Regra essencial do TailwindCSS 
---

O TailwindCSS só é viável em produção porque ele constrói dinamicamente seu CSS apenas com as classes que você utilizou no seu projeto.

Isso significa que é *extremamente importante* que suas classes estejam declaradas de alguma forma em seu código.

### Como funciona a detecção de classes (por trás dos panos)

Esse tópico mudou ao longo da vida do framework. Atualmente seu código é tratado como um grande arquivo de texto e as classes são detectadas com *regex*.

Quais arquivos são escaneados também mudou na v4: agora o Tailwindcss olha seu `.gitignore` para ignorar arquivos. Outros arquivos ignorados: *css*, *imagens*, *videos* ou *zip*

### O que **não** fazer?

Agora que entendemos como é que funciona a detecção de classes pelo TailwindCSS, um dos principais erros cometidos ao usar a biblioteca é tentar gerar classes de forma dinâmica.

Por exemplo, esse código abaixo não vai funcionar:

```javascript
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

Isso porque o TailwindCSS não faz o parse dos seus arquivos como código. Ele irá ler o código acima como arquivo de texto.

E como arquivo de texto, nenhuma classe foi encontrada...
