---
title: Gestão do Estado do Formulário
---

```tsx
import { useForm } from 'react-hook-form';

type FormStateManagementFormData = {
  name: string;
};

export const FormStateManagement = () => {
  const { register, handleSubmit, watch } =
    useForm<FormStateManagementFormData>();
  const name = watch('name', '');

  const onSubmit = (data: FormStateManagementFormData) =>
    alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        {...register('name')}
        placeholder="Name"
        className="p-2 border rounded mb-2"
      />
      <p>Live preview: {name}</p>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
