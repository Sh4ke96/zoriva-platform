import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const layoutContainerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    width: {
      compact: "max-w-5xl",
      content: "max-w-7xl",
      wide: "max-w-screen-2xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    width: "content",
  },
});

type LayoutContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof layoutContainerVariants>;

export function LayoutContainer({ className, width, ...props }: LayoutContainerProps) {
  return <div className={cn(layoutContainerVariants({ width }), className)} {...props} />;
}
