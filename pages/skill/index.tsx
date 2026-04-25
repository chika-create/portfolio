import pageStyles from "@styles/common/page.module.scss";
import skillStyles from "@styles/skill/skill.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { Footer } from "@components/Footer";
import { Skill as SkillComponent } from "@components/Skill";

export default function Skill() {
  return (
    <>
      <header className={pageStyles.header}>
        <p className={skillStyles.pageTopComment}>// スキルセット</p>
      </header>
      <main className={pageStyles.main}>
        <section className={skillStyles.pageContent}>
          <Title level="h2">SkillSet</Title>
          <code className={pageStyles.codeText}>const skillSet = () =&gt; {'{'}</code>
          <p className={skillStyles.pageDescription}>
            技術スタックとスキルレベルを一覧にまとめたページです。
          </p>
          <SkillComponent />
          <code className={pageStyles.codeText}>{"}"}</code>
          <Button>return TOP;</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
