type PortfolioItem = {
  title: string;
  imageAlt: string;
  imageSrc: string;
  descriptions: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "ポートフォリオサイト",
    imageAlt: "ポートフォリオサイトのスクリーンショット",
    imageSrc: "https://placehold.jp/412x260.png",
    descriptions: [
      "フロントエンドの基礎を改めて固めていくためのポートフォリオプロジェクトです。",
      "単にツールを使えるようになるだけでなく、型定義のあり方やコンポーネントの分け方など、「どう書けばずっと使いやすいか」を自分なりに試行錯誤しながら取り入れています。",
      "日々アップデートされる技術を「知っている」だけで終わらせず、自分の手で「使いこなせる」ようになるための、継続的なアウトプットの場として活用しています。",
    ],
  },
  {
    title: "おにぎり計算機",
    imageAlt: "おにぎり計算機のスクリーンショット",
    imageSrc: "https://placehold.jp/412x260.png",
    descriptions: ["React, TypeScript, MUI, ESLint, Prettier, Vercel"],
  },
];
