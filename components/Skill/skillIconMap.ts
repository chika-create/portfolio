import { IconType } from "react-icons";
import { FaReact, FaRobot } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiHtml5,
  SiCss,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiVercel,
  SiFigma,
  SiGoogleanalytics,
} from "react-icons/si";

export const fallbackSkillIcon = SiGit;

export const skillIcons: Record<string, IconType> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Git / GitHub / GitLab": SiGit,
  HTML: SiHtml5,
  CSS: SiCss,
  Storybook: SiStorybook,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Copilot: FaRobot,
  Vercel: SiVercel,
  Figma: SiFigma,
  "Google Analytics": SiGoogleanalytics,
};

export const skillIconColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#111111",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "Git / GitHub / GitLab": "#F05032",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Storybook: "#FF4785",
  ESLint: "#4B32C3",
  Prettier: "#F7B93E",
  Copilot: "#0EA5E9",
  Vercel: "#111111",
  Figma: "#F24E1E",
  "Google Analytics": "#E37400",
};
