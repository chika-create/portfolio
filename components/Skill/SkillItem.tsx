import { SkillItem as SkillItemType } from "types/types";
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
import skillItemStyles from "@styles/skill/SkillItem.module.scss";

const SKILL_MAX_LEVEL = 5;

const skillIcons: Record<string, IconType> = {
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

const skillIconColors: Record<string, string> = {
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

interface SkillItemProps {
  item: SkillItemType;
}

export const SkillItem = ({ item }: SkillItemProps) => {
  const Icon = skillIcons[item.name] ?? SiGit;
  const iconColor = skillIconColors[item.name] ?? "#4B5563";

  return (
    <li className={skillItemStyles.skillListItem}>
      <dl className={skillItemStyles.skillListItemContents}>
        <dt className={skillItemStyles.skillListItemTitle}>
          <span className={skillItemStyles.skillListItemIcon}>
            <Icon color={iconColor} />
          </span>
          <span className={skillItemStyles.skillListItemTitle__name}>
            {item.name}
          </span>
          <span className={skillItemStyles.skillListItemTitle__level}>
            {item.level}/{SKILL_MAX_LEVEL}
          </span>
        </dt>
        <dd className={skillItemStyles.skillListItemDescription}>
          <span
            className={skillItemStyles.skillListItemDescription__levelbar}
            aria-label={`5段階中 ${item.level}`}
          >
            {Array.from({ length: SKILL_MAX_LEVEL }, (_, i) => (
              <span
                key={i}
                className={
                  i < item.level
                    ? skillItemStyles["skillListItemDescription__levelbar--on"]
                    : skillItemStyles["skillListItemDescription__levelbar--off"]
                }
              />
            ))}
          </span>
          <p className={skillItemStyles.skillListItemDescription__text}>
            {item.description}
          </p>
        </dd>
      </dl>
    </li>
  );
};
