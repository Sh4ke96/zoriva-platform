---
applyTo: "**"
description: "Fundamental project rules and conventions for Zoriva Platform - always applied"
---

---

# Zoriva Platform - Development Instructions

This document contains comprehensive development instructions for the Zoriva Platform project. This is the single source of truth for all coding standards, best practices, and project guidelines.

## Prime Directive

**CRITICAL**: Always run `nvm use` before any other command to ensure Node v22.16.0 is active.

**CRITICAL**: Always use pnpm, not Yarn or npm.

**CRITICAL**: NEVER use `px` units - Always use `rem` units.

**CRITICAL**: Always use absolute imports starting with `@/`.

**CRITICAL**: Files must end with exactly **1 empty line** (never more than 1, never 0). Use `node scripts/fix-trailing-lines.js` to automatically fix files with multiple trailing empty lines (checks both `src/` and `scripts/` directories).

## Project Overview

**Zoriva Platform** is an intelligent family health assistant. It helps users manage medications, reminders, health history, and treatment costs in one simple and intuitive place.

The application is designed for:

- families,
- parents,
- seniors,
- caregivers,
- teenagers,

with a strong focus on simplicity, accessibility, and ease of use for less technical users.

### Main Product Goal

Zoriva should help users:

- remember medications,
- control dosing,
- organize health data for the whole family,
- save money on medication purchases,
- receive smart reminders,
- keep treatment history close at hand.

### Key Product Areas

- Family management: family groups, members, caregiver roles, child/adult/senior profiles.
- Medication management: medications, dosage, schedules, intake history, refill status.
- Smart notifications: dose reminders, missed-dose alerts, purchase reminders, low-supply alerts, price alerts.
- Shopping and pricing: medication carts, grouped family purchases, treatment costs, price comparison, cheaper alternatives, price history.
- Senior mode: larger interface, simplified navigation, fewer actions, caregiver-assisted usage.
- Health history: medication history, dosage history, missed doses, health notes, and future metrics like blood pressure, glucose, and temperature.
- Sync and access: multi-device sync, web and mobile access, family sharing, data backup.
- Premium capabilities: advanced alerts, cost analysis, PDF export, statistics, AI assistant, and smart recommendations.

### Repository Details

- **Type**: Next.js React application with TypeScript
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4, shadcn/ui, CSS variables, dark mode via `next-themes`
- **Documentation**: Fumadocs for product and technical documentation
- **Target Runtime**: Node.js v22.16.0
- **Package Manager**: pnpm
- **Deployment**: PM2 on staging server

## Prerequisites and Environment Setup

### Required Tools (CRITICAL)

1. **Node.js v22.16.0** - MUST use this exact version (defined in `.nvmrc`)
2. **pnpm** - Use pnpm for package installation and running scripts
3. **nvm** - For Node version management

### Environment Setup Commands (Run in Order)

```bash
# 1. Set correct Node version (ALWAYS run first)
nvm use

# 2. Install dependencies
pnpm install

# 3. Validate setup
pnpm lint
pnpm build
```

**CRITICAL**: Always run `nvm use` before any other command to ensure Node v22.16.0 is active.

## Build and Development Commands

### Development

```bash
pnpm dev          # Start development server with Turbopack (http://localhost:3000)
```

### Building and Validation

```bash
pnpm build        # Production build - use to validate changes
pnpm lint         # ESLint
pnpm start        # Production server on port 3000
```

### Testing

```bash
pnpm cy:open           # Open Cypress Test Runner
pnpm cy:run            # Run Cypress tests
pnpm test:e2e          # Start dev server and run Cypress E2E tests
```

**Test Structure:**

- **Unit Tests**: Jest tests located in `src/**/*.test.{ts,tsx}` or `src/**/*.spec.{ts,tsx}`
- **E2E Tests**: Cypress tests located in `src/**/*.cy.{js,jsx,ts,tsx}`
- **E2E Configuration**: `cypress.config.ts` - baseUrl: `http://localhost:3000`

**Running E2E Tests Locally:**

