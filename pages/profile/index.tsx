import Link from "next/link";
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
          <dl className={styles.profile}>
            <dt className={styles.profile__title}>Personal</dt>
            <dd>
              <ul className={styles.profile__list}>
                <li className={styles.profile__listItem}>
                  本告 智香（モトオリ チカ）
                </li>
                <li className={styles.profile__listItem}>兵庫県在住</li>
                <li className={styles.profile__listItem}>1988年11月生まれ</li>
                <li className={styles.profile__listItem}>
                  株式会社エイチームライフデザイン 所属
                </li>
                <li className={styles.profile__listItem}>
                  <Link href="https://www.16personalities.com/ja/esfj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC">
                    <a target="_blank" rel="noopener noreferrer">
                      ESFJ
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>X</li>
                <li>GitHub</li>
              </ul>
            </dd>
          </dl>
          <LinkButton>return morePortfolio;</LinkButton>
          <code className={styles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
