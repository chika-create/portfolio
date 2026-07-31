import pageStyles from "@styles/common/page.module.scss";
import { SkillSet as SkillSetComponent } from "@components/SkillSet";
import { PageMeta } from "@components/PageMeta";
import { CodeSection } from "@components/parts/CodeSection";

export default function SkillSetPage() {
  return (
    <>
      <PageMeta title="SkillSet | Chika Motoori" description="本告 智香のスキルセットを紹介するページです" />
      <main className={pageStyles.main}>
        <CodeSection
          title="スキルセット"
          titleLevel="h1"
          titleStyle="h1"
          sectionClassName={pageStyles.sectionInner}
          openingCode="const skillSet = () => {"
        >
          <SkillSetComponent />
        </CodeSection>
      </main>
    </>
  );
}
