---
title: Validando um e-mail
---

### Validando um e-mail

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const EmailValidationForm = () => {
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
        {...register('email', {
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'E-mail inválido',
          },
        })}
        placeholder="E-mail"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmailValidationForm;
```

O React Hook Form permite validar se uma string é um e-mail válido usando expressões regulares. Caso o formato do e-mail esteja incorreto, a validação falhará.
