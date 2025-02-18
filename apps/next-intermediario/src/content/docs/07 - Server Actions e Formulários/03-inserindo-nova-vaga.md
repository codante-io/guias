---
title: Inserindo nova vaga
---

Agora vamos trabalhar efetivamente com um formulário no Next.js. Já temos o formulário pronto, o que precisamos então é uma `action` para que possamos submeter esse formulário para nossa API.

## Criando a action

Vamos criar a action de criação de uma nova vaga.

em `/lib/actions.ts`, vamos criar uma função chamada `createJob`.

```typescript
// lib/actions.ts

// ...
export async function createJob(formData: FormData) {
  const res = await fetch("https://apis.codante.io/api/job-board/jobs", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to create job");
  }

  revalidatePath("/vagas");
  redirect("/vagas");
}

```

Agora o próximo passo é utilizar a action em nosso formulário.

## Utilizando a action no nosso form

Vamos utilizar a nossa action diretamente no nosso form.
Veja como é simples. Não é necessário estado, event handlers, nada.

```typescript ins={8,15}
// app/vagas/cadastro/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormItem from "./form-item";
import { createJob } from "@/lib/actions";
import Form from "next/form";

export default function Cadastro() {
  return (
    <main>
      <h2 className="font-display mb-12 text-2xl font-bold">Cadastrar Vaga</h2>
      <Card className="mx-auto w-full py-8">
        <Form action={createJob}>
          <CardContent className="space-y-6">
            <FormItem
              name="Título da Vaga"
              description="Este será o título da vaga que será exibido na busca. Máximo de 30 caracteres"
            >
```

Se tudo der certo, esse formulário já está funcionando.

Claro que ainda falta melhorar o feedback para o usuário, mas já temos aqui uma DX (*developer experience*) muito boa - duas linhas de código para gerenciar um formulário com mais de uma dezena de campos.
