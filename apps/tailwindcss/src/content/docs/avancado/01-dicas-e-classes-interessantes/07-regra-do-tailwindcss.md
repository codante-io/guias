---
title: Regra Essencial do Tailwind CSS
---

O Tailwind CSS só é viável em produção porque ele constrói dinamicamente seu CSS usando apenas as classes que você utilizou no seu projeto.

Isso significa que é *extremamente importante* que suas classes estejam declaradas explicitamente, de alguma forma, em seu código.

### Como funciona a detecção de classes (nos bastidores)

Este tópico mudou ao longo da história do framework. Atualmente, seu código é tratado como um grande arquivo de texto e as classes são detectadas com expressões regulares (*regex*).

Quais arquivos são escaneados também mudou na **v4**: agora o Tailwind CSS olha seu `.gitignore` para ignorar arquivos. Outros arquivos ignorados: *css*, *imagens*, *vídeos* ou *zip*.

### O que **não** fazer

Agora que entendemos como funciona a detecção de classes pelo Tailwind CSS, um dos principais erros cometidos ao usar a biblioteca é tentar gerar classes de forma dinâmica.

Por exemplo, este código abaixo não vai funcionar:

```javascript
function Button({ color, children }) {
  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;
}
```

Isso ocorre porque o Tailwind CSS não faz o *parse* dos seus arquivos como código. Ele irá ler o código acima como um arquivo de texto.

E, como arquivo de texto, nenhuma classe foi encontrada.

### O que fazer

**Sempre** declare as classes que você irá usar no seu projeto de forma integral. Simples, né?
