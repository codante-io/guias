---
title: Uso do `Controller` para componentes não nativos.
---

Quando trabalhamos com formulários em React, especialmente quando envolve componentes de UI não nativos, como selects personalizados ou bibliotecas de datas, integrar esses elementos com o gerenciamento de estado e validação pode ser um desafio. Neste post, vamos explorar como o `Controller`, do React Hook Form (RHF), pode tornar essa tarefa muito mais simples e eficiente.

### Por Que Usar o `Controller`?

O React Hook Form é conhecido por seu desempenho leve e sua abordagem baseada em hooks para gerenciamento de formulários. O `Controller` é uma ferramenta essencial dentro dessa biblioteca quando você precisa envolver componentes de UI que não têm suporte nativo de gerenciamento de estado pelo RHF. Ele atua como uma ponte, permitindo o controle sobre entradas customizadas sem a necessidade de lidar diretamente com estados ou re-renderizações desnecessárias.

### Como Funciona o `Controller`?

O `Controller` do RHF funciona ao redor de três componentes principais:

1. **Renderização do Componente**: Ele utiliza a propriedade `render` ou o componente dentro de `Controller` para passar propriedades necessárias, como `value` e `onChange`, ao componente customizado.
2. **Integração com Validação**: Ele também permite integrar validações e mensagens de erro nativas do RHF.
3. **Gerenciamento de Estado**: Ele mantém o valor do componente em sincronia com o formulário, garantindo que o estado do formulário seja atualizado corretamente sem exigir `setState` manuais.

### Exemplo Prático: Configurando o `Controller` com um Select Customizado

Imagine que você deseja utilizar um componente `Select` de uma biblioteca como Material-UI. Com o `Controller`, o processo é simplificado.

#### Passo 1: Instale o React Hook Form e a Biblioteca de UI

```bash
npm install react-hook-form @mui/material
```

#### Passo 2: Implemente o `Controller` no Componente

No exemplo abaixo, vamos criar um formulário simples que utiliza um `Select` customizado controlado pelo `Controller`.

```jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function CustomForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth>
        <InputLabel>Opção</InputLabel>
        <Controller
          name="customSelect"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} label="Opção">
              <MenuItem value="opcao1">Opção 1</MenuItem>
              <MenuItem value="opcao2">Opção 2</MenuItem>
              <MenuItem value="opcao3">Opção 3</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default CustomForm;
```

#### Explicando o Código

- **`<Controller />`**: Utilizado para envolver o `Select`, ele conecta o componente ao RHF.
- **`control`**: É passado como uma propriedade ao `Controller` e representa o estado do formulário.
- **`render={({ field }) => ...}`**: Passa as propriedades necessárias (`value` e `onChange`) ao `Select`.

### Validando Entradas com o `Controller`

Para tornar o formulário mais robusto, podemos adicionar validações. No exemplo a seguir, vamos configurar uma validação que exige que o usuário selecione uma opção.

```jsx
<Controller
  name="customSelect"
  control={control}
  defaultValue=""
  rules={{ required: 'Este campo é obrigatório' }}
  render={({ field, fieldState: { error } }) => (
    <>
      <Select {...field} label="Opção">
        <MenuItem value="opcao1">Opção 1</MenuItem>
        <MenuItem value="opcao2">Opção 2</MenuItem>
        <MenuItem value="opcao3">Opção 3</MenuItem>
      </Select>
      {error && <p>{error.message}</p>}
    </>
  )}
/>
```

Aqui, adicionamos `rules={{ required: "Este campo é obrigatório" }}`, e, se o campo não for preenchido, uma mensagem de erro é exibida.

### Benefícios de Usar o `Controller`

- **Integração Simplificada**: O `Controller` torna fácil conectar componentes de UI que não possuem suporte nativo de formulários.
- **Código Limpo**: Com o `Controller`, você evita a necessidade de manipular diretamente o estado de cada componente customizado.
- **Flexibilidade**: Com suporte a validações personalizadas, o `Controller` oferece grande flexibilidade no controle de inputs complexos.

### Conclusão

O `Controller` no React Hook Form é uma ferramenta poderosa que facilita o uso de componentes não nativos, permitindo que você crie formulários altamente personalizados e eficientes com menos código e complexidade. Ao integrá-lo ao seu fluxo de desenvolvimento, você pode focar mais na lógica de negócios do que nos detalhes de gerenciamento de estado.

### Próximos Passos

Para se aprofundar, experimente:

- Criar componentes personalizados com validações mais complexas.
- Integrar outras bibliotecas de UI com RHF e `Controller`.
