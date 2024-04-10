import { Title } from "@components/parts/title/Title";
import portfolioList from "@styles/portfolio/portfolioList.module.scss";

function PortfolioList() {
  return (
    <div className={portfolioList.box}>
      <div className={portfolioList.content}>
        <figure>
          <img
            src="https://placehold.jp/412x260.png"
            alt=""
            className={portfolioList.image}
          />
        </figure>
        <Title level="h3">ポートフォリオサイト</Title>
        <p>
          React, TypeScript, Next, storybook, ESLint, Prettier, Vercel, hogefuga
        </p>
      </div>
      <div className={portfolioList.content}>
        <figure>
          <img
            src="https://placehold.jp/412x260.png"
            alt=""
            className={portfolioList.image}
          />
        </figure>
        <Title level="h3">おにぎり計算機</Title>
        <p>React, TypeScript, MUI, ESLint, Prettier, Vercel</p>
      </div>
    </div>
  );
}

export default PortfolioList;
