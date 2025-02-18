---
title: Formulário pendente e com erros
---

Vamos fazer uma simples validação de erro - e impedir submissões se o formulário ainda estiver pendente.

Para isso, o primeiro passo é, ao invés de lançarmos um erro em nossa *action*, é retornarmos o erro. Vamos, então, alterar a nossa action em dois lugares

1. Ela recebe como primeiro parâmetro o `prevState`.
2. Ela deve retornar alguma coisa no caso de erro.

```typescript ins={3, 10-13}
// lib/actions.ts

export async function createJob(prevState: any, formData: FormData) {
  const res = await fetch("https://apis.codante.io/api/job-board/jobs", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    return {
      error: true,
      message: (await res.json()).message,
    };
  }

  revalidatePath("/vagas");
  redirect("/vagas");
}
```

Perfeito. Agora precisamos configurar nossa tela de formulário.

## O Hook useActionState()

O *hook* `useActionState()` é o recomendado pelo Next.js para feedbacks instantâneos e client-side. A assinatura dele é a seguinte:

1. Ele recebe a action original como primeiro argumento e o estado inicial como segundo argumento (nesse caso vamos passar `null`).
2. Ele retorna um array com 3 itens:
   1. o estado
   2. uma nova action (essa que devemos utilizar no nosso form)
   3. um pending booleano

Para usar esse hook, precisamos necessariamente converter nosso formulário (ou nossa página de formulário) em um `client component`.

Agora, vamos usar o hook para aplicar a nova action.

```typescript ins={2, 14, 20}
// app/vagas/cadastro/page.tsx
"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "@/lib/actions";
import FormItem from "./form-item";
import Form from "next/form";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";

export default function Cadastro() {
  const [state, createJobAction, pending] = useActionState(createJob, null);

  return (
    <main>
      <h2 className="font-display mb-12 text-2xl font-bold">Cadastrar Vaga</h2>
      <Card className="mx-auto w-full py-8">
        <Form action={createJobAction}>
          <CardContent className="space-y-6">
```

Maravilha, mas ainda não fizemos nem a validação de erro nem o estado de pendente.

## O Pending state

Vamos pegar o estado pendente e adicioná-lo ao botão

```typescript ins={8,11}
// app/vagas/cadastro/page.tsx

// ...

        <CardFooter>
          <Button
            type="submit"
            disabled={pending}
            className="ml-auto w-full cursor-pointer rounded-none px-10 md:w-auto"
          >
            {pending ? "Salvando..." : "Salvar"}
          </Button>
        </CardFooter>

// ...
```

Isso deve funcionar. Agora vamos utilizar o retorno da nossa action para mostrar uma mensagem de erro para nosso usuário.

## O estado do hook useActionState()

Vamos renderizar condicionalmente uma mensagem de erro, quando for o caso:

```typescript ins={22-27}
// app/vagas/cadastro/page.tsx
"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "@/lib/actions";
import FormItem from "./form-item";
import Form from "next/form";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";

export default function Cadastro() {
  const [state, createJobAction, pending] = useActionState(createJob, null);

  return (
    <main>
      <h2 className="font-display mb-12 text-2xl font-bold">Cadastrar Vaga</h2>
      <Card className="mx-auto w-full py-8">
        <Form action={createJobAction}>
          <CardContent className="space-y-6">
            {state?.error && (
              <div className="flex items-center gap-4 rounded-md border border-red-200 bg-red-100 p-4 py-6 text-red-900">
                <CircleAlert className="inline-block h-6 w-6" />
                {state.message}
              </div>
            )}
            <FormItem
              name="Título da Vaga"
              description="Este será o título da vaga que será exibido na busca. Máximo de 30 caracteres"
            >

// ...
```

Ótimo! Agora temos a aplicação bem mais agradável de se utilizar! É claro que poderíamos individualizar esses erros, mas esse tópico seria para um outro workshop.
