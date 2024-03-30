import styles from "@styles/common/page.module.scss";
import Title from "@components/parts/Title";
import LinkButton from "@components/parts/LinkButton";
import Footer from "@components/Footer";

export default function profile() {
  return (
    <>
      <header className={styles.header}>hoge</header>
      <main className={styles.main}>
        <section>
          <Title level="h2">私について</Title>
          <code className={styles.codeText}>const AboutMe = () = </code>
          <dl>
            <dt>Personal</dt>
          </dl>
          <dd>
            <ul>
              <li>本告 智香（モトオリ チカ）</li>
              <li>兵庫県在住</li>
              <li>1988年11月生まれ</li>
              <li>株式会社エイチームライフデザイン 所属</li>
              <li>ESFJ</li>
            </ul>
            <ul>
              <li>X</li>
              <li>GitHub</li>
            </ul>
          </dd>
          <LinkButton>return morePortfolio;</LinkButton>
          <code className={styles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
