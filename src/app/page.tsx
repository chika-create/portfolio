import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <p>Hello world</p>
        <section>
          <div className={styles.businessCard}>
            <p>Web Creater</p>
            <h1>本告 智香</h1>
            <p>CHIKA MOTOORI</p>
            <ul>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Qiita</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <main className={styles.main}>
        <section>
          <h2>制作事例</h2>
          <code>const portfolio = () = </code>
          <div>
            <div>
              <figure>
                <img src="https://placehold.jp/412x260.png" alt="" />
              </figure>
              <h3>ポートフォリオサイト</h3>
              <p>
                React, TypeScript, Next, storybook, ESLint, Prettier, Vercel,
                hogefuga
              </p>
            </div>
            <div>
              <figure>
                <img src="https://placehold.jp/412x260.png" alt="" />
              </figure>
              <h3>おにぎり計算機</h3>
              <p>React, TypeScript, MUI, ESLint, Prettier, Vercel</p>
            </div>
          </div>
          <button>return morePortfolio;</button>
          <code>閉じタグ</code>
        </section>
        <section>
          <h2>私について</h2>
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
        <small>©️CHIKA MOTOORI 2024</small>
      </footer>
    </>
  );
}
