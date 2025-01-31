import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/next-introdutorio/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      favicon: '/favicon.png',
      title: 'Next.js Introdutório',
      editLink: {
        baseUrl:
          'https://github.com/codante-io/guias/edit/main/apps/next-introdutorio/',
      },
      social: {
        github: 'https://github.com/robertotcestari',
        'x.com': 'https://x.com/robertotcestari',
        linkedin: 'https://www.linkedin.com/in/robertotcestari/',
        email: 'mailto:robertotcestari@gmail.com',
      },
      customCss: ['./src/custom.css'],
      expressiveCode: {
        themes: ['github-light'],
      },
      sidebar: [
        {
          label: 'Intro ao Workshop',
          autogenerate: {
            directory: '00 - introducao',
          },
        },

        {
          label: 'Setup do Projeto',
          autogenerate: {
            directory: '01 - Setup do Projeto',
          },
        },
        {
          label: 'Básico de Roteamento',
          autogenerate: {
            directory: '02 - Roteamento Básico',
          },
        },

        {
          label: 'Estilização',
          autogenerate: {
            directory: '03 - Estilização',
          },
        },
        {
          label: 'Layouts e Páginas',
          autogenerate: {
            directory: '03a - Layouts e Páginas',
          },
        },
        {
          label: 'Componentes do Next',
          autogenerate: {
            directory: '04 - Componentes do Next',
          },
        },
        {
          label: 'A Teoria dos Server Components',
          autogenerate: {
            directory: '05 - teoria dos server components',
          },
        },
        {
          label: 'Fetch de Dados e Rotas Dinâmicas',
          autogenerate: {
            directory: '06 - Fetch de Dados e Rotas Dinâmicas',
          },
        },
        {
          label: 'Server Actions e Formulários',
          autogenerate: {
            directory: '07 - Server Actions e Formulários',
          },
        },
        {
          label: 'Responsividade da Aplicação',
          autogenerate: {
            directory: '08 - Responsividade da Aplicação',
          },
        },
        {
          label: 'Finalização',
          autogenerate: {
            directory: '09 - Finalização',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
