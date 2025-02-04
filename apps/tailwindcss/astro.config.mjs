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
          label: 'Tailwind Avançado',
          autogenerate: {
            directory: '05-tailwind-avancado',
          },
        },
        {
          label: 'Plugins: Tipografia e Forms',
          autogenerate: {
            directory: '06-plugins-tipografia-e-forms',
          },
        },
     
        {
          label: 'Outras Ferramentas',
          autogenerate: {
            directory: '07-outras-ferramentas',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
