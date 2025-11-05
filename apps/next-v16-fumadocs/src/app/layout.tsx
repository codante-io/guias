import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codante.io'),
  title: 'Next.js v16 · Codante',
  description:
    'Conteúdo do mini workshop "O que há de novo no Next.js v16" migrado para Fumadocs + Next.js.',
  icons: {
    icon: 'https://fav.farm/%F0%9F%93%84',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
              // Use relative path so it works with basePath deployments
              api: 'api/search',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
