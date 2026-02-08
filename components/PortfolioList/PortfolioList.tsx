import { Title } from "@components/parts/Title";
import portfolioListStyles from "@styles/portfolio/portfolioList.module.scss";

export const PortfolioList = () => {
  return (
    <div className={portfolioListStyles.box}>
      <div className={portfolioListStyles.content}>
        <figure>
          <img
            src="https://placehold.jp/412x260.png"
            alt="hoge"
            className={portfolioListStyles.image}
          />
        </figure>
        <Title level="h3">ポートフォリオサイト</Title>
        <p>
          React, TypeScript, Next, storybook, ESLint, Prettier, Vercel, hogefuga
        </p>
      </div>
      <div className={portfolioListStyles.content}>
        <figure>
          <img
            src="https://placehold.jp/412x260.png"
            alt="hoge"
            className={portfolioListStyles.image}
          />
        </figure>
        <Title level="h3">おにぎり計算機</Title>
        <p>React, TypeScript, MUI, ESLint, Prettier, Vercel</p>
      </div>
    </div>
  );
};
