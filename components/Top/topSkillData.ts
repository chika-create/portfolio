import type { TopSkillItem } from "types/types";
import { fallbackSkillIcon, skillIconColors, skillIcons } from "@components/Skill/skillIconMap";

const topSkillSourceNames = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Git / GitHub / GitLab",
  "HTML",
  "CSS",
  "Storybook",
  "ESLint",
  "Prettier",
  "Copilot",
  "Vercel",
  "Figma",
  "Google Analytics",
] as const;

type TopSkillSourceName = (typeof topSkillSourceNames)[number];

const topSkillLabelOverrides: Partial<Record<TopSkillSourceName, string>> = {
  "Git / GitHub / GitLab": "Git",
};

export const topSkillSet: TopSkillItem[] = topSkillSourceNames.map((sourceName) => ({
  name: topSkillLabelOverrides[sourceName] ?? sourceName,
  color: skillIconColors[sourceName] ?? "#a1a1aa",
  Icon: skillIcons[sourceName] ?? fallbackSkillIcon,
}));
