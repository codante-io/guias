import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/next-v16/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      favicon: '/favicon.ico',
      title: 'O que há de novo no Next.js v16',
      editLink: {
        baseUrl: 'https://github.com/codante-io/guias/edit/main/apps/next-v16/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/robertotcestari',
        },
        {
          icon: 'x.com',
          label: 'X (Twitter)',
          href: 'https://x.com/robertotcestari',
        },
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
      customCss: ['./src/tailwind.css'],
      sidebar: [
        {
          label: 'Intro ao Workshop',
          autogenerate: {
            directory: '00-introducao',
          },
        },
        {
          label: 'Cache Components',
          autogenerate: {
            directory: '01-cache-componentes',
          },
        },
        {
          label: 'APIs de Cache',
          autogenerate: {
            directory: '02-apis-cache',
          },
        },
        {
          label: 'proxy.ts e Rotas',
          autogenerate: {
            directory: '03-proxy-e-rotas',
          },
        },
        {
          label: 'Build Adapters',
          autogenerate: {
            directory: '04-build-adapters',
          },
        },
        {
          label: 'Turbopack',
          autogenerate: {
            directory: '05-turbopack',
          },
        },
        {
          label: 'Devtools & MCP',
          autogenerate: {
            directory: '06-devtools-mcp',
          },
        },
        {
          label: 'Migração para v16',
          autogenerate: {
            directory: '07-migracao-estructural',
          },
        },
      ],
    }),
  ],
});
