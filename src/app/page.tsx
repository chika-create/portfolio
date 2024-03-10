import styles from "./page.module.css";
import Title from "../../components/title/Title";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <p>Hello world</p>
        <section>
          <div className={styles.businessCard}>
            <p className={styles.businessCard__job}>Web Creater</p>
            <h1 className={styles.businessCard__name}>本告 智香</h1>
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
          <div>
            <div>
              <figure>
                <img src="https://placehold.jp/412x260.png" alt="" />
              </figure>
              <Title level="h3">ポートフォリオサイト</Title>
              <p>
                React, TypeScript, Next, storybook, ESLint, Prettier, Vercel,
                hogefuga
              </p>
            </div>
            <div>
              <figure>
                <img src="https://placehold.jp/412x260.png" alt="" />
              </figure>
              <Title level="h3">おにぎり計算機</Title>
              <p>React, TypeScript, MUI, ESLint, Prettier, Vercel</p>
            </div>
          </div>
          <button>return morePortfolio;</button>
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
          <ul>
            <li>
              <button>return moreAbout;</button>
            </li>
            <li>
              <button>return mySkillSet;</button>
            </li>
          </ul>
          <code>閉じタグ</code>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul>
          <li>TOP</li>
          <li>Portfolio</li>
          <li>AboutMe</li>
          <li>MySkillSet</li>
        </ul>
        <small>&copy; CHIKA MOTOORI 2024</small>
      </footer>
    </>
  );
}
