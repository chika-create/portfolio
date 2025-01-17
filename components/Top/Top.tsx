import pageStyles from "@styles/common/page.module.scss";
import topStyles from "@styles/top/top.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { BusinessCard } from "@components/BusinessCard";
import { PortfolioList } from "@components/PortfolioList";
import { Footer } from "@components/Footer/";

export function Top() {
  return (
    <>
      <header className={topStyles.header}>
        <p className={topStyles.introduction}>Hello world</p>
        <BusinessCard />
      </header>

      <main className={pageStyles.main}>
        <section>
          <Title level="h2">制作事例</Title>
          <code className={pageStyles.codeText}>const portfolio = () = </code>
          <PortfolioList />
          <Button>return morePortfolio;</Button>
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
        <section>
          <Title level="h2">私について</Title>
          <code className={pageStyles.codeText}>const aboutMe = () =</code>
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
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
