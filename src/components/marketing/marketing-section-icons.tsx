import {
  Accessibility,
  BellRing,
  CalendarClock,
  Heart,
  NotebookPen,
  Shield,
  Sparkles,
  Stethoscope,
  Tags,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const sectionIconMap = {
  calm: Sparkles,
  caregivers: Shield,
  heart: Heart,
  history: Stethoscope,
  notes: NotebookPen,
  parents: UsersRound,
  pill: Stethoscope,
  pricing: Tags,
  profiles: UsersRound,
  reminder: BellRing,
  schedule: CalendarClock,
  seniors: Accessibility,
} as const;

type SectionIconKey = keyof typeof sectionIconMap;

export function getMarketingSectionIcon(icon: string): LucideIcon {
  return sectionIconMap[icon as SectionIconKey] ?? Sparkles;
}
