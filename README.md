# Guias Codante.io


### Para adicionar um novo guia

1. Adicione o app dentro da pasta "apps"
2. Altere a matriz na github action para fazer o deploy do app específico
   1. Altere também a parte de artifacts na action
3. Altere o base path no app para que o app funcione no path específico.
   1. No caso do app Next Auth, por exemplo:
      - Base Path: `/next-auth/`