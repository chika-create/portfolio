import { Title } from "@components/parts/Title";
import profileStyles from "@styles/profile/profileExperience.module.scss";

export const ProfileExperience = () => {
  return (
    <>
      <div className={profileStyles[`history`]}>
        <div className={profileStyles[`history__title`]}>
          <Title level="h3">History</Title>
        </div>
        <p className={profileStyles[`history__year--student`]}>
          <time dateTime="2007-04-01">2007年</time> -{" "}
          <time dateTime="2011-03-31">2011年</time>
        </p>
        <div className={profileStyles[`history--student`]}>
          <p className={profileStyles.history__titleText}>
            HAL大阪専門学校 WEB開発学科
          </p>
          <p className={profileStyles.history__text}>
            基本情報技術者試験の資格取得やPHP、JavaScriptなどを使用しプログラミングの基礎などを学習しました。
          </p>
        </div>
        <p className={profileStyles[`history__year--newGraduate`]}>
          <time dateTime="2011-04-01">2011年</time> -{" "}
          <time dateTime="2017-04-30">2017年</time>
        </p>
        <div className={profileStyles[`history--newGraduate`]}>
          <p>株式会社ドアズ</p>
          <p>
            Web制作とメンズシルバーアクセサリーの自社ブランドの2事業があり、
            <br />
            前者ではコーポレート・EC・医療・食品・自治体などの様々な種類のサイトの制作・運用を担当していました。
            <br />
            後者では楽天やAmazonなどのモール運営、特集ページの企画、商品企画、広告など広く担当していました。
          </p>
        </div>
        <p className={profileStyles[`history__year--currentJob`]}>
          <time dateTime="2017-05-01">2017年</time> -
        </p>
        <div className={profileStyles[`history--currentJob`]}>
          <p>株式会社エイチームライフデザイン（現職）</p>
          <p>
            主にクレジットカードや証券口座、FX、カードローンなど金融系アフィリエイトサイトの分析・改善を担当していました。
          </p>
          <p>
            マーケティングの担当者と共にユーザー分析・サイト分析から改善案を考案、
            <br />
            デザイナーで実装しABテストを行うことでサイト改善に取り組みました。
          </p>
          <p>
            また React Native を使用し FX のデモトレードアプリの制作に携わりました。
            <br />
            制作以外では小規模デザイナーチームのマネジメントを担当し、育成に力を入れました。
          </p>
        </div>
      </div>
    </>
  );
};
