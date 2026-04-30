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
        <dt className={skillItemStyles.skillListItemTitle}>
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
