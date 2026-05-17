import {
  Accessibility,
  BellRing,
  ClipboardList,
  CircleCheckBig,
  CircleQuestionMark,
  HandHeart,
  HeartPulse,
  Languages,
  LogIn,
  Moon,
  Pill,
  PillBottle,
  ShieldPlus,
  Sun,
  UserRoundPlus,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

import { cn } from "@/lib/utils";

type SiteIconProps = LucideProps & {
  decorative?: boolean;
  icon: LucideIcon;
  label?: string;
};

const InstagramIcon = (({ className, ...props }: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)) as LucideIcon;

const FacebookIcon = (({ className, ...props }: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 3h-2.2C10.7 3 9.5 4.2 9.5 6.3V9H7v3h2.5v9h3.8v-9H16l.5-3h-3.2V6.8c0-.9.3-1.3 1.3-1.3H16V3Z" />
  </svg>
)) as LucideIcon;

const LinkedInIcon = (({ className, ...props }: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 10v6" />
    <path d="M8 7.5h.01" />
    <path d="M12 16v-3.3c0-1.4 1-2.4 2.3-2.4 1.4 0 2.2.9 2.2 2.8V16" />
    <path d="M12 10v1.2" />
  </svg>
)) as LucideIcon;

const TiktokIcon = (({ className, ...props }: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M14 4v8.1a3.6 3.6 0 1 1-3-3.5" />
    <path d="M14 4c.6 1.7 2 3 3.8 3.5" />
    <path d="M14 7.2c1.2 1.2 2.7 1.8 4.5 1.8" />
  </svg>
)) as LucideIcon;

const XIcon = (({ className, ...props }: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M5.4 4h4.05l3.2 4.66L16.67 4H18.8l-5.22 5.97L19.8 20h-4.05l-3.54-5.13L7.73 20H5.6l5.62-6.43L5.4 4Zm2 1.53L16.55 18.47h.86L8.26 5.53H7.4Z" />
  </svg>
)) as LucideIcon;

export const siteIcons = {
  account: LogIn,
  accountCreate: UserRoundPlus,
  accessibility: Accessibility,
  app: HeartPulse,
  check: CircleCheckBig,
  features: ClipboardList,
  facebook: FacebookIcon,
  help: CircleQuestionMark,
  instagram: InstagramIcon,
  language: Languages,
  linkedin: LinkedInIcon,
  moon: Moon,
  package: PillBottle,
  pill: Pill,
  reminder: BellRing,
  security: ShieldPlus,
  sun: Sun,
  tiktok: TiktokIcon,
  twitterX: XIcon,
  users: HandHeart,
} as const;

export function SiteIcon({
  className,
  decorative = false,
  icon: Icon,
  label,
  strokeWidth = 1.9,
  ...props
}: SiteIconProps) {
  const accessibilityProps = decorative
    ? { "aria-hidden": true }
    : { "aria-label": label, role: "img" as const };

  return (
    <Icon
      className={cn("shrink-0", className)}
      strokeWidth={strokeWidth}
      {...accessibilityProps}
      {...props}
    />
  );
}
