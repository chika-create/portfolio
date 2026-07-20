import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";
import { Footer } from "@components/Footer";
import { SkillSet as SkillSetComponent } from "@components/SkillSet";

export default function SkillSet() {
  return (
    <>
      <main className={pageStyles.main}>
        <section>
          <Title level="h1">スキルセット</Title>
          <code className={pageStyles.codeText}>const skillSet = () =&gt; {'{'}</code>
          <SkillSetComponent />
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
