---
title: Comparação entre `group`, `peer`, `in` e `has`
---

As quatro variantes servem para estilizar condicionalmente elementos diferentes do elemento *target*.

- O `group` e `in` servem para estilizar um *filho* baseado no estado do *pai*.
- O `peer` serve para estilizar um elemento *irmão*.
- O `has` serve para estilizar um elemento *pai* baseado no estado de um *filho*.

### Tabela Comparativa

| Variante  | Atua sobre | Baseado no estado de   |
| --------- | ---------- | ---------------------- |
| `group-*` | Filhos     | Pai (que tem `group`)  |
| `in-*`    | Filhos     | Pais                   |
| `peer-*`  | Irmãos     | Irmão (que tem `peer`) |
| `has-*`   | Pai        | Filhos                 |
