import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Github } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Codando com IA',
    },
    links: [
      {
        text: 'Introdução',
        url: '/docs/00-introducao/01-introducao',
        icon: <BookOpen className="size-4" />,
      },
      {
        text: 'Repositório',
        url: 'https://github.com/codante-io/guias/tree/main/apps/codando-com-ia',
        icon: <Github className="size-4" />,
      },
    ],
  };
}
