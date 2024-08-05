# Guias Codante.io

🚀 [Deploy - Live](https://guias.codante.io)

Seja bem vindo ao monorepo dos Guias do Codante! Esse é um monorepo `pnpm` em que cada um dos guias é um repositório construído em cima do Starlight (framework que usa Astro por baixo dos panos). Esse repo é open-source, então está aberto para PRs e novos guias. 


### Para adicionar um novo guia

1. Clone este repositório para sua máquina.
2. Instale as dependências - `pnpm i`
3. Para rodar algum dos respositórios localmente, vá para a pasta `apps/guia-que-você-quer-acessar` e rode lá dentro o comando `pnpm run dev`
4. Adicione o app dentro da pasta "apps" - Use o comando `pnpm create astro@latest -- --template starlight`. Siga os passos e **não** crie um novo repositório git. 
5. Altere o base path no app para que o app funcione no path específico. O arquivo é o `astro.config.mjs`
   1. No caso do app Next Auth, por exemplo:
      - Base Path: `/next-auth/`
     
      <img width="746" alt="image" src="https://github.com/user-attachments/assets/b8cc67c0-2b59-4093-bce8-ad29bd1c3f86">


   2. Siga as configs de outros guias ou a [documentação oficial](https://starlight.astro.build/)
      
6. Para deploy, altere a matriz na github action para fazer o deploy do app específico
   1. Altere também a parte de artifacts na action
