import { SkillCategory } from "types/types";
import { Title } from "@components/parts/Title";
import { SkillItem } from "./SkillItem";
import skillSectionStyles from "@styles/skill/SkillSection.module.scss";

interface SkillSectionProps {
  category: SkillCategory;
}

export const SkillSection = ({ category }: SkillSectionProps) => {
  return (
    <section className={skillSectionStyles.skillSection}>
      <Title level="h2">{category.title}</Title>
      <ul className={skillSectionStyles.skillList}>
        {category.items.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};
