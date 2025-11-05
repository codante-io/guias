---
title: Next.js Devtools e o padrão MCP
---

O [Model Context Protocol (MCP)](https://modelcontextprotocol.io) é um padrão aberto que permite que agentes de IA e assistentes de codificação interajam com suas aplicações através de uma interface padronizada.

O Next.js v16 inclui suporte MCP que permite que agentes de codificação acessem a sua aplicação em tempo real.

## Configuração

Adicione `next-devtools-mcp` ao arquivo `.mcp.json` na raiz do seu projeto:

```json filename=".mcp.json"
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

## Funcionalidades

### Acesso ao Runtime da Aplicação

- **Detecção de Erros**: Erros de build, erros de runtime e tipo do servidor de desenvolvimento
- **Consultas de Estado em Tempo Real**: Acesse o estado da aplicação e informações de runtime
- **Metadados de Página**: Consulte rotas de página, componentes e detalhes de renderização
- **Server Actions**: Inspecione Server Actions e componentes
- **Logs de Desenvolvimento**: Acesse logs do servidor de desenvolvimento e saída do console

### Ferramentas de Desenvolvimento

- **Base de Conhecimento Next.js**: Consulte documentação abrangente do Next.js e melhores práticas
- **Ferramentas de Migração e Upgrade**: Auxiliares automatizados para atualizar para Next.js 16 com codemods
- **Guia de Cache Components**: Assistência de configuração para Cache Components
- **Testes no Navegador**: Integração com [Playwright MCP](https://github.com/microsoft/playwright-mcp) para verificar páginas no navegador

## Fluxo de Trabalho

1. Inicie seu servidor de desenvolvimento Next.js:

```bash filename="Terminal"
npm run dev
```

2. Seu Agente de Código (IA) se conectará automaticamente à instância Next.js em execução via `next-devtools-mcp`

3. Abra sua aplicação no navegador para visualizar páginas

4. Consulte seu agente para insights e diagnósticos

## Ferramentas Disponíveis

Através do `next-devtools-mcp`, os agentes podem usar as seguintes ferramentas:

- **`get_errors`**: Recupere erros de build, erros de runtime e erros de tipo do seu servidor de desenvolvimento
- **`get_logs`**: Obtenha o caminho para o arquivo de log de desenvolvimento contendo logs do console e saída do servidor
- **`get_page_metadata`**: Obtenha metadados sobre páginas específicas incluindo rotas, componentes e informações de renderização
- **`get_project_metadata`**: Recupere estrutura do projeto, configuração e URL do servidor de desenvolvimento
- **`get_server_action_by_id`**: Procure Server Actions pelo ID para encontrar o arquivo de origem e nome da função

## Como Funciona

Next.js 16+ inclui um endpoint MCP integrado em `/_next/mcp` que é executado dentro do seu servidor de desenvolvimento. O pacote `next-devtools-mcp` descobre e se comunica automaticamente com esses endpoints, permitindo:

- Conectar-se a múltiplas instâncias Next.js em execução em portas diferentes
- Encaminhar chamadas de ferramentas para o servidor de desenvolvimento Next.js apropriado
- Fornecer uma interface unificada para agentes de codificação

## Na prática

Vamos rodar o MCP Inspector para Next.js:

```bash title="Terminal"
bunx @modelcontextprotocol/inspector
```

![alt text](image.png)

Vamos _brincar_ com o MCP Inspector!
