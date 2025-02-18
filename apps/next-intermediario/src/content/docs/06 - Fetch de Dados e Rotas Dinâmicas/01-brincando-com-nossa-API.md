---
title: Brincando com a nossa API
---


Nesta seção, vamos focar em interagir com a API do **CodanteVagas**. Esta API foi desenvolvida pelo Codante e a sua documentação pode ser consultada para mais informações.

A API tem como objetivo principal gerenciar os anúncios de vagas de emprego para a aplicação **CodanteVagas**.

Vamos começar a explorar como buscar dados da API. As informações que recuperarmos da API serão usadas para preencher dinamicamente a página de listagem de vagas.

Mais adiante, veremos como lidar com submissões de formulários e realizar atualizações de dados usando as Server Actions.

## Usando o Insomnia

Para interagir com a API do **CodanteVagas**, você pode utilizar ferramentas como o Insomnia, Postman ou Bruno. Insomnia permite que você teste os endpoints da API de forma eficiente, enviando requisições e visualizando as respostas. A API do **CodanteVagas** não requer autenticação.

## Os Endpoints

A API do **CodanteVagas** possui os seguintes endpoints para gerenciar vagas de emprego:

- **Listagem de vagas**: GET <https://apis.codante.io/api/job-board/jobs>
- **Vaga Individual**: GET <https://apis.codante.io/api/job-board/jobs/{id}>
- **Criar Vaga**: POST <https://apis.codante.io/api/job-board/jobs>
- **Apagar Vaga**: DELETE <https://apis.codante.io/api/job-board/jobs/{id}>

### Outras informações adicionais

A API retorna um código de status 200 para solicitações bem-sucedidas e 422 para solicitações inválidas. A API também tem um limite de taxa de 100 solicitações por minuto e retorna um código de status 429 se esse limite for excedido. A base de dados é resetada a cada quatro horas.
