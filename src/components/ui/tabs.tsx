"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    className={cn(
      "bg-muted/60 border-border/60 inline-grid h-auto w-full grid-cols-2 rounded-full border p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLElement,
  React.ComponentProps<typeof TabsPrimitive.Tab>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Tab
    ref={ref}
    data-slot="tabs-trigger"
    className={cn(
      "text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-selected:bg-primary aria-selected:text-primary-foreground inline-flex h-10 items-center justify-center rounded-full px-4 text-base font-medium whitespace-nowrap transition-all duration-300 ease-in-out outline-none focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 aria-selected:shadow-[0_0.9rem_1.75rem_-1rem_rgba(18,124,126,0.55)]",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof TabsPrimitive.Panel>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Panel
    ref={ref}
    data-slot="tabs-content"
    className={cn("outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
