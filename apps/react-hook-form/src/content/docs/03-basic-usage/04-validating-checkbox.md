---
title: Validando um checkbox
---

### Validando um checkbox

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const CheckboxValidationForm = () => {
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
        type="checkbox"
        {...register('terms', { required: 'Você deve aceitar os termos' })}
      />{' '}
      Aceito os termos
      {errors.terms && <p>{errors.terms.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CheckboxValidationForm;
```

Esse exemplo mostra a validação de um checkbox para aceitar os termos de uso. Se o usuário não marcar a opção, uma mensagem de erro será exibida.
