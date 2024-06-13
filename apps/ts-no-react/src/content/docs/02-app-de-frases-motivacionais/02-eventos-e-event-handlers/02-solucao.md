---
title: Solução 02
---

*Veja [diff no github](https://github.com/robertotcestari/codante-ts-no-react-exercicio/compare/resolucao-eventos-e-event-handlers-exercico-1..,resolucao-eventos-e-event-handlers-exercico-2)*

### Criando o botão

Vamos criar nosso terceiro botão. Mas cuidado, um color picker é um `input` e não um botão!

No `HeaderCard.tsx`:

```jsx title="src/components/HeaderCard.tsx" ins={35-41}
type HeaderCardProps = {
  bgColor: string,
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
  handleChangeColorClick: React.MouseEventHandler<HTMLButtonElement>,
};

export default function HeaderCard({
  bgColor,
  handleClick,
  handleChangeColorClick,
}: HeaderCardProps) {
  return (
    <div className="w-full max-w-4xl px-10 py-6 mx-auto bg-white border-2 border-white rounded-lg bg-opacity-15 ">
      <h1
        className="font-bold brightness-50 text-7xl font-display"
        style={{ color: bgColor }}
      >
        Frases Motivacionais
      </h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        Me dê uma dose de ânimo
      </button>

      <button
        onClick={handleChangeColorClick}
        className="px-4 py-2 mt-10 ml-3 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        <span className="text-base">Trocar a Cor</span>
      </button>
      <label
        htmlFor="color-changer"
        className="inline-flex items-center justify-center px-4 py-2 mt-10 ml-3 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded cursor-pointer bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        Cor manual
        <input type="color" name="" id="color-changer" className="w-0 h-0" />
      </label>
    </div>
  );
}
```

Ok, o botão está lá. Mas ele não faz nada além de mostrar um color picker. Precisamos agora trazer para o `HeaderCard` a função que altera a cor do estado (`setBgColor`) e usá-la aqui.

Vamos receber a setBgColor como props - e por enquanto com uma tipagem bem genérica:

```jsx ins={5,11} title="src/components/HeaderCard.tsx"
type HeaderCardProps = {
  bgColor: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeColorClick: React.MouseEventHandler<HTMLButtonElement>;
  setBgColor: (color: string) => void;

export default function HeaderCard({
  bgColor,
  handleClick,
  handleChangeColorClick,
  setBgColor,
}: HeaderCardProps) {
  return (
};
// (...)
```

### Tipando um setState

Analogamente ao event handler, não temos ideia de como tipar uma função `setState`. Mas com a "técnica do hover" a gente consegue rapidamente descobrir. Vamos até o componente `App` e descobrir que o `setBgColor` tem a tipagem `React.Dispatch<React.SetStateAction<string>>`

```jsx ins={5,11} title="src/components/HeaderCard.tsx"
type HeaderCardProps = {
  bgColor: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeColorClick: React.MouseEventHandler<HTMLButtonElement>;
  setBgColor: React.Dispatch<React.SetStateAction<string>>

export default function HeaderCard({
  bgColor,
  handleClick,
  handleChangeColorClick,
  setBgColor,
}: HeaderCardProps) {
  return (
};
// (...)
```

E pronto! temos a solução!
