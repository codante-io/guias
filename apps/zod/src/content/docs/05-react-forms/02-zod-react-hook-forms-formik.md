---
title: Zod + react-hook-form e Formik.
---

O Zod pode ser integrado com bibliotecas populares de formulários como **React Hook Form** e **Formik** para simplificar a validação e melhorar a gestão de estados nos formulários. A integração dessas ferramentas torna a validação declarativa e mais fácil de gerenciar.

## Usando Zod com React Hook Form

**React Hook Form** é uma biblioteca leve e eficiente para lidar com formulários em React. Você pode integrar o Zod para realizar a validação dos dados de entrada com facilidade.

### Exemplo 1: Integração com React Hook Form

```ts
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Zod como resolvedor de validação
  });

  const onSubmit = (data) => {
    console.log('Dados validados:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="E-mail" />
      {errors.email && <p>{errors.email.message}</p>} {/* Exibe mensagem de erro */}
      <input {...register('password')} type="password" placeholder="Senha" />
      {errors.password && <p>{errors.password.message}</p>} {/* Exibe mensagem de erro */}
      <button type="submit">Login</button>
    </form>
  );
}
```

Aqui, usamos o `zodResolver` para conectar o schema do Zod ao **React Hook Form**. Quando o formulário é enviado, o Zod valida os dados e, se houver erros, eles são exibidos automaticamente nas mensagens de erro.

## Usando Zod com Formik

O **Formik** é outra biblioteca popular para lidar com formulários em React. Ele também pode ser integrado ao Zod para adicionar uma camada de validação robusta.

### Exemplo 2: Integração com Formik

```ts
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const schema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={toFormikValidationSchema(schema)} // Zod como schema de validação
      onSubmit={(values) => {
        console.log('Dados validados:', values);
      }}
    >
      <Form>
        <Field name="email" placeholder="E-mail" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" type="password" placeholder="Senha" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
```

Neste exemplo, usamos o **Formik** para gerenciar o estado do formulário e o **Zod** para validar os dados. A biblioteca `zod-formik-adapter` facilita a conversão do schema do Zod para o formato esperado pelo Formik.

---

## Conclusão

A integração do **Zod** com **React Hook Form** e **Formik** oferece uma forma poderosa e simples de validar dados de formulários em **React**. Com validação declarativa, mensagens de erro customizáveis e suporte a dados complexos, o Zod torna o processo de validação de formulários muito mais eficiente e flexível.

---
