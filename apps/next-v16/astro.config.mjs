import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	base: '/next-v16/',
	integrations: [
		tailwind({ applyBaseStyles: false }),
		starlight({
			favicon: '/favicon.png',
			title: 'O que há de novo no Next.js v16',
			editLink: {
				baseUrl: 'https://github.com/codante-io/guias/edit/main/apps/next-v16/',
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
						directory: '00-introducao',
					},
				},
			],
		}),
	],
});
