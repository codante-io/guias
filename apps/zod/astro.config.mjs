import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/zod/',
  integrations: [
    starlight({
      favicon: '/favicon.ico',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      title: 'Zod',
      editLink: {
        baseUrl: 'https://github.com/codante-io/guias/edit/main/apps/zod/',
      },
      social: {
        github: 'https://github.com/mechamobau',
        'x.com': 'https://x.com/mechamobau',
      },
      customCss: ['./src/tailwind.css'],
      sidebar: [
        {
          label: 'Intro ao Workshop',
          autogenerate: {
            directory: '00-intro',
          },
        },

        {
          label: '1. Introdução ao Zod',
          autogenerate: {
            directory: '01-intro-zod',
          },
        },
        {
          label: '2. Configurando o Ambiente de Desenvolvimento',
          autogenerate: {
            directory: '02-setup-zod',
          },
        },

        {
          label: '3. Uso Básico',
          autogenerate: {
            directory: '03-basic-usage',
          },
        },
        {
          label: '4. Recursos Avançados',
          autogenerate: {
            directory: '04-advanced-features',
          },
        },
        {
          label: '5. Formulários React',
          autogenerate: {
            directory: '05-react-forms',
          },
        },
        {
          label: '6. Validação de API',
          autogenerate: {
            directory: '06-api-validation',
          },
        },
        {
          label: '7. Projetos TypeScript',
          autogenerate: {
            directory: '07-ts-projects',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
