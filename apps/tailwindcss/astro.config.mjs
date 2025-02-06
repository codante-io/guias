// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/tailwindcss/',
  integrations: [
    starlight({
      title: 'TailwindCSS',
      editLink: {
        baseUrl:
          'https://github.com/codante-io/guias/edit/main/apps/tailwindcss/',
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
      // customCss: ['./src/custom.css'],
      sidebar: [
        {
          label: 'Tailwind Básico',
          items: [
            {
              label: 'Intro ao Workshop',
              autogenerate: {
                directory: '00-introducao',
              },
            },
            {
              label: 'Intro ao TailwindCSS',
              autogenerate: {
                directory: '01-intro-ao-tailwindcss',
              },
            },
            {
              label: 'TailwindCSS Básico',
              autogenerate: {
                directory: '02-tailwindcss-basico',
              },
            },
            {
              label: 'Variantes e Estados',
              autogenerate: {
                directory: '03-variantes-e-estados',
              },
            },
            {
              label: 'Layouts Responsivos',
              autogenerate: {
                directory: '04-layouts-responsivos',
              },
            },
            {
              label: 'Exercício Final',
              autogenerate: {
                directory: '04a-exercicios',
              },
            },
          ],
        },
        {
          label: 'Tailwind Avançado',
          items: [
            {
              label: 'Tailwind Avançado',
              autogenerate: {
                directory: 'proximo-workshop',
              },
            },
            {
              label: 'Plugins: Tipografia e Forms',
              autogenerate: {
                directory: 'proximo-workshop',
              },
            },

            {
              label: 'Outras Ferramentas',
              autogenerate: {
                directory: 'proximo-workshop',
              },
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
