---
title: Solução
---

*Veja a [diff no Github](https://github.com/robertotcestari/codante-ts-no-react-exercicio/compare/resolucao-componentes-flexiveis-ii...resolucao-context)*

## Criando o Contexto

Vamos criar uma pasta `src/context` onde vamos organizar ali nossos arquivos de contexto.

Dentro desta pasta vamos adicionar dois arquivos:

- `context.tsx`
- `ContextProvider.tsx`

no `context.tsx`

```jsx title="src/context/context.ts
import { createContext } from 'react';

type ContextType = {
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
}

const INITIAL_STATE = {
  bgColor: '#666',
} as ContextType;

const context = createContext<ContextType>(INITIAL_STATE);

export default context;
```

e no `ContextProvider.tsx`:

```jsx title="src/context/ContextProvider.tsx"
import { PropsWithChildren, useState } from 'react';
import context from './context';

export default function ContextProvider({ children }: PropsWithChildren) {
  const [bgColor, setBgColor] = useState('#666');

  return (
    <context.Provider
      value={{
        bgColor,
        setBgColor,
      }}
    >
      {children}
    </context.Provider>
  );
}
```

Maravilha! agora podemos usar nosso contexto em qualquer lugar!
