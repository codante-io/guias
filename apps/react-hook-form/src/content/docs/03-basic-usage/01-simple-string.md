---
title: Validando uma string simples
---

### Validando uma string simples

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const StringValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Dados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: 'Nome é obrigatório' })}
        placeholder="Nome"
      />
      {errors.name && <p>{errors.name.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default StringValidationForm;
```

Neste exemplo, validamos se o campo `name` foi preenchido. Caso o campo esteja vazio, exibimos uma mensagem de erro.
