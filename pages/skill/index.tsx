import pageStyles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { Footer } from "@components/Footer";
import { Skill } from "@components/Skill";

export default function profile() {
  return (
    <>
      <header className={pageStyles.header}>hoge</header>
      <main className={pageStyles.main}>
        <section>
          <Title level="h2">私について</Title>
          <code className={pageStyles.codeText}>const AboutMe = () = </code>
          <Skill />
          <Button>return morePortfolio;</Button>
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
