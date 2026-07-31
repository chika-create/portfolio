import aboutStyles from "@styles/about/about.module.scss";
import layoutStyles from "@styles/about/layout.module.scss";
import { Button } from "@components/parts/Button";
import { CodeSection } from "@components/parts/CodeSection";
import { About as AboutComponent } from "@components/About";
import { PageMeta } from "@components/PageMeta";

export default function AboutPage() {
  return (
    <>
      <PageMeta title="About | Chika Motoori" description="本告 智香についての紹介ページです" />
      <main className={aboutStyles.main}>
        {/* メインビジュアル枠 */}
        <div className={layoutStyles.container}>
          <div className={aboutStyles.mv}>
            Main Visual Placeholder
          </div>
        </div>

        <CodeSection
          title="私について"
          titleLevel="h1"
          titleStyle="h1"
          sectionClassName={layoutStyles.container}
          innerClassName={aboutStyles.pageHeader}
          openingCode="const about = () => {"
        />

        <AboutComponent />

        <CodeSection
          sectionClassName={layoutStyles.container}
          innerClassName={aboutStyles.pageFooter}
          closingCode="}"
        >
          <div className={aboutStyles.returnButton}>
            <Button href="/">return TOP;</Button>
          </div>
        </CodeSection>
      </main>
    </>
  );
}
