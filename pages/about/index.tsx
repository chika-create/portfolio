import pageStyles from "@styles/common/page.module.scss";
import aboutStyles from "@styles/about/about.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { Footer } from "@components/Footer";
import { About as AboutComponent } from "@components/About";

export default function About() {
  return (
    <>
      <main className={pageStyles.main} style={{ width: "100%", padding: "60px 0 0" }}>
        {/* メインビジュアル枠 */}
        <div className={aboutStyles.container}>
           <div className={aboutStyles.mv}>
            Main Visual Placeholder
          </div>
        </div>

        <section className={aboutStyles.container} style={{ marginTop: "5rem", marginBottom: "3rem" }}>
          <Title level="h1">私について</Title>
          <code className={pageStyles.codeText}>const about = () ={'>'} {"{"}</code>
        </section>

        <AboutComponent />

        <section className={aboutStyles.container} style={{ marginTop: "4rem", marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ textAlign: "left" }}>
            <code className={pageStyles.codeText}>{"}"}</code>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <Button href="/">return TOP;</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
