import { FaReact, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiVercel,
  SiGoogleanalytics,
} from "react-icons/si";
import { TopSkillItem } from "types/types";

export const topSkillSet: TopSkillItem[] = [
  { name: "React", color: "#61DAFB", Icon: FaReact },
  { name: "Next.js", color: "#111111", Icon: SiNextdotjs },
  { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { name: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { name: "HTML", color: "#E34F26", Icon: SiHtml5 },
  { name: "CSS", color: "#1572B6", Icon: SiCss },
  { name: "Git", color: "#F05032", Icon: SiGit },
  { name: "Figma", color: "#F24E1E", Icon: FaFigma },
  { name: "Vercel", color: "#111111", Icon: SiVercel },
  {
    name: "Google Analytics",
    color: "#E37400",
    Icon: SiGoogleanalytics,
  },
];
