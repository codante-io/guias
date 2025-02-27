---
title: Middleware no Next.js
---

Middleware no Next.js é uma forma de "interceptar" um request.

Middleware permite que você execute código **antes** que o request (requisição) seja completado. Ou seja, é uma forma de "injetar" código dentro do "ciclo de vida" de um _request/response_ tradicional.

### O que é um middleware

Apesar de ser aqui uma funcionalidade do _Next.js_, a ideia de _middleware_ não é recente. Independentemente do framework, um middleware nada mais faz do que:

1. Recebe um _request_
2. Faz (ou não) alguma coisa
3. (i) Retorna um _response_; ou (ii) passa para o próximo _middleware_

### E no Next.js?

No Next.js é a mesma coisa:

1. Middleware é uma função que recebe o request como argumento;
2. Você pode fazer algum código (adicionar _response_ _cookies_ ou _headers_)
3. Independentemente do que fizer, deverá retornar
   1. um `NextResponse.next()` ou `Response`; ou
   2. um `NextResponse.redirect()` para redirecionar o request para outra URL; ou
   3. um `NextResponse.rewrite()` para reescrever a resposta

### Exportando um `config`

Como a função middleware roda em _todas as rotas_, é necessário exportar um objeto de configuração chamado `config`.

O objeto _config_, por sua vez deverá ter uma propriedade chamada matcher que é um array que serve como filtro para o Middleware para rodar em apenas alguns paths específicos.

#### Configuração padrão

Um padrão recomendado pela documentação é:

```typescript
// middleware.ts
export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};
```

Com ele o _middleware_ **não irá rodar em rotas tais como:**

- sitemaps
- robots.txt
- favicon
- api
- arquivos estáticos
- servidor de imagem do next

### Middleware roda no Edge!

Por mais que o Middleware rode no servidor, considere que não é possível acessar APIs do Node. Existe uma config experimental que dá suporte ao Node, mas não é garantia de que ser uma funcionalidade estável. 