import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/ts-no-react/',
  integrations: [
    starlight({
      favicon: '/favicon.ico',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      title: 'Typescript no React',
      editLink: {
        baseUrl:
          'https://github.com/codante-io/guias/edit/main/apps/ts-no-react/',
      },
      social: {
        github: 'https://github.com/robertotcestari',
        'x.com': 'https://x.com/robertotcestari',
        linkedin: 'https://www.linkedin.com/in/robertotcestari/',
        email: 'mailto:robertotcestari@gmail.com',
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
          label: 'Instalando TS',
          autogenerate: {
            directory: '01-instalando-ts',
          },
        },

        {
          label: 'App de Frases Motivacionais',

          items: [
            
            { label: 'Intro à nossa aplicação', link: '/02-app-de-frases-motivacionais' },
            {
              label: 'Props e children',
              autogenerate: {
                directory: '02-app-de-frases-motivacionais/01-props-e-children',
              },
            },
            {
              label: 'Eventos e event handlers',
              autogenerate: {
                directory: '02-app-de-frases-motivacionais/02-eventos-e-event-handlers',
              },
            },
            {
              label: 'Componentes flexíveis',
              autogenerate: {
                directory: '02-app-de-frases-motivacionais/03-componentes-flexiveis',
              },
            },
            {
              label: 'Componentes flexíveis II - TailwindCSS',
              autogenerate: {
                directory: '02-app-de-frases-motivacionais/04-componentes-flexiveis-ii',
              },
            },
            {
              label: 'Hooks',
              autogenerate: {
                directory: '02-app-de-frases-motivacionais/05-hooks',
              },
            },
            {
              label: 'Context (exercício extra)',
              autogenerate: {
                directory: '02-app-de-frases-motivacionais/06-context',
              },
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
