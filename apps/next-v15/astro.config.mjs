import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/next-v15/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      favicon: '/favicon.png',
      title: 'O que há de novo no Next.js v15',
      editLink: {
        baseUrl: 'https://github.com/codante-io/guias/edit/main/apps/next-v15/',
      },
      social: {
        github: 'https://github.com/robertotcestari',
        'x.com': 'https://x.com/robertotcestari',
        linkedin: 'https://www.linkedin.com/in/robertotcestari/',
        email: 'mailto:robertotcestari@gmail.com',
      },
      expressiveCode: {
        themes: ['github-light'],
      },
      sidebar: [
        {
          label: 'Intro ao Workshop',
          autogenerate: {
            directory: '00-introducao',
          },
        },
        {
          label: 'Cache',
          autogenerate: {
            directory: '01-cache',
          },
        },
        {
          label: 'Async APIs',
          autogenerate: {
            directory: '02-async-apis',
          },
        },
        {
          label: 'Melhorias em Dev',
          autogenerate: {
            directory: '03-melhorias-dev',
          },
        },
        {
          label: 'next/form',
          autogenerate: {
            directory: '04-next-form',
          },
        },
        {
          label: 'Server Actions e Segurança',
          autogenerate: {
            directory: '05-server-actions-seguranca',
          },
        },

        {
          label: 'Outras Melhorias',
          autogenerate: {
            directory: '07-outras-melhorias',
          },
        },
        {
          label: 'Outros Updates Recentes',
          autogenerate: {
            directory: '08-outros-updates',
          },
        },
        {
          label: 'Finalização',
          autogenerate: {
            directory: '09-finalizacao',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
