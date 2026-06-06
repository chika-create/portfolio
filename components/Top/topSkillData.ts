import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiHtml5,
  SiCss,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiGithubcopilot,
  SiVercel,
  SiFigma,
  SiGoogleanalytics,
} from "react-icons/si";
import { TopSkillItem } from "types/types";

export const topSkillSet: TopSkillItem[] = [
  { name: "React", color: "#61DAFB", Icon: SiReact },
  { name: "Next.js", color: "#111111", Icon: SiNextdotjs },
  { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "Git", color: "#F05032", Icon: SiGit },
  { name: "HTML", color: "#E34F26", Icon: SiHtml5 },
  { name: "CSS", color: "#1572B6", Icon: SiCss },
  { name: "Storybook", color: "#FF4785", Icon: SiStorybook },
  { name: "ESLint", color: "#4B32C3", Icon: SiEslint },
  { name: "Prettier", color: "#F7B93E", Icon: SiPrettier },
  { name: "Copilot", color: "#0EA5E9", Icon: SiGithubcopilot },
  { name: "Vercel", color: "#111111", Icon: SiVercel },
  { name: "Figma", color: "#F24E1E", Icon: SiFigma },
  {
    name: "Google Analytics",
    color: "#E37400",
    Icon: SiGoogleanalytics,
  },
];
