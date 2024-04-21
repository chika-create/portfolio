import { Title } from "@components/parts/Title/";
import profileStyles from "@styles/profile/profile.module.scss";

export const Profile = () => {
  return (
    <>
      <div className={profileStyles.profile}>
        <div className={profileStyles[`profile__title--personal`]}>
          <Title level="h3">Personal</Title>
        </div>
        <div className={profileStyles[`profile--personal`]}>
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
        </div>
        <div className={profileStyles[`profile__title--history`]}>
          <Title level="h3">History</Title>
        </div>
        <p className={profileStyles[`profile__historyYear--student`]}>
          <time dateTime="2007-04-01">2007年</time> -{" "}
          <time dateTime="2011-03-31">2011年</time>
        </p>
        <div className={profileStyles[`profile__history--student`]}>
          <p className={profileStyles.history__titleText}>
            HAL大阪専門学校 WEB開発学科
          </p>
          <p className={profileStyles.history__text}>
            基本情報技術者試験の資格取得やPHP、JavaScriptなどを使用しプロフラミングの基礎などを学習しました。
          </p>
        </div>
        <p className={profileStyles[`profile__historyYear--newGraduate`]}>
          <time dateTime="2011-04-01">2011年</time> -{" "}
          <time dateTime="2017-04-31">2017年</time>
        </p>
        <div className={profileStyles[`profile__history--newGraduate`]}>
          <p>株式会社ドアズ</p>
          <p>
            Web制作とメンズシルバーアクセサリーの自社ブランドの2事業があり、
            <br />
            前者ではコーポレート・EC・医療・食品・自治体などの様々な種類のサイトの制作・運用を担当していました。
            <br />
            後者では楽天やAmazonなどのモール運営、特集ページの企画、商品企画、広告など広く担当していました。
          </p>
        </div>
        <p className={profileStyles[`profile__historyYear--currentJob`]}>
          <time dateTime="2017-05-01">2017年</time> -
        </p>
        <div className={profileStyles[`profile__history--currentJob`]}>
          <p>株式会社エイチームライフデザイン（現職）</p>
          <p>
            主にクレジットカードやFX、カードローンなど金融系アフィリエイトサイトの分析・改善を担当していました。
          </p>
          <p>
            マーケティングの担当者と共にユーザー分析・サイト分析から改善案を考案、
            <br />
            デザイナーで実装しABテストを行うことでサイト改善に取り組みました。
          </p>
          <p>
            またReact Nativeを使用しFXのデモトレードアプリの制作に携わりました。
            <br />
            制作以外では小規模デザイナーチームのマネジメントを担当し、育成に力を入れました。
          </p>
        </div>
      </div>
      <section className={profileStyles.policy}>
        <div className={profileStyles.policy__title}>
          <Title level="h3">大切にしていること</Title>
        </div>
        <p className={profileStyles.policy__title__business}>Business</p>
        <ul className={profileStyles.policy__text}>
          <li>チームで一体感を持って仕事をする</li>
          <li>双方で配慮、尊重をする</li>
          <li>目的意識を持って仕事をする</li>
        </ul>
        <p className={profileStyles.policy__title__create}>Create</p>
        <ul className={profileStyles.policy__text2}>
          <li>品質とスピードのバランスを考える</li>
          <li>今後の運用を考えて開発をする</li>
        </ul>
        <div className={profileStyles.notGood__title}>
          <Title level="h3">苦手なこと</Title>
        </div>
        <p className={profileStyles.notGood__title__business}>Business</p>
        <ul className={profileStyles.notGood__text}>
          <li>ビジョンを描くこと</li>
        </ul>
        <p className={profileStyles.notGood__title__create}>Create</p>
        <ul className={profileStyles.notGood__text2}>
          <li>デザイン</li>
        </ul>
      </section>
    </>
  );
};
