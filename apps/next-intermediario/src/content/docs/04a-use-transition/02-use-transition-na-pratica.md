---
title: useTransition na prática
---

Entendemos razoavelmente o papel de `useTransition` e `startTransition`. Agora está na hora de usar isso na prática no nosso projeto.

## Exercício - Loading no input de busca

Vamos adicionar um indicador de loading no nosso input de busca. Quando a busca estiver em andamento, vamos mostrar um *spinner* ao invés do ícone de lupa.

O carregamento deve durar enquanto buscamos os dados e deve ser interrompido quando digitamos alguma coisa.

:::tip
Use a animação spin do tailwind para mostrar o loading.
:::

### Solução

- Primeiro, vamos chamar o hook `useTransition` no componente `SearchInput`.
- Depois, vamos desconstruir o `startTransition` e o `isPending` em variáveis.
- Vamos usar o `isPending` para mostrar o *spinner* quando a busca estiver em andamento.
- Vamos usar o `startTransition` para envelopar a função que busca os dados.

#### Código

```tsx ins={26,28,6,12,40-44}
// src/app/vagas/_components/search-bar.tsx
"use client";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const previousSearchText = searchParams?.get("search") || "";
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const urlSearchParams = new URLSearchParams(searchParams ?? undefined);
      const searchText = event.target.value;

      if (searchText) {
        urlSearchParams.set("search", searchText);
      } else {
        urlSearchParams.delete("search");
      }

      startTransition(() => {
        router.replace("?" + urlSearchParams.toString());
      });
    },
    500,
  );

  return (
    <div className="mb-8">
      <Input
        type="search"
        placeholder="Busque uma vaga..."
        className="py-6 text-lg"
        icon={
          isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Search className="size-4" />
          )
        }
        onChange={handleChange}
        defaultValue={previousSearchText}
      />
    </div>
  );
}
```
