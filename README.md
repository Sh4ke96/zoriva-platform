# Zoriva

## Overview

Zoriva is a multilingual web platform for personal and family health management. It helps users organize medications, dosage schedules, reminders, treatment history, and basic health notes in one simple place.

The product is designed for individuals, families, parents, caregivers, and seniors, with a strong focus on clarity, accessibility, and future expansion into medication price comparison, substitutes, and smart recommendations.

## ✨ Core Features

- Personal and family health management
- Family member profiles and caregiver access
- Medication tracking and dosage schedules
- Treatment history and health notes
- In-app reminders and notifications
- Foundation for future pricing and substitute features

## 🛠 Tech Stack

### Frontend

- ▲ Next.js
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 📚 Fumadocs
- 📝 React Hook Form
- ✅ Zod
- 🔄 TanStack Query
- 🗂 Zustand
- 🎞 Motion
- 🌍 next-intl

### Backend / Data

- 🟢 Supabase
- 🐘 PostgreSQL
- 🔐 Supabase Auth
- 🛡 Row Level Security
- ⚙️ Supabase Edge Functions

### Monitoring

- 🧭 Sentry

## 🚀 Run The Project

```bash
npm run dev
```

## 🧪 E2E Tests

Project is prepared for Cypress.

```bash
pnpm install
pnpm test:e2e
```

For interactive mode:

```bash
pnpm cy:open
```

## 🌗 Dark Mode

Dark mode is configured with `next-themes` and uses the existing `.dark` class strategy from Tailwind CSS. The home page includes a ready-to-use theme toggle.

## 📚 Documentation

The project uses Fumadocs for documentation.

Documentation should be maintained in two dimensions:

- by audience: technical and business,
- by language: Polish and English.

Recommended documentation structure:

```text
content/docs/
├── pl/
│   ├── technical/
│   └── business/
└── en/
	├── technical/
	└── business/
```

Suggested scope:

- Technical documentation: architecture, setup, environments, integrations, data flows, auth, notifications, deployment, code conventions.
- Business documentation: product vision, user flows, roles, family model, premium features, pricing logic, roadmap, operational rules.
