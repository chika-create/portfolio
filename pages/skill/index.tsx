import styles from "@styles/common/page.module.scss";
import { Title } from "@components/parts/Title/";
import { Button } from "@components/parts/Button/";
import { Footer } from "@components/Footer/";
import { Skill } from "@components/Skill";

export default function profile() {
  return (
    <>
      <header className={styles.header}>hoge</header>
      <main className={styles.main}>
        <section>
          <Title level="h2">私について</Title>
          <code className={styles.codeText}>const AboutMe = () = </code>
          <Skill />
          <Button>return morePortfolio;</Button>
          <code className={styles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
