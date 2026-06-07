import pageStyles from "@styles/common/page.module.scss";
import topStyles from "@styles/top/top.module.scss";
import { Title } from "@components/parts/Title";
import { Button } from "@components/parts/Button";
import { BusinessCard } from "@components/BusinessCard";
import { PortfolioList } from "@components/PortfolioList";
import { Footer } from "@components/Footer";
import { topSkillSet } from "./topSkillData";

export function Top() {
  return (
    <>
      <header className={topStyles.header}>
        <p className={topStyles.introduction}>Hello world</p>
        <BusinessCard />
      </header>

      <main className={pageStyles.main}>
        <section>
          <Title level="h2">プロジェクト</Title>
          <code className={pageStyles.codeText}>const projects = () ={'>'} </code>
          <PortfolioList />
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
        <section>
          <Title level="h2">私について</Title>
          <code className={pageStyles.codeText}>const about = () ={'>'}</code>
          <div className={topStyles.aboutBody}>
            <p className={topStyles.aboutText}>
              兵庫県在住、Web クリエイターの本告（もとおり）です。<br />
              制作会社での多種多様なサイト制作を経て、現在はエイチームで「技術で事業を伸ばす」ことに挑戦しています。
            </p>
            <p className={topStyles.aboutText}>
              私の原動力は「人の役に立つこと」。React/Next.js を用いた開発に加え、GA 分析やユーザーインタビューに基づく UX 改善、PSI（PageSpeed Insights）改善など、ビジネスゴールを達成するための「一貫したモノづくり」を信条としています。<br />
              また、社内もくもく会の企画やメンターなど、技術を共有しみんなで成長できる環境作りも大切にしています。
            </p>
            <p className={topStyles.aboutText}>
              私生活ではプログラミング講師の夫と 1 歳の息子、そして大ベテランのオカメインコと暮らしています。
            </p>
          </div>
          <ul className={topStyles.buttonList}>
            <li>
              <Button>私について</Button>
            </li>
          </ul>
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
        <section aria-label="スキルセット">
          <Title level="h2">スキルセット</Title>
          <code className={pageStyles.codeText}>const skillSet = () ={'>'}</code>
          <ul className={topStyles.skillSetList}>
            {topSkillSet.map((skill) => (
              <li className={topStyles.skillSetItem} key={skill.name}>
                <span className={topStyles.skillSetIcon}>
                  <skill.Icon color={skill.color} aria-hidden="true" />
                </span>
                {skill.name}
              </li>
            ))}
          </ul>
          <ul className={topStyles.buttonList}>
            <li>
              <Button>スキルセット</Button>
            </li>
          </ul>
          <code className={pageStyles.codeText}>{"}"}</code>
        </section>
      </main>
      <Footer />
    </>
  );
}
