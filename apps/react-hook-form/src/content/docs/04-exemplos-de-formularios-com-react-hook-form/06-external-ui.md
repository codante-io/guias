---
title: Componentes de UI Externos
---

```tsx
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

type ExternalUIComponentFormData = {
  reactSelect: string;
};

type Option = {
  label: string;
  value: string;
};

export const ExternalUIComponentForm = () => {
  const { control, handleSubmit } = useForm<ExternalUIComponentFormData>();
  const onSubmit = (data: ExternalUIComponentFormData) =>
    alert(JSON.stringify(data));

  const options = ['React', 'Angular', 'Vue', 'Svelte'].map((label) => ({
    label,
    value: label.toLowerCase(),
  })) as readonly Option[];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <Controller<ExternalUIComponentFormData, 'reactSelect'>
        name="reactSelect"
        control={control}
        render={({ field }) => (
          <Select<Option>
            options={options}
            onChange={(selectedOption) => field.onChange(selectedOption?.value)}
            onBlur={field.onBlur}
            value={options.find((option) => option.value === field.value)}
            ref={field.ref}
            placeholder="Select an option"
          />
        )}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};
```
