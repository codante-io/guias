# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

pnpm monorepo for Codante.io guides. Each guide is a separate app built with Starlight (Astro framework). Home app is Next.js 14.

## Architecture

- **Monorepo structure**: Root manages workspaces in `apps/*`
- **Home app** (`apps/home`): Next.js 14 landing page, lists all guides
- **Guide apps**: Astro + Starlight sites for documentation/tutorials
  - Each has own `base` path in `astro.config.mjs` (e.g., `/next-auth/`)
  - Content in `src/content/docs/` with auto-generated sidebars
  - Tailwind CSS via `@astrojs/tailwind` with `applyBaseStyles: false`

## Commands

### Development
```bash
# Install deps (from root)
pnpm i

# Run specific guide locally
cd apps/[guide-name]
pnpm run dev
```

### Build/Deploy
```bash
# Build all apps (from root)
pnpm -r run build

# Build specific app
cd apps/[guide-name]
pnpm run build  # or 'astro check --minimumSeverity warning && astro build' for guides with checks
```

### Guides structure
Most Astro guides:
- `dev/start`: dev server
- `build`: build (some include `astro check --minimumSeverity warning`)
- `preview`: preview build

## Adding New Guide

1. Create app: `pnpm create astro@latest -- --template starlight` (in `apps/`)
2. Set `base: '/guide-name/'` in `astro.config.mjs`
3. Install Tailwind: `pnpm add @astrojs/tailwind`
4. Update `src/content/docs/index.mdx`: remove splash template, keep only `title` and `description` in frontmatter
5. Add to `.github/workflows/deploy.yml`:
   - Astro cache path
   - Build artifacts path
   - Deploy matrix entry
6. Add link in `apps/home` Resources component

## Deployment

GitHub Actions workflow on push to `main`:
- Builds all apps with `pnpm -r run build`
- Caches Next.js and Astro builds
- Deploys each app via rsync to separate remote paths
