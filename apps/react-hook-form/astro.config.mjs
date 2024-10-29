import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/react-hook-form/',
  integrations: [
    starlight({
      favicon: '/favicon.ico',
      title: 'React Hook Form',
      editLink: {
        baseUrl:
          'https://github.com/codante-io/guias/edit/main/apps/react-hook-form/',
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
          label: '1. Introdução ao React Hook Form',
          autogenerate: {
            directory: '01-intro-react-hook-form',
          },
        },
        {
          label: '2. Configurando o Ambiente de Desenvolvimento',
          autogenerate: {
            directory: '02-setup-react-hook-form',
          },
        },

        {
          label: '3. Uso Básico',
          autogenerate: {
            directory: '03-basic-usage',
          },
        },
        {
          label: '4. Exemplos de Formulários com React Hook Form',
          autogenerate: {
            directory: '04-exemplos-de-formularios-com-react-hook-form',
          },
        },
        {
          label: '5. Recursos Avançados do React Hook Form',
          autogenerate: {
            directory: '05-react-forms',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
