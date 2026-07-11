import { Title } from "@components/parts/Title";
import { LevelGuide } from "./LevelGuide";
import { SkillSection } from "./SkillSection";
import { levelGuide, skillCategories } from "./skillData";
import skillStyles from "@styles/skill/skill.module.scss";

export const Skill = () => {
  return (
    <>
      <section className={skillStyles.skillSummary}>
        <div className={skillStyles.skillSummary__title}>
          <Title level="h2">SkillSet</Title>
        </div>
        <div className={skillStyles.skillSummary__levelGuide}>
          <p>
            技術スタックと習熟度を紹介します。<br />
            各スキルは5段階で評価しています。
          </p>
          <LevelGuide levelGuide={levelGuide} />
        </div>
      </section>

      {skillCategories.map((category) => (
        <SkillSection key={category.label} category={category} />
      ))}
    </>
  );
};
