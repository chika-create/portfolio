import { SkillItem as SkillItemType } from "types/types";
import skillItemStyles from "@styles/skill/SkillItem.module.scss";

const SKILL_MAX_LEVEL = 5;

interface SkillItemProps {
  item: SkillItemType;
}

export const SkillItem = ({ item }: SkillItemProps) => {
  return (
    <li className={skillItemStyles.skillListItem}>
      <dl className={skillItemStyles.skillListItemContents}>
        <dt className={skillItemStyles.skillListItemContents__header}>
          <span className={skillItemStyles.skillListItemContents__name}>
            {item.name}
          </span>
          <span className={skillItemStyles.skillListItemContents__level}>
            {item.level}/{SKILL_MAX_LEVEL}
          </span>
        </dt>
        <dd className={skillItemStyles.skillListItemContents__description}>
          <span
            className={skillItemStyles.skillListItemContents__levelbar}
            aria-label={`5段階中 ${item.level}`}
          >
            {Array.from({ length: SKILL_MAX_LEVEL }, (_, i) => (
              <span
                key={i}
                className={
                  i < item.level
                    ? skillItemStyles["skillListItemContents__levelbar--on"]
                    : skillItemStyles["skillListItemContents__levelbar--off"]
                }
              />
            ))}
          </span>
          <p className={skillItemStyles.skillListItemContents__text}>
            {item.description}
          </p>
        </dd>
      </dl>
    </li>
  );
};
