import { SkillCategory } from "@app-types/types";
import { Title } from "@components/parts/Title";
import { SkillItem } from "./SkillItem";
import skillSectionStyles from "@styles/skillset/skillSection.module.scss";

interface SkillSectionProps {
  category: SkillCategory;
}

export const SkillSection = ({ category }: SkillSectionProps) => {
  return (
    <section className={skillSectionStyles.skillSection}>
      <div className={skillSectionStyles.skillSection__title}>
        <Title level="h2">{category.title}</Title>
      </div>
      <ul className={skillSectionStyles.skillList}>
        {category.items.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};
