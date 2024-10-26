---
title: Validando um array de e-mails
---

### Validando um array de e-mails

```jsx
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const EmailArrayValidationForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'emails' });

  const onSubmit = (data) => {
    console.log('Dados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`emails.${index}.address`, {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            placeholder="E-mail"
          />
          {errors.emails?.[index]?.address && (
            <p>{errors.emails[index].address.message}</p>
          )}
          <button type="button" onClick={() => remove(index)}>
            Remover
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({})}>
        Adicionar E-mail
      </button>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmailArrayValidationForm;
```

Aqui estamos validando que o array contenha apenas e-mails válidos. Se qualquer elemento do array for de um formato incorreto, uma mensagem de erro será exibida.
