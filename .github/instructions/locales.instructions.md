---
description: "Locales and translations management"
applyTo: "src/locales/**/*.json"
---

# Locales

Translation files use hierarchical JSON structure. Default locale is Polish (`pl`).

## CRITICAL Instructions

**CRITICAL**: All text must come from locale files — never hardcode.

**CRITICAL**: Use `utils/locale` `select` function to choose locale.

## Location

```
src/locales/
├── common/pl.json          # Common translations (actions, labels, messages)
├── models/pl.json          # Model-related translations
└── {feature}/pl.json       # Feature-specific translations

src/components/{ComponentName}/locales/pl.json   # Component-level translations
```

## Usage Pattern

```tsx
import { select as selectLocale } from "utils/locale";
import { Locales } from "types/locale";
import localesPl from "./locales/pl.json";
import localesCommon from "locales/common/pl.json";

const translations: typeof localesPl = selectLocale({ [Locales.Pl]: localesPl });
const translationsCommon: typeof localesCommon = selectLocale({
  [Locales.Pl]: localesCommon,
});

return (
  <div>
    <h1>{translations.title}</h1>
    <Button>{translationsCommon.actions.add}</Button>
  </div>
);
```

## Locale File Structure

```json
{
  "title": "Produkty",
  "description": "Zarządzaj produktami w systemie",
  "columns": { "name": "Nazwa", "price": "Cena", "status": "Status" },
  "actions": { "save": "Zapisz", "cancel": "Anuluj", "delete": "Usuń" },
  "messages": { "saveSuccess": "Produkt zapisany pomyślnie" }
}
```

## Variable Interpolation

```tsx
import { withVariables } from "utils/string";

// Locale: { "itemsCount": "Znaleziono {count} elementów" }
const message = withVariables(translations.itemsCount, { count: "5" });
// → "Znaleziono 5 elementów"
```

## Key Rules

- **Type translations**: always `const translations: typeof localesPl = selectLocale({...})`
- **Component locales**: import from `./locales/pl.json` (relative path)
- **Common locales**: import from `locales/common/pl.json` (absolute path)
- **Multi-language ready**: structure supports adding `en.json` alongside `pl.json`
