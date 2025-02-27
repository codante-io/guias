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
                directory: 'basico/00-introducao',
              },
            },
            {
              label: 'Intro ao TailwindCSS',
              autogenerate: {
                directory: 'basico/01-intro-ao-tailwindcss',
              },
            },
            {
              label: 'TailwindCSS Básico',
              autogenerate: {
                directory: 'basico/02-tailwindcss-basico',
              },
            },
            {
              label: 'Variantes e Estados',
              autogenerate: {
                directory: 'basico/03-variantes-e-estados',
              },
            },
            {
              label: 'Layouts Responsivos',
              autogenerate: {
                directory: 'basico/04-layouts-responsivos',
              },
            },
            {
              label: 'Exercício Final',
              autogenerate: {
                directory: 'basico/04a-exercicios',
              },
            },
          ],
        },
        {
          label: 'Tailwind Avançado',
          items: [
            {
              label: 'Intro ao Workshop',
              autogenerate: {
                directory: 'avancado/00-introducao',
              },
            },
            {
              label: 'Dicas e Classes Interessantes',
              autogenerate: {
                directory: 'avancado/01-dicas-e-classes-interessantes',
              },
            },
            {
              label: 'Diretivas e Funções',
              autogenerate: {
                directory: 'avancado/02-diretivas-e-funcoes',
              },
            },
            {
              label: 'Dark Mode',
              autogenerate: {
                directory: 'avancado/03-dark-mode',
              },
            },
            {
              label: 'Transições e Animações',
              autogenerate: {
                directory: 'avancado/04-transicoes-e-animacoes',
              },
            },
            {
              label: 'Plugins',
              autogenerate: {
                directory: 'avancado/05-plugins',
              },
            },

            {
              label: 'Outras Ferramentas',
              autogenerate: {
                directory: 'avancado/06-outras-ferramentas',
              },
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