1. Start development server: `pnpm dev` (runs on http://localhost:3000)
2. In another terminal, run: `pnpm test:e2e`

## Module and Folder Structure

**CRITICAL**: Before working on any module or component, **ALWAYS check if there is a README.md file** in the module or component directory. Complex modules and components often have README files that contain:

- Module/component-specific patterns and conventions
- Usage examples
- Props/configuration options
- Architecture and design decisions
- Dependencies and requirements

Reading module/component README files before implementing changes will help you understand the structure, follow established patterns, and avoid common mistakes.

**📚 Full Documentation**: See `.cursor/rules/module-structure.mdc` or `.github/instructions/module-structure.instructions.md` for complete structure guide with detailed examples.

**⚡ Critical Rules:**

- **Use the current app-router structure** centered around `src/app`, `src/components`, and `src/lib`
- **Organize growing product code by domain**, not by artificial context buckets
- **Always use absolute imports**: `@/...` (never `modules/...`)
- **Keep product areas aligned with real Zoriva use-cases** such as landing pages, family, medications, reminders, carts, history, senior mode, auth, user panel, and later admin

### Product Structure Direction

Yes, the structure should reflect how the product will be built in stages.

1. First stage: public marketing and informational pages.
2. Second stage: authentication and user account access.
3. Third stage: logged-in user panel for health and family management.
4. Later stage: admin panel for internal management, including user overview.

The admin panel should exist as a separate protected area, but it does not need to be built before the public product and user-facing flows are in place.

### Quick Reference

**Current Repository Structure:**

```
src/
├── app/         # App Router pages, layouts, route-level UI, globals
├── components/  # Shared components and domain UI
└── lib/         # Utilities and shared helpers
```

**Recommended Product-Oriented Growth:**

```
src/
├── app/
│   ├── page.tsx                # Main landing page
│   ├── about/
│   ├── pricing/
│   ├── contact/
│   ├── features/
│   ├── auth/
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── family/
│   │   ├── medications/
│   │   ├── reminders/
│   │   ├── carts/
│   │   ├── history/
│   │   ├── senior/
│   │   └── settings/
│   └── admin/
│       ├── page.tsx
│       ├── users/
│       └── settings/
├── components/
│   ├── ui/
│   ├── marketing/
│   ├── auth/
│   ├── dashboard/
│   ├── admin/
│   ├── family/
│   ├── medications/
│   ├── reminders/
│   ├── carts/
│   ├── history/
│   └── senior/
└── lib/
   ├── utils.ts
   ├── auth/
   ├── dashboard/
   ├── admin/
   └── domain helpers
```

### Routing Intent

- `src/app/page.tsx` should become the public landing page.
- Additional public pages can live under routes such as `about`, `pricing`, `features`, and `contact`.
- Auth routes should live under `src/app/auth/...`.
- The main logged-in product should live under `src/app/dashboard/...`.
- The admin area should live under `src/app/admin/...` as a separate protected section.

Use this as domain guidance for future growth. Do not create every folder immediately; add them when the corresponding product area is actually being built.

## Documentation Structure

**CRITICAL**: Use Fumadocs as the documentation library for this project.

Documentation in Zoriva should be split in two dimensions:

- by language: Polish (`pl`) and English (`en`),
- by audience: technical and business.

### Documentation Goals

- Technical documentation should describe implementation, architecture, infrastructure, integrations, auth flows, data flows, notifications, and development conventions.
- Business documentation should describe product goals, user flows, domain concepts, premium model, operational rules, roadmap, and feature intent.

### Recommended Documentation Structure

```text
content/docs/
├── pl/
│   ├── technical/
│   └── business/
└── en/
   ├── technical/
   └── business/
```

### Documentation Rules

- Keep technical and business documentation separate.
- Keep Polish and English versions aligned in structure.
- Prefer MDX content organized for Fumadocs.
- Document new major features in both business and technical terms when the feature affects product behavior and implementation.
- For core product areas like family, medications, reminders, carts, senior mode, dashboard, auth, and admin, update documentation together with the feature.

## Development Patterns and Best Practices

### Import Patterns (CRITICAL)

**Always use absolute imports starting with `@/`:**

- ✅ **Correct**: `import { Button } from '@/components/ui/button';`
- ✅ **Correct**: `import { cn } from '@/lib/utils';`
- ❌ **Wrong**: `import { Button } from '../../components/ui/button';`
- ❌ **Wrong**: `import { cn } from '../../../lib/utils';`

**This rule applies to ALL files:**

- Component files (`.tsx`, `.ts`)
- Utility files
- Type definition files

**Why?**

- TypeScript paths are configured for `@/*`
- Absolute imports are more maintainable and easier to refactor
- Consistent import style across the entire codebase

### Creating New Product Areas (IMPORTANT)

When creating new product areas, prefer this process:

1. Start from the real user flow, for example family management, medication scheduling, reminders, carts, senior mode, or health history.
2. Place route-level code in `src/app/...`.
3. Place reusable UI in `src/components/...`.
4. Place utilities and helpers in `src/lib/...`.
5. Keep names domain-based and understandable for the health product.
6. Reuse existing UI primitives before creating new ones.

## Component Development

**📚 Full Documentation**: See `.cursor/rules/components.mdc` or `.github/instructions/components.instructions.md` for complete component guide with examples.

**⚡ Critical Rules:**

- **Always** reuse existing UI primitives from `src/components/ui` before creating new ones
- **Prefer** server components by default and use client components only when interactivity or browser APIs are needed
- **Use** Tailwind utility classes for styling
- **Never** use `px` units in custom styles - use `rem` units
- **Keep** new components compatible with light and dark mode when relevant

### Component Structure (CRITICAL)

Prefer simple colocated component files unless the component grows enough to justify splitting logic, types, and tests.

**Typical Pattern:**

```
components/
└── feature-name/
   ├── feature-card.tsx
   ├── feature-form.tsx
   └── feature-summary.tsx
```

**Shared UI Pattern:**

```
components/
└── ui/
   └── button.tsx
```

### Naming Conventions

1. **Component Names**: Use clear domain names such as `ThemeToggle`, `MedicationCard`, `FamilyMemberForm`, `ReminderList`.
2. **Folders**: Group by product area when the component is domain-specific.
3. **Classnames**: Prefer Tailwind utilities instead of custom CSS class naming systems.

## Styling Guidelines

**📚 Full Documentation**: See `.cursor/rules/styles.mdc` or `.github/instructions/styles.instructions.md` for complete styling guide with examples.

**⚡ Critical Rules:**

- **NEVER use `px` units** - Always use `rem` units when custom sizing is needed
- Use Tailwind CSS as the default styling approach
- Reuse tokens and CSS variables already defined in `src/app/globals.css`
- Reuse shadcn/ui patterns and existing UI variants before introducing new styling patterns
- Keep styles compatible with both light and dark mode

### Core Styling Rules (CRITICAL)

1. **NEVER use `px` units** - Always use `rem` units when writing custom CSS values.
2. **Prefer Tailwind utilities first** for spacing, layout, typography, radius, colors, and responsive behavior.
3. **Use `src/app/globals.css` tokens and CSS variables** for shared theming.
4. **Keep dark mode support in mind** and use the existing `.dark` strategy.
5. **Use custom CSS only when Tailwind utilities are not enough**.

## Code Quality Requirements

- **ESLint**: Must pass `pnpm lint` without errors
- **TypeScript**: Strict mode enabled, must compile without errors
- **Import Sorting**: Automated import organization via ESLint
- **Code Style**: 4-space indentation, single quotes, trailing commas
- **File Endings**: Files must end with exactly **1 empty line** (never more than 1, never 0)
  - Use `node scripts/fix-trailing-lines.js` to automatically fix files with multiple trailing empty lines
  - The script checks files in both `src/` and `scripts/` directories
  - This applies to all source files: `.ts`, `.tsx`, `.js`, `.jsx`, `.scss`, `.css`, `.md`

## Validation and CI/CD

### Pre-commit Validation

Always run before submitting changes:

```bash
nvm use
pnpm lint     # Must pass without errors
pnpm build    # Must complete successfully
```

### Git Hooks

A pre-commit hook is available to automatically fix trailing empty lines before each commit. To install it:

```bash
./scripts/install-git-hooks.sh
```

The hook will automatically run `fix-trailing-lines.js` before each commit and stage any fixed files.

### Deployment Process

- **Staging**: Uses `deploy/deploy.stg.sh` script
- **Process**: Git clone → pnpm install → pnpm build → PM2 restart
- **Server**: PM2 with 256MB memory limit
- **Port**: 3000 (production)

## Summary of Critical Rules

1. **Always run `nvm use`** before any command (Node v22.16.0)
2. **Use pnpm, not Yarn or npm**
3. **NEVER use `px` units** - Always use `rem` units
4. **Always use absolute imports** starting with `@/`
5. **Use Tailwind CSS as the default styling approach**
6. **Keep product structure aligned with real Zoriva domains** like family, medications, reminders, carts, history, and senior mode
7. **Reuse existing components from `src/components/ui`** before creating new primitives
8. **Prefer server components by default** and use client components only when needed
9. **Validate with `pnpm lint` and `pnpm build`** before committing
10. **Files must end with exactly 1 empty line** - Use `node scripts/fix-trailing-lines.js` to fix multiple trailing empty lines
