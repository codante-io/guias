import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codante.io'),
  title: 'Codando com IA · Codante',
  description:
    'Guia do Codante para quem quer aprender a construir produtos com IA generativa utilizando o ecossistema Next.js + Fumadocs.',
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
