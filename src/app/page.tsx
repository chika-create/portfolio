import styles from "@styles/common/page.module.scss";
import topStyles from "@styles/top/top.module.scss";
import { Title } from "@components/parts/Title/index";
import { Button } from "@components/parts/Button/index";
import { BusinessCard } from "@components/BusinessCard";
import { PortfolioList } from "@components/PortfolioList/index";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <BusinessCard />
      <main className={styles.main}>
        <section>
          <Title level="h2">制作事例</Title>
          <code className={styles.codeText}>const portfolio = () = </code>
          <PortfolioList />
          <Button>return morePortfolio;</Button>
          <code className={styles.codeText}>{"}"}</code>
        </section>
        <section>
          <Title level="h2">私について</Title>
          <code className={styles.codeText}>const aboutMe = () =</code>
          <div className={topStyles.aboutText}>
            <p>
              1988年、兵庫在住のWeb制作者です。
              2011年に神戸のweb制作会社に6年働き、その後エイチームに転職し2024年現在7年目です。
            </p>
            <p>
              前職のweb制作会社では医療・食品・教育関連など様々なweb制作の制作の傍ら
              自社シルバーアクセサリーのECサイトの企画・運営もしていました。
            </p>
            <p>
              エイチームではマーケッター・エンジニアと一緒にサイト改善を行なっています。
              チームで働くこととフロントエンドが好きです。
            </p>
          </div>
          <ul className={topStyles.flexBox}>
            <li>
              <Button>return moreAbout;</Button>
            </li>
            <li>
              <Button>return mySkillSet;</Button>
            </li>
          </ul>
          <code className={styles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
