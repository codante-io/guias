---
title: Submissão assíncrona
---

```tsx
import { useForm } from 'react-hook-form';

type AsyncSubmissionFormData = {
  username: string;
};

export const AsyncSubmissionForm = () => {
  const { register, handleSubmit } = useForm<AsyncSubmissionFormData>();
  const onSubmit = async (data: AsyncSubmissionFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        {...register('username')}
        placeholder="Username"
        className="p-2 border rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
