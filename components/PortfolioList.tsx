import Title from "./Title";

function PortfolioList() {
  return (
    <>
      <div>
        <figure>
          <img src="https://placehold.jp/412x260.png" alt="" />
        </figure>
        <Title level="h3">ポートフォリオサイト</Title>
        <p>
          React, TypeScript, Next, storybook, ESLint, Prettier, Vercel, hogefuga
        </p>
      </div>
      <div>
        <figure>
          <img src="https://placehold.jp/412x260.png" alt="" />
        </figure>
        <Title level="h3">おにぎり計算機</Title>
        <p>React, TypeScript, MUI, ESLint, Prettier, Vercel</p>
      </div>
    </>
  );
}

export default PortfolioList;
