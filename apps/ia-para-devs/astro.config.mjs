// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/ia-para-devs/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      // favicon: '/favicon.png',
      title: 'IA para Devs',
      editLink: {
        baseUrl:
          'https://github.com/codante-io/guias/edit/main/apps/ia-para-devs/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/robertotcestari',
        },
        { icon: 'x.com', label: 'X', href: 'https://x.com/robertotcestari' },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/robertotcestari/',
        },
        {
          icon: 'email',
          label: 'Email',
          href: 'mailto:robertotcestari@gmail.com',
        },
      ],

      expressiveCode: {
        themes: ['github-light'],
      },
      sidebar: [
        {
          label: 'Apresentação',
          autogenerate: {
            directory: 'apresentacao',
          },
        },
        {
          label: 'MPC - exemplo prático',
          autogenerate: {
            directory: 'mpc-exemplo-pratico',
          },
        },
        {
          label: 'Cursor / Windsurf / VSCode',
          autogenerate: {
            directory: 'cursor-windsurf-vscode',
          },
        },
        {
          label: 'Ferramentas',
          autogenerate: {
            directory: 'ferramentas',
          },
        },
        {
          label: 'Agentes',
          autogenerate: {
            directory: 'agentes',
          },
        },
        {
          label: 'Padrões de API - API completions / Responses',
          autogenerate: {
            directory: 'padroes-api-completions-responses',
          },
        },
        {
          label: 'Bons Conteúdos',
          autogenerate: {
            directory: 'bons-conteudos',
          },
        },
      ],
    }),
  ],
});
