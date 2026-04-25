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
        fuga
      </header>
      <main className={pageStyles.main}>
        <section>
          <Title level="h2">// スキルセット</Title>
          <code className={pageStyles.codeText}>const skillSet = () =&gt; {'{'}</code>
          <SkillComponent />
          <code className={pageStyles.codeText}>{"}"}</code>
          <Button>return TOP;</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
