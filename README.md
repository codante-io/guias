# Guias Codante.io

Seja bem vindo ao monorepo dos Guias do Codante! Esse é um monorepo `pnpm` em que cada um dos guias é um repositório construído em cima do Starlight (framework que usa Astro por baixo dos panos). Esse repo é open-source, então está aberto para PRs e novos guias. 


### Para adicionar um novo guia

1. Clone este repositório para sua máquina.
2. Instale as dependências - `pnpm i`
3. Para rodar algum dos respositórios localmente, vá para a pasta `apps/guia-que-você-quer-acessar` e rode lá dentro o comando `pnpm run dev`
4. Adicione o app dentro da pasta "apps" - Use o comando `pnpm create astro@latest -- --template starlight`. Siga os passos e **não** crie um novo repositório git. 
5. Altere o base path no app para que o app funcione no path específico.
   1. No caso do app Next Auth, por exemplo:
      - Base Path: `/next-auth/`
6. Altere a matriz na github action para fazer o deploy do app específico
   1. Altere também a parte de artifacts na action
