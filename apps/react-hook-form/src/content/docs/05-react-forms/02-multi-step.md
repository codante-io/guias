---
title: Estratégias para lidar com formulários complexos.
---

Quando o volume de informações em um formulário aumenta, é comum quebrá-lo em várias etapas para melhorar a experiência do usuário e garantir que cada etapa seja concluída sem sobrecarregar quem está preenchendo. Neste artigo, exploramos estratégias para criar formulários multi-step (ou "multietapas") e discutimos como React Hook Form (RHF) facilita a gestão de formulários complexos.

### Por Que Usar Formulários Multi-Step?

Dividir formulários extensos em várias etapas ajuda a manter o usuário focado e torna o processo menos intimidador. Além disso, esse formato permite salvar progresso, validar cada etapa individualmente e criar uma experiência de preenchimento mais fluida.

### Estrutura de Um Formulário Multi-Step

A estrutura básica de um formulário multi-step envolve:

1. **Divisão do Formulário em Etapas**: Cada etapa é um "subformulário" com suas próprias entradas.
2. **Navegação entre Etapas**: Botões para avançar, retroceder e, em alguns casos, salvar.
3. **Validação e Submissão**: Validação em cada etapa e submissão final dos dados combinados.

### Implementando Formulários Multi-Step com React Hook Form

Aqui, vamos mostrar um exemplo de um formulário multi-step básico usando React Hook Form. Para simplificar, vamos dividir o formulário em três etapas: **Informações Pessoais**, **Endereço**, e **Informações de Pagamento**.

#### Passo 1: Instale o React Hook Form e Configuração do Estado

```bash
npm install react-hook-form
```

A estrutura do componente terá um estado para rastrear a etapa atual, os dados do formulário e uma função para mover o usuário entre as etapas.

```jsx
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

function MultiStepForm() {
  const [step, setStep] = useState(1); // Etapa atual
  const { control, handleSubmit, trigger } = useForm({
    defaultValues: {
      personalInfo: {},
      address: {},
      payment: {},
    },
  });

  const onSubmit = (data) => {
    console.log('Dados Finais:', data);
    // Aqui você poderia enviar os dados ao servidor, por exemplo
  };

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <PersonalInfo control={control} />}
      {step === 2 && <Address control={control} />}
      {step === 3 && <Payment control={control} />}

      <div>
        {step > 1 && (
          <button type="button" onClick={prevStep}>
            Voltar
          </button>
        )}
        {step < 3 ? (
          <button type="button" onClick={nextStep}>
            Próximo
          </button>
        ) : (
          <button type="submit">Enviar</button>
        )}
      </div>
    </form>
  );
}
```

#### Passo 2: Componentes de Cada Etapa

Abaixo, criamos três componentes separados para cada etapa do formulário. Usamos `Controller` para manipular os inputs em cada etapa.

##### Etapa 1: Informações Pessoais

```jsx
function PersonalInfo({ control }) {
  return (
    <div>
      <h2>Informações Pessoais</h2>
      <Controller
        name="personalInfo.firstName"
        control={control}
        rules={{ required: 'Nome é obrigatório' }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label>Nome:</label>
            <input {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
      <Controller
        name="personalInfo.lastName"
        control={control}
        rules={{ required: 'Sobrenome é obrigatório' }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label>Sobrenome:</label>
            <input {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
}
```

##### Etapa 2: Endereço

```jsx
function Address({ control }) {
  return (
    <div>
      <h2>Endereço</h2>
      <Controller
        name="address.street"
        control={control}
        rules={{ required: 'Endereço é obrigatório' }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label>Rua:</label>
            <input {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
      <Controller
        name="address.city"
        control={control}
        rules={{ required: 'Cidade é obrigatória' }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label>Cidade:</label>
            <input {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
}
```

##### Etapa 3: Informações de Pagamento

```jsx
function Payment({ control }) {
  return (
    <div>
      <h2>Informações de Pagamento</h2>
      <Controller
        name="payment.cardNumber"
        control={control}
        rules={{ required: 'Número do cartão é obrigatório' }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label>Número do Cartão:</label>
            <input {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
      <Controller
        name="payment.expiryDate"
        control={control}
        rules={{ required: 'Data de validade é obrigatória' }}
        render={({ field, fieldState: { error } }) => (
          <div>
            <label>Data de Validade:</label>
            <input type="month" {...field} />
            {error && <p>{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
}
```

### Explicação do Fluxo

- **Validação de Etapas**: Usamos `trigger()` para validar a etapa atual antes de prosseguir. Se a etapa for válida, o usuário pode avançar.
- **Armazenamento dos Dados**: RHF facilita o armazenamento dos dados de cada etapa em um estado centralizado, simplificando o acesso e envio final.
- **Componentização**: Cada etapa é um componente separado, o que torna o código mais organizado e fácil de manter.

### Melhores Práticas para Formulários Multi-Step

1. **Validação em Tempo Real**: Validar cada etapa evita que o usuário seja impedido de avançar.
2. **Salvar Progresso**: Permitir que o usuário salve o progresso em um formulário longo é sempre uma boa ideia, especialmente se ele puder retornar mais tarde.
3. **Feedback de Progresso**: Indicar visualmente quantas etapas o usuário já completou melhora a experiência e reduz a ansiedade.

### Conclusão

Formulários multi-step tornam a coleta de informações complexas mais amigável. Com React Hook Form e `Controller`, você pode implementar esse tipo de formulário com menos código e um fluxo de validação eficiente. Agora, experimente implementar o seu próprio formulário multi-step e veja o quão flexível o RHF pode ser para formulários complexos!
