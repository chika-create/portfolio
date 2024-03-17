import styles from "@styles/common/page.module.scss";
import Title from "@components/parts/Title";
import LinkButton from "@components/parts/LinkButton";
import PortfolioList from "@components/portfolio/PortfolioList";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <p>Hello world</p>
        <section>
          <div className={styles.businessCard}>
            <p className={styles.businessCard__job}>Web Creater</p>
            <Title level="h1">本告 智香</Title>
            <p className={styles.businessCard__ruby}>CHIKA MOTOORI</p>
            <ul className={styles.businessCard__sns}>
              <li className={styles.businessCard__snsItem}>
                <a href="#" className={styles.businessCard__snsItem__github}>
                  GitHub
                </a>
              </li>
              <li className={styles.businessCard__snsItem}>
                <a href="#" className={styles.businessCard__snsItem__qiita}>
                  Qiita
                </a>
              </li>
              <li className={styles.businessCard__snsItem}>
                <a href="#" className={styles.businessCard__snsItem__x}>
                  X
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main className={styles.main}>
        <section>
          <Title level="h2">制作事例</Title>
          <code>const portfolio = () = </code>
          <PortfolioList />
          <LinkButton>return morePortfolio;</LinkButton>
          <code>閉じタグ</code>
        </section>
        <section>
          <Title level="h2">私について</Title>
          <code>const aboutMe = () =</code>
          <div>
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
          <ul className={styles.flexBox}>
            <li>
              <LinkButton>return moreAbout;</LinkButton>
            </li>
            <li>
              <LinkButton>return mySkillSet;</LinkButton>
            </li>
          </ul>
          <code>閉じタグ</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
