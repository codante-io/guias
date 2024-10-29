---
title: Componentes Controlados
---

```tsx
import { useForm } from 'react-hook-form';

type ControlledComponentFormData = {
  accept: boolean;
};

export const ControlledComponentForm = () => {
  const { register, handleSubmit } = useForm<ControlledComponentFormData>();
  const onSubmit = (data: ControlledComponentFormData) =>
    alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input type="checkbox" {...register('accept')} className="mr-2" /> Accept
      Terms
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
