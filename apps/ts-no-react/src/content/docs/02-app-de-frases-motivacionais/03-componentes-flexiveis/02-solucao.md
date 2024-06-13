---
title: Solução 02
---

*Veja a [diff no Github](https://github.com/robertotcestari/codante-ts-no-react-exercicio/compare/resolucao-eventos-e-event-handlers-exercico-2...resolucao-componentes-flexiveis)*

## Fazer com que o botão inicie focado

Um dos casos clássicos de uso de `refs` no React é manipulação de elementos do DOM. Nesse caso, queremos trazer o foco a um elemento específico que é o nosso botão.

O problema é que temos 2 botões e queremos trazer o foco apenas ao primeiro. O que fazer?

Em primeiro lugar precisamos pegar a referência desse botão html. Só que ele está por trás de um componente `Button`. Por isso precisamos do chamado `forwardRef` para que possamos passar esse ref para dentro do componente `Button` e repassá-lo à tag `<button>`.

No componente `Button`

```jsx title="src/components/Button.tsx"
import { ComponentPropsWithRef, forwardRef } from 'react';

type ButtonProps = ComponentPropsWithRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className="px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        {children}
      </button>
    );
  }
);

export default Button;
```

Agora que já podemos receber uma ref no botão e ela é repassada ao botão html, vamos fazer a lógica no `HeaderCard`:

```jsx title="src/components/HeaderCard.tsx" ins={1, 18,20-22,32}
import { useEffect, useRef } from 'react';
import Button from './Button';

type HeaderCardProps = {
  bgColor: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeColorClick: React.MouseEventHandler<HTMLButtonElement>;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
};

export default function HeaderCard({
  bgColor,
  handleClick,
  handleChangeColorClick,
  setBgColor,
}: HeaderCardProps) {

  const quoteButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    quoteButtonRef.current?.focus();
  }, [])

  return (
    <div className="w-full max-w-4xl px-10 py-6 mx-auto bg-white border-2 border-white rounded-lg bg-opacity-15 ">
      <h1
        className="font-bold brightness-50 text-7xl font-display"
        style={{ color: bgColor }}
      >
        Frases Motivacionais
      </h1>
      <Button ref={quoteButtonRef} onClick={handleClick}>Me dê uma dose de ânimo</Button>
      <Button onClick={handleChangeColorClick}>Trocar a Cor</Button>
      <label
        htmlFor="color-changer"
        className="inline-flex items-center justify-center px-4 py-2 mt-10 ml-3 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded cursor-pointer bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        Cor manual
        <input
          onChange={(e) => setBgColor(e.currentTarget.value)}
          type="color"
          name=""
          id="color-changer"
          className="w-0 h-0"
        />
      </label>
    </div>
  );
}
```

Veja que fizemos um `useEffect` para que, ao montar o componente, a aplicação irá focar no botão.
Maravilha! Resolvemos o exercício!
