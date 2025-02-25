import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/next-intermediario/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      favicon: '/favicon.png',
      title: 'Next.js Intermediário',
      editLink: {
        baseUrl:
          'https://github.com/codante-io/guias/edit/main/apps/next-intermediario/',
      },
      social: {
        github: 'https://github.com/robertotcestari',
        'x.com': 'https://x.com/robertotcestari',
        linkedin: 'https://www.linkedin.com/in/robertotcestari/',
        email: 'mailto:robertotcestari@gmail.com',
      },
      // customCss: ['./src/custom.css'],
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
          label: 'Middleware',
          autogenerate: {
            directory: '02-middleware',
          },
        },
        {
          label: 'Loading e Suspense',
          autogenerate: {
            directory: '03-loading-e-suspense',
          },
        },
        {
          label: 'Estado na URL',
          autogenerate: {
            directory: '04-estado-na-url',
          },
        },
        {
          label: 'useTransition',
          autogenerate: {
            directory: '04a-use-transition',
          },
        },
        {
          label: 'Rotas de API',
          autogenerate: {
            directory: '05-rotas-api',
          },
        },
        {
          label: 'Server Actions - Avançado',
          autogenerate: {
            directory: '06-server-actions-avancado',
          },
        },
        {
          label: 'Tipos de Cache no Next.js',
          autogenerate: {
            directory: '07-cache-no-next',
          },
        },
        {
          label: 'Finalização',
          autogenerate: {
            directory: '08-finalizacao',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
