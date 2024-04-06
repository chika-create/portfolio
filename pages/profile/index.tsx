import styles from "@styles/common/page.module.scss";
import profileStyles from "@styles/profile/profile.module.scss";
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
          <dl className={profileStyles.profile}>
            <dt className={profileStyles.profile__title}>Personal</dt>
            <dd>
              <ul className={profileStyles.profile__list}>
                <li className={profileStyles.profile__listItem}>
                  本告 智香（モトオリ チカ）
                </li>
                <li className={profileStyles.profile__listItem}>兵庫県在住</li>
                <li className={profileStyles.profile__listItem}>
                  1988年11月生まれ
                </li>
                <li className={profileStyles.profile__listItem}>
                  株式会社エイチームライフデザイン 所属
                </li>
                <li className={profileStyles.profile__listItem}>
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
          <div className={profileStyles.profile}>
            <Title level="h3">History</Title>
            <div>
              <dl className={profileStyles.profile__list}>
                <dt className={profileStyles.profile__listItem}>
                  <span className={profileStyles.profile__listItemTime}>
                    - <time datetime="2011-03-31">2011年</time>
                  </span>
                  <p>HAL大阪専門学校 WEB開発学科 卒</p>
                </dt>
                <dd>
                  基本情報技術者試験の資格取得やPHP、JavaScriptなどを使用しプロフラミングの基礎などを学習しました。
                </dd>
                <dt className={profileStyles.profile__listItem}>
                  <span className={profileStyles.profile__listItemTime}>
                    <time datetime="2011-04-01">2011年</time> -{" "}
                    <time datetime="2017-04-31">2017年</time>
                  </span>
                  <p>株式会社ドアズ</p>
                </dt>
                <dd>
                  Web制作とメンズシルバーアクセサリーの自社ブランドの2事業があり、
                  <br />
                  前者ではコーポレート・EC・医療・食品・自治体などの様々な種類のサイトの制作・運用を担当していました。
                  <br />
                  後者では楽天やAmazonなどのモール運営、特集ページの企画、商品企画、広告など広く担当していました。
                  <figure>
                    <img src="https://placehold.jp/412x260.png" alt="" />
                  </figure>
                </dd>
                <dt className={profileStyles.profile__listItem}>
                  <span className={profileStyles.profile__listItemTime}>
                    <time datetime="2017-05-01">2017年</time> -
                  </span>
                  <p>株式会社エイチームライフデザイン（現職）</p>
                </dt>
                <dd>
                  <p>
                    主にクレジットカードやFX、カードローンなど金融系アフィリエイトサイトの分析・改善を担当していました。
                  </p>
                  <p>
                    マーケティングの担当者と共にユーザー分析・サイト分析から改善案を考案、
                    <br />
                    デザイナーで実装しABテストを行うことでサイト改善に取り組みました。
                  </p>
                  <p>
                    またReact
                    Nativeを使用しFXのデモトレードアプリの制作に携わりました。
                    <br />
                    制作以外では小規模デザイナーチームのマネジメントを担当し、育成に力を入れました。
                  </p>
                </dd>
              </dl>
            </div>
          </div>
          <section>
            <Title level="h3">大切にしていること</Title>
            <dl className={profileStyles.profile}>
              <dt className={profileStyles.profile__title}>Business</dt>
              <dd>
                <ul className={profileStyles.profile__list}>
                  <li className={profileStyles.profile__listItem}>
                    チームで一体感を持って仕事をする
                  </li>
                  <li className={profileStyles.profile__listItem}>
                    双方で配慮、尊重をする
                  </li>
                  <li className={profileStyles.profile__listItem}>
                    目的意識を持って仕事をする
                  </li>
                </ul>
              </dd>
              <dt className={profileStyles.profile__title}>Create</dt>
              <dd>
                <ul className={profileStyles.profile__list}>
                  <li className={profileStyles.profile__listItem}>
                    品質とスピードのバランスを考える
                  </li>
                  <li className={profileStyles.profile__listItem}>
                    今後の運用を考えて開発をする
                  </li>
                </ul>
              </dd>
            </dl>
          </section>
          <section>
            <Title level="h3">苦手なこと</Title>
            <dl className={profileStyles.profile}>
              <dt className={profileStyles.profile__title}>Business</dt>
              <dd>
                <ul className={profileStyles.profile__list}>
                  <li className={profileStyles.profile__listItem}>
                    ビジョンを描くこと
                  </li>
                </ul>
              </dd>
            </dl>
            <dl className={profileStyles.profile}>
              <dt className={profileStyles.profile__title}>Create</dt>
              <dd>
                <ul className={profileStyles.profile__list}>
                  <li className={profileStyles.profile__listItem}>デザイン</li>
                </ul>
              </dd>
            </dl>
          </section>
          <LinkButton>return morePortfolio;</LinkButton>
          <code className={styles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
