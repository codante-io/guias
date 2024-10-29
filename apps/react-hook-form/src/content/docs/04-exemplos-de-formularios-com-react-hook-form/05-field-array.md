---
title: Field Array
---

```tsx
import { useFieldArray, useForm } from 'react-hook-form';

type FieldArrayFormData = {
  emails: { address: string }[];
};

export const FieldArrayForm = () => {
  const { register, control, handleSubmit } = useForm<FieldArrayFormData>();
  const { fields, append, remove } = useFieldArray({ control, name: 'emails' });

  const onSubmit = (data: FieldArrayFormData) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      {fields.map((field, index) => (
        <div key={field.id} className="mb-2">
          <input
            {...register(`emails.${index}.address`)}
            placeholder="Email"
            className="p-2 border rounded mr-2"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="bg-red-500 text-white p-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ address: '' })}
        className="bg-green-500 text-white p-2 rounded mb-2"
      >
        Add Email
      </button>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
