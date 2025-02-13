---
title: tailwind-merge
---

Se você começar a usar algum framework de componentes como React ou Vue, é bem provável que você teve que lidar com classes que sobrescrevem outras classes Tailwind.

O tailwind-merge resolve esse tipo de problema trazendo uma função auxiliar para nós.

Olhe o exemplo abaixo e perceba que o `p-3` tem conflito com o `px-2` e o `py-1`. Mas ainda assim ele vai prevalecer pois foi declarado por último.

```javascript
import { twMerge } from 'tailwind-merge'

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
```
