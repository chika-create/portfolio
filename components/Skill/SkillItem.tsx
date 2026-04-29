import { SkillItem as SkillItemType } from "types/types";
import skillItemStyles from "@styles/skill/SkillItem.module.scss";

const SKILL_MAX_LEVEL = 5;

interface SkillItemProps {
  item: SkillItemType;
}

export const SkillItem = ({ item }: SkillItemProps) => {
  return (
    <li className={skillItemStyles.skillListItem}>
      <div className={skillItemStyles.skillListItem__header}>
        <span className={skillItemStyles.skillListItem__name}>{item.name}</span>
        <span>
          {item.level}/{SKILL_MAX_LEVEL}
        </span>
        <span
          className={skillItemStyles.skillListItem__Level}
          aria-label={`5段階中 ${item.level}`}
        >
          {Array.from({ length: SKILL_MAX_LEVEL }, (_, i) => (
            <span
              key={i}
              className={
                i < item.level
                  ? skillItemStyles["skillListItem__Level--barOn"]
                  : skillItemStyles["skillListItem__Level--barOff"]
              }
            />
          ))}
        </span>
      </div>
      <p className={skillItemStyles.skillListItem__description}>
        {item.description}
      </p>
    </li>
  );
};
