import { SkillItem as SkillItemType } from "types/types";
import skillItemStyles from "@styles/skill/SkillItem.module.scss";

const SKILL_MAX_LEVEL = 5;

interface SkillItemProps {
  item: SkillItemType;
}

export const SkillItem = ({ item }: SkillItemProps) => {
  return (
    <li className={skillItemStyles.skillItem}>
      <div className={skillItemStyles.skillItem__header}>
        <span className={skillItemStyles.skillItem__name}>{item.name}</span>
        <span>
          {item.level}/{SKILL_MAX_LEVEL}
        </span>
        <span
          className={skillItemStyles.skillLevel}
          aria-label={`5段階中 ${item.level}`}
        >
          {Array.from({ length: SKILL_MAX_LEVEL }, (_, i) => (
            <span
              key={i}
              className={
                i < item.level
                  ? skillItemStyles.skillLevel__barOn
                  : skillItemStyles.skillLevel__barOff
              }
            />
          ))}
        </span>
      </div>
      <p className={skillItemStyles.skillItem__description}>
        {item.description}
      </p>
    </li>
  );
};
