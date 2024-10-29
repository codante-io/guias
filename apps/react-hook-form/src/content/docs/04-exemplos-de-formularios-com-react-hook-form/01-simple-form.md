---
title: Formulário Simples Validação de um campo de nome.
---

```tsx
import { useForm } from 'react-hook-form';

type SimpleFormData = {
  name: string;
};

export const SimpleForm = () => {
  const { register, handleSubmit } = useForm<SimpleFormData>();
  const onSubmit = (data: SimpleFormData) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        {...register('name')}
        placeholder="Name"
        className="p-2 border rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
