---
title: Validando um objeto simples
---

Esses exemplos mostram como o React Hook Form facilita a criação e validação de formulários básicos como strings, números, booleanos, arrays e objetos. A flexibilidade e simplicidade do React Hook Form tornam sua aplicação em formulários bastante eficiente, além de melhorar a qualidade e usabilidade das aplicações.

### Validando um objeto simples

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const ObjectValidationForm = () => {
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
      <input
        type="number"
        {...register('age', { required: 'Idade é obrigatória' })}
        placeholder="Idade"
      />
      {errors.age && <p>{errors.age.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ObjectValidationForm;
```

Neste exemplo, validamos um objeto que contém duas propriedades: `name` como string e `age` como número.
