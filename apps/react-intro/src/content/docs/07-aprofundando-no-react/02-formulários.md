---
title: Formulários
description: Aprendendo a lidar com formulários no React
---

O React tem algumas particularidades em relação a formulários, vamos aprender como lidar com elas, implementando a interação do formulário de contato do nosso projeto.

## Formulários controlados x não controlados

Existem duas principais abordagens para lidar com formulários no React:

- **Formulários controlados**: O estado do formulário é gerenciado pelo componente React.
- **Formulários não controlados**: O estado do formulário é gerenciado pelo DOM.

### Formulários não controlados

Essa abordagem é mais próxima do HTML tradicional, onde o estado do formulário é gerenciado pelo DOM. Ela traz algumas vantagens, como a simplicidade e a facilidade de uso, mas também algumas desvantagens, como a dificuldade de validação e a falta de controle sobre o estado do formulário.

```jsx
// src/ContactForm.jsx
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    alert(`Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Formulários controlados

Nesse caso, vamos usar o `useState` para guardar o estado de cada campo do formulário. Dessa forma, conseguimos ter um controle maior sobre o estado. Por exemplo: podemos fazer validações enquanto o usuário está preenchendo o formulário, podemos fazer consultas na API enquanto ele está digitando, etc. Por outro lado, o código fica um pouco mais complexo e dependendo do form pode ficar mais lento, já que o formulário é renderizado a cada vez que o estado é alterado.

```jsx
// src/ContactForm.jsx
function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Implementando o formulário de contato

```jsx
// src/components/contact-form.jsx

import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${name}, Email: ${email}, Message: ${message}`);

    fetch("https://api.example.com/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Mensagem enviada com sucesso!");
      });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Entre em Contato
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-violet-400">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
              />
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-400 focus:border-violet-400"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
```
