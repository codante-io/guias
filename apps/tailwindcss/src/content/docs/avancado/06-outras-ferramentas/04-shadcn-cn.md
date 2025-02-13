---
title: cn() do shadcn
---

Melhor ainda do que usar o `tailwind-merge` é criar e usar esta função abaixo no seu projeto:

```javascript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

A função `cn()` irá cuidar de eventuais conflitos de classe (por conta do `tailwind-merge`) e fazer com que você possa adicionar condicionais ao declarar as classes (por conta do `clsx`).

Acho que é mais do que suficiente usar essa função utilitária e sempre a crio quando estou iniciando um novo projeto.
