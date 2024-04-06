import styles from "@styles/common/page.module.scss";
import Title from "@components/parts/Title";
import LinkButton from "@components/parts/LinkButton";
import Footer from "@components/Footer";
import { Profile } from "@components/profile/";

export default function profile() {
  return (
    <>
      <header className={styles.header}>hoge</header>
      <main className={styles.main}>
        <section>
          <Title level="h2">私について</Title>
          <code className={styles.codeText}>const AboutMe = () = </code>
          <Profile />
          <LinkButton>return morePortfolio;</LinkButton>
          <code className={styles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
