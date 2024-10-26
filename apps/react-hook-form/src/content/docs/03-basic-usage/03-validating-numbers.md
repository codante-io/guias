---
title: Validando um número com restrição de valor mínimo
---

### Validando um número com restrição de valor mínimo

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const NumberValidationForm = () => {
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
        type="number"
        {...register('age', {
          required: 'Idade é obrigatória',
          min: { value: 18, message: 'Idade mínima é 18' },
        })}
        placeholder="Idade"
      />
      {errors.age && <p>{errors.age.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default NumberValidationForm;
```

Aqui estamos validando que o número inserido seja no mínimo 18. Caso seja menor, o React Hook Form exibirá uma mensagem de erro.
