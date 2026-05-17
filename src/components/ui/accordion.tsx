"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion<Value = string>({
  className,
  ...props
}: AccordionPrimitive.Root.Props<Value>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("w-full", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-border/60 border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex w-full items-center justify-between gap-4 py-5 text-left",
          className,
        )}
        {...props}
      >
        <span className="text-foreground text-lg leading-7 font-medium">{children}</span>
        <ChevronDown className="text-muted-foreground size-4.5 transition-transform duration-200 group-data-panel-open/accordion-trigger:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "text-muted-foreground overflow-hidden pr-8 pb-5 text-base leading-7",
        className,
      )}
      {...props}
    />
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
