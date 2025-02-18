---
title: Componente `next/form`
---


Este foi o último lançado pelo time do Next e resolve um problema específico agora que a submissão de forma nativa de formulários é o que tem sido recomendado ([use the platform!](https://timkadlec.com/remembers/2019-10-21-using-the-platform/))

O problema que ele resolve é que, agora que os formulários são usados para submissão de dados, os browsers nativamente recarregam a página, o que não é o que queremos quando usamos navegação *client-side*. Ao usar o componente `<Form>` ao invés do `<form>` tradicional do html, nós evitamos esse comportamento.

Vamos entender um pouco mais sobre submissão de dados mais para frente.
