"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Button
          aria-label="Set light mode"
          data-testid="theme-light"
          size="sm"
          variant="outline"
        >
          <Sun />
          Light
        </Button>
        <Button
          aria-label="Set dark mode"
          data-testid="theme-dark"
          size="sm"
          variant="outline"
        >
          <Moon />
          Dark
        </Button>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Button
        aria-label="Set light mode"
        data-testid="theme-light"
        size="sm"
        variant={isDark ? "outline" : "default"}
        onClick={() => setTheme("light")}
      >
        <Sun />
        Light
      </Button>
      <Button
        aria-label="Set dark mode"
        data-testid="theme-dark"
        size="sm"
        variant={isDark ? "default" : "outline"}
        onClick={() => setTheme("dark")}
      >
        <Moon />
        Dark
      </Button>
    </div>
  );
}
