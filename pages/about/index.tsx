import type { Metadata } from "next";
import pageStyles from "@styles/common/page.module.scss";
import aboutStyles from "@styles/about/about.module.scss";
import layoutStyles from "@styles/about/layout.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { About as AboutComponent } from "@components/About";
import { Footer } from "@components/Footer";

export const metadata: Metadata = {
  title: "About | Chika Motoori",
  description: "本告 智香についての紹介ページです",
};

export default function AboutPage() {
  return (
    <>
      <main className={aboutStyles.main}>
        {/* メインビジュアル枠 */}
        <div className={layoutStyles.container}>
          <div className={aboutStyles.mv}>
            Main Visual Placeholder
          </div>
        </div>

        <section className={layoutStyles.container}>
          <div className={aboutStyles.pageHeader}>
            <Title level="h1">私について</Title>
            <code className={pageStyles.codeText}>const about = () ={'>'} {"{"}</code>
          </div>
        </section>

        <AboutComponent />

        <section className={layoutStyles.container}>
          <div className={aboutStyles.pageFooter}>
            <code className={pageStyles.codeText}>{"}"}</code>
            <div className={aboutStyles.returnButton}>
              <Button href="/">return TOP;</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
