import Image from "next/image";
import { Title } from "@components/parts/Title";
import portfolioListStyles from "@styles/portfolio/portfolioList.module.scss";

export const PortfolioList = () => {
  return (
    <div className={portfolioListStyles.box}>
      <div className={portfolioListStyles.content}>
        <figure>
          <Image
            src="https://placehold.jp/412x260.png"
            alt="ポートフォリオサイトのスクリーンショット"
            className={portfolioListStyles.image}
            width={412}
            height={260}
          />
        </figure>
        <div className={portfolioListStyles.textbox}>
          <Title level="h3">ポートフォリオサイト</Title>
          <p className={portfolioListStyles.text}>
            フロントエンドの基礎を改めて固めていくためのポートフォリオプロジェクトです。
          </p>
          <p className={portfolioListStyles.text}>
            単にツールを使えるようになるだけでなく、型定義のあり方やコンポーネントの分け方など、「どう書けばずっと使いやすいか」を自分なりに試行錯誤しながら取り入れています。
          </p>
          <p className={portfolioListStyles.text}>
            日々アップデートされる技術を「知っている」だけで終わらせず、自分の手で「使いこなせる」ようになるための、継続的なアウトプットの場として活用しています。
          </p>
        </div>
      </div>
      <div className={portfolioListStyles.content}>
        <figure>
          <Image
            src="https://placehold.jp/412x260.png"
            alt="おにぎり計算機のスクリーンショット"
            className={portfolioListStyles.image}
            width={412}
            height={260}
          />
        </figure>
        <div className={portfolioListStyles.textbox}>
          <Title level="h3">おにぎり計算機</Title>
          <p className={portfolioListStyles.text}>React, TypeScript, MUI, ESLint, Prettier, Vercel</p>
        </div>
      </div>
    </div>
  );
};
