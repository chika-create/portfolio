import { SkillCategory } from "types/types";
import { Title } from "@components/parts/Title";
import { SkillItem } from "./SkillItem";
import skillSectionStyles from "@styles/skill/SkillSection.module.scss";

interface SkillSectionProps {
  category: SkillCategory;
}

export const SkillSection = ({ category }: SkillSectionProps) => {
  return (
    <>
      <div className={skillSectionStyles.skillSection__header}>
        <Title level="h2">{category.title}</Title>
      </div>
      <ul className={skillSectionStyles.skillList}>
        {category.items.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </ul>
    </>
  );
};
