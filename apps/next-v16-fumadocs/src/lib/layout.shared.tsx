import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpen, Github } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Next.js v16',
    },
    links: [],
  };
}
