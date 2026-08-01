import { Title } from "@components/parts/Title";
import { LevelGuide } from "./LevelGuide";
import { SkillSection } from "./SkillSection";
import { levelGuide, skillCategories } from "./skillData";
import skillsetStyles from "@styles/skillset/skillset.module.scss";

export const SkillSet = () => {
  return (
    <div className={skillsetStyles.skillInner}>
      <section className={skillsetStyles.skillSummary}>
        <div className={skillsetStyles.skillSummary__title}>
          <Title level="h2">SkillSet</Title>
        </div>
        <div className={skillsetStyles.skillSummary__levelGuide}>
          <p>
            技術スタックと習熟度を紹介します。<br />各スキルは5段階で評価しています。
          </p>
          <LevelGuide levelGuide={levelGuide} />
        </div>
      </section>

      {skillCategories.map((category) => (
        <SkillSection key={category.label} category={category} />
      ))}
    </div>
  );
};
