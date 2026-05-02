import { SkillItem as SkillItemType } from "types/types";
import { IconType } from "react-icons";
import { FaReact, FaRobot } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiStorybook,
  SiEslint,
  SiPrettier,
  SiVercel,
  SiFigma,
  SiGoogleanalytics,
  SiGit,
} from "react-icons/si";
import skillItemStyles from "@styles/skill/SkillItem.module.scss";

const SKILL_MAX_LEVEL = 5;

const skillIcons: Record<string, IconType> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Git / GitHub / GitLab": SiGithub,
  HTML: SiHtml5,
  CSS: SiCss3,
  Storybook: SiStorybook,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Copilot: FaRobot,
  Vercel: SiVercel,
  Figma: SiFigma,
  "Google Analytics": SiGoogleanalytics,
};

interface SkillItemProps {
  item: SkillItemType;
}

export const SkillItem = ({ item }: SkillItemProps) => {
  const Icon = skillIcons[item.name] ?? SiGit;

  return (
    <li className={skillItemStyles.skillListItem}>
      <dl className={skillItemStyles.skillListItemContents}>
        <dt className={skillItemStyles.skillListItemTitle}>
          <span className={skillItemStyles.skillListItemIcon}>
            <Icon />
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
