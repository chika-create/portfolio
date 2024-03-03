import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <p>Hello world</p>
        <section>
          <div>
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
      </main>
      <footer className={styles.footer}>
        <p>これはfooterだよ</p>
      </footer>
    </>
  );
}
