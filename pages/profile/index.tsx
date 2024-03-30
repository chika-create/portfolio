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
                  <a
                    href="https://www.16personalities.com/ja/esfj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ESFJ
                  </a>
                </li>
              </ul>
              <ul>
                <li>X</li>
                <li>GitHub</li>
              </ul>
            </dd>
          </dl>
          <dl className={styles.profile}>
            <dt className={styles.profile__title}>History</dt>
            <dd>
              <ul className={styles.profile__list}>
                <li className={styles.profile__listItem}>
                  <span className={styles.profile__listItemTime}>
                    <time datetime="2007-04-01">2007年</time> -{" "}
                    <time datetime="2011-03-31">2011年</time>
                  </span>
                  <p>HAL大阪 WEB開発学科</p>
                  <p>
                    プログラミングの基礎、JAVA、PHP、javascript
                    などを使用しWebプロフラミングの基礎を学習しました。
                  </p>
                </li>
                <li className={styles.profile__listItem}>
                  <span className={styles.profile__listItemTime}>
                    <time datetime="2011-04-01">2011年</time> -{" "}
                    <time datetime="2017-04-31">2017年</time>
                  </span>
                  <p>株式会社ドアズ</p>
                  <p>
                    Web制作とメンズシルバーアクセサリーの自社ブランドの2事業があり、
                    前者では教育・医療・食品関係を中心にサイトの制作・運用を担当していました。
                    後者では楽天やAmazonなどのモール運営、特集ページの企画、商品企画、広告などの販促など広く担当していました。
                  </p>
                </li>
                <li className={styles.profile__listItem}>
                  <span className={styles.profile__listItemTime}>
                    <time datetime="2017-05-01">2017年</time> -
                  </span>
                  <p>株式会社エイチーム</p>
                  <p>
                    主に金融系のアフィリエイトサイトのサイト分析・改善を担当していました。
                    <br />
                    小規模デザイナーチームのマネジメントを担当し、育成に力を入れました。
                  </p>
                </li>
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
