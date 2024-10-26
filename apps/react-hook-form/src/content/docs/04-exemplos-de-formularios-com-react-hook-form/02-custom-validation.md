---
title: Validação de Campos Específicos
---

```tsx
import { useForm } from 'react-hook-form';

type CustomValidationFormData = {
  password: string;
};

export const CustomValidationForm = () => {
  const { register, handleSubmit } = useForm<CustomValidationFormData>();
  const onSubmit = (data: CustomValidationFormData) =>
    alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        {...register('password', {
          validate: (value) =>
            value.length >= 6 || 'Password must be at least 6 characters long',
        })}
        placeholder="Password"
        className="p-2 border rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
