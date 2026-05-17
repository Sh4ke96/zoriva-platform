"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <LocaleProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LocaleProvider>
  );
}
