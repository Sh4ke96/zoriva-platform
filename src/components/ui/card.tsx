import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-3 px-6 pt-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-foreground text-[1.35rem] font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground text-base leading-7", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="card-content" className={cn("px-6 pb-6", className)} {...props} />
  );
}

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
