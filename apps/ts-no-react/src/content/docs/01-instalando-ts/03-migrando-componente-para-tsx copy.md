---
title: Transformando um componente em Typescript
---

Agora, começando a brincadeira de verdade. Vamos criar nosso primeiro componente typescript. Na verdade, não vamos criar, mas transformar o componente `App.jsx` para `App.tsx`. Vamos então renomear o arquivo.

Mas aí quebra tudo.

```
Cannot use JSX unless the '--jsx' flag is provided.ts(17004)
```

### Mais alguns erros: o TS não entende JSX

Precisamos dizer para o compilador typescript que estamos lidando com React e não com javascript convencional.
pra isso, vamos setar no `tsconfig.json` dentro de `compilerOptions` a propriedade `jsx` com o valor `react-jsx`.

Vamos aproveitar também e atualizar outras propriedades para deixar nosso código mais moderno

```json ins={3,4,6,11,12}
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "esModuleInterop": true,
    "moduleResolution": "Bundler",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "allowJs": true
  }
}
```

Com isso, os erros vão desaparecer.

:::note
É possível que você tenha algum erro com arquivos `.svg`. Isso acontece porque o TS não entende esse tipo de arquivo. É possível arrumar isso, mas por enquanto não vamos usar arquivos SVG na nossa aplicação, então vamos apagar essas imagens da nosso app, ok?
:::
