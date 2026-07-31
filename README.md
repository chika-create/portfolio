# Portfolio

Next.js（Pages Router）で構築したポートフォリオサイトです。  
トップページ、自己紹介、スキルセット、制作実績の各ページを持ち、再利用可能なコンポーネントとSCSS Modulesで構成しています。

## 主な特徴

- Pages Routerベースのシンプルな構成
- セクションごとに分割した再利用可能コンポーネント
- SCSS Modulesによるスタイルの局所化
- TypeScriptによる型安全な実装
- `eslint.config.mjs` を利用したESLint（Flat Config）
- Storybook 10によるUIコンポーネントのカタログ化

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Sass（SCSS Modules）
- ESLint 9
- Storybook 10（`@storybook/nextjs-vite`）
- Vitest（Storybook addon用設定）

## 動作環境

- Node.js: `24.1.0`（`package.json` の `volta.node`）
- npm

Voltaを使っている場合は、リポジトリ直下で自動的にNode.jsバージョンが固定されます。

## セットアップ

1. 依存関係をインストールします。

```bash
npm install
```

2. 開発サーバーを起動します。

```bash
npm run dev
```

3. ブラウザで以下を開きます。

```text
http://localhost:3000
```

## 利用可能なスクリプト

- `npm run dev`  
	開発サーバーを起動します。
- `npm run build`  
	本番ビルドを作成します。
- `npm run start`  
	本番ビルドを起動します。
- `npm run lint`  
	ESLintで静的解析を実行します。
- `npm run storybook`  
	Storybook開発サーバーを起動します（`http://localhost:6006`）。
- `npm run build-storybook`  
	Storybookの静的ビルドを作成します。

## ルーティング

Pages Routerを採用しています。主なページは以下です。

- `/`（トップ）
- `/about`
- `/skillset`
- `/portfolio`

ページ実装は `pages/` 配下にあります。

## ディレクトリ構成（抜粋）

```text
.
├── components/      # 画面・機能ごとのUIコンポーネント
├── constants/       # ナビゲーションなどの定数定義
├── pages/           # Pages Routerの各ページ
├── public/images/   # 画像アセット
├── styles/          # SCSS Modules / 共通スタイル
└── types/           # 型定義
```

## コンポーネント設計方針

### 命名規則

- コンポーネントファイルは `PascalCase` を使用します（例: `SkillItem.tsx`）。
- コンポーネントディレクトリ名も `PascalCase` で統一します（例: `components/SkillSet/`）。
- 補助データは `camelCase + Data` を基本とします（例: `skillData.ts`, `topSkillData.ts`）。
- スタイルは `*.module.scss` を使用し、機能・ページ単位で配置します。
- 再利用部品は `components/parts/` 配下に置き、抽象度の高い名前を付けます（例: `Button`, `Title`）。

### 責務分割

- `pages/`:
	ルーティング単位のエントリーポイント。ページ構造の組み立てに集中し、複雑な表示ロジックは `components/` 側へ移譲します。
- `components/`:
	画面セクションや機能単位のUIを実装します。1コンポーネント1責務を基本にし、必要に応じて小さな子コンポーネントへ分割します。
- `components/parts/`:
	複数ページで再利用する共通UI部品を管理します。見た目と振る舞いをカプセル化し、ページ固有の文脈は持ち込まない方針です。
- `constants/`:
	ナビゲーションや外部リンクなど、アプリ全体で共有する定数を管理します。
- `styles/`:
	グローバルスタイルとモジュールスタイルを分離し、スタイルの影響範囲を明確化します。

### 実装時のガイドライン

- データ表示コンポーネントには、可能な限り表示用データをpropsで渡します。
- ナビゲーションは `constants/siteNavigation.ts` を参照し、重複定義を避けます。
- 大きなコンポーネントを作る場合は、先に「表示責務」「データ責務」「共通化可能部分」を切り分けてから実装します。
- 型定義は `types/` またはコンポーネント近傍に配置し、責務境界を越える型は共通化します。

## 開発時の補足

- このプロジェクトはPages Routerを利用しているため、ページのメタ情報は `next/head` ベースで管理します。
- ナビゲーション情報は `constants/siteNavigation.ts` を再利用し、ラベルとURLのズレを防いでください。
- UI変更後は、`npm run lint && npm run build` の実行を推奨します。
- Next.js 16では `next lint` ではなく `eslint .`（`npm run lint`）を利用しています。
- Storybookは `@storybook/nextjs-vite` 構成で導入済みです。UI確認時は `npm run storybook` を利用してください。

## デプロイ

Vercelへのデプロイが簡単です。基本手順は以下です。

1. リポジトリをVercelに接続
2. ビルドコマンドに `npm run build` を設定
3. Node.jsバージョンを必要に応じて `24.1.0` に合わせる

詳細は以下を参照してください。

- Next.js公式ドキュメント: https://nextjs.org/docs
- Vercel公式ドキュメント: https://vercel.com/docs
