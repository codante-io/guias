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
      customCss: ['./src/custom.css'],
      sidebar: [
        {
          label: 'Intro ao Workshop',
          autogenerate: {
            directory: '00-introducao',
          },
        },
        {
          label: 'Intro ao TailwindCSS',
          autogenerate: {
            directory: '01-basico-do-tailwindcss',
          },
        },
				{
          label: 'Variantes e Estados',
          autogenerate: {
            directory: '02-css-basico',
          },
        },
				{
          label: 'Layouts Responsivos',
          autogenerate: {
            directory: '02-css-basico',
          },
        },
				{
          label: 'Plugins',
          autogenerate: {
            directory: '02-css-basico',
          },
        },
				{
          label: 'Recursos Avançados',
          autogenerate: {
            directory: '02-css-basico',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
