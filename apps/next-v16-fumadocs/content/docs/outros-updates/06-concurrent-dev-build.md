---
title: 'Output separado: dev e build - ou Claude Code não quebra'
---

O `next dev` e o `next build` agora usam diretórios de saída separados, permitindo execução simultânea. O comando `next dev` gera arquivos em `.next/dev`. Este é o novo comportamento padrão, controlado pela opção `isolatedDevBuild`.

Isso faz com que, quando o Claude Code rodar um build, o servidor de desenvolvimento continue funcionando normalmente, sem necessidade de restart.
