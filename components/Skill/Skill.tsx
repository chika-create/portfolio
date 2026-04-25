import skillStyles from "@styles/skill/skill.module.scss";
import { SkillCategory } from "types/types";

const SKILL_MAX_LEVEL = 5;

const levelGuide = [
  {
    score: 5,
    title: "技術面にリードできる",
    description: "設計方針の決定やレビュー・指導ができる",
  },
  {
    score: 4,
    title: "設計・改善ができる",
    description: "再利用性や可読性を意識した設計・改善ができる",
  },
  {
    score: 3,
    title: "自走して実装できる",
    description: "基本的な機能であれば自力で実装・対応可能",
  },
  {
    score: 2,
    title: "理解しながら実装できる",
    description: "調べながらでもあれば機能実装・活用が可能",
  },
  {
    score: 1,
    title: "基礎知識レベル",
    description: "チュートリアルや資料を見ながらであれば扱える",
  },
];

const skillCategories: SkillCategory[] = [
  {
    label: "core",
    title: "Core Skills",
    items: [
      {
        name: "React",
        level: 3,
        description:
          "Reactを用いたフロントエンド開発に携わっており、デザインデータをもとにコンポーネント設計から実装まで自己完結で対応できます。再利用性を意識したコンポーネント設計を心がけています。React Native を使ったアプリのコーディング経験もあります。",
      },
      {
        name: "Next.js",
        level: 3,
        description:
          "Next.jsを用いた自社サイトの運用・機能追加に携わっています。既存プロジェクトへの機能追加やUI改善など、運用フェーズでのフロントエンド実装を中心に対応しています。",
      },
      {
        name: "JavaScript",
        level: 3,
        description:
          "UIの挙動実装や既存機能の改修など、フロントエンドロジックの実装を行っています。既存コードの可読性を意識しながら、安全に機能追加・改修を行うように留意しています。テストに関してはJestを勉強中です。",
      },
      {
        name: "TypeScript",
        level: 2,
        description:
          "React開発においてinterface / typeを用いた型定義を行いながら実装しています。状態管理や型安全設計も担当しており、エンジニアレビューを受けながらTypeScriptを用いた開発を行っています。",
      },
      {
        name: "Git / GitHub / GitLab",
        level: 3,
        description:
          "Git / GitLabを用いたチーム開発環境での実装経験があります。GitHubは個人開発でも使用しています。Gitは日常的にPull Requestベースの開発・コンフリクト解決などを行っています。初旬への指導も担当しました。",
      },
      {
        name: "HTML",
        level: 4,
        description:
          "セマンティックなマークアップを意識したHTML実装を行っています。デザインデータから構造を整理し、保守性や拡張性を意識したマークアップ設計を心がけています。",
      },
      {
        name: "CSS",
        level: 4,
        description:
          "レイアウトやコンポーネント単位でのスタイル設計を意識し、使いやすいCSSを書くことを心がけています。TailwindCSS、MUI、emotion、styled-components、bootstrap、BEMなどの使用経験があります。",
      },
    ],
  },
  {
    label: "other",
    title: "Other Tools",
    items: [
      {
        name: "Storybook",
        level: 2,
        description:
          "UIコンポーネントの確認およびデザイナーとの共有のためにStorybookを活用しています。コンポーネント単体で状態ごとの表示検証を行い、認識齟齬のないUI実装を意識しています。テスト機能については現在学習を進めています。",
      },
      {
        name: "ESLint",
        level: 2,
        description:
          "コード品質の維持を目的としてESLintを利用しています。既存プロジェクトのルールに従いながら、可読性・一貫性を意識した実装を行っています。",
      },
      {
        name: "Prettier",
        level: 2,
        description:
          "コードフォーマットの統一のためにPrettierを使用しています。チーム開発におけるスタイルのばらつき防止や、レビュー効率の向上に貢献しています。",
      },
      {
        name: "Copilot",
        level: 2,
        description:
          "コーディングの補助ツールとして活用しています。提案されたコードをそのまま採用するのではなく、内容を確認・調整した上で実装に取り入れています。また、コードレビューやテスト作成にも活用しています。",
      },
      {
        name: "Vercel",
        level: 2,
        description:
          "Next.jsプロジェクトのデプロイ環境として利用しています。GitHubと連携し、pushをトリガーとした自動デプロイの設定や、Preview / Production環境の運用・環境改善の管理などを行っています。実務から公開までのフロントエンドの開発フロー全体に対応可能です。",
      },
      {
        name: "Figma",
        level: 3,
        description:
          "UIデザインおよびポートフォリオ作成に使用しています。Auto Layoutやコンポーネント機能を活用し、実装を前提としたデータ設計を行っています。デザインと実装の両方の視点からUIを考えることを強みとしています。",
      },
      {
        name: "Google Analytics",
        level: 2,
        description:
          "サイトのアクセス解析ツールとして利用しています。ユーザーの動きやページパフォーマンスの把握を通じて、改善の参考にしています。",
      },
    ],
  },
];

export const Skill = () => {
  return (
    <div className={skillStyles.skillRoot}>
      <div className={skillStyles.skillSummary}>
        <div className={skillStyles.skillSummary__intro}>
          <p className={skillStyles.skillSummary__label}># SkillSet</p>
          <p className={skillStyles.skillSummary__text}>
            技術スタックと習熟度を紹介します。各スキルは5段階で評価しています。
          </p>
        </div>
        <div className={skillStyles.levelGuide}>
          <p className={skillStyles.levelGuide__title}>5段階評価</p>
          <ul className={skillStyles.levelGuide__list}>
            {levelGuide.map((item) => (
              <li key={item.score} className={skillStyles.levelGuide__item}>
                <span className={skillStyles.levelGuide__score}>{item.score}.</span>
                <div>
                  <p className={skillStyles.levelGuide__itemTitle}>{item.title}</p>
                  <p className={skillStyles.levelGuide__itemDescription}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {skillCategories.map((category) => (
        <section key={category.label} className={skillStyles.skillSection}>
          <div className={skillStyles.skillSection__header}>
            <span className={skillStyles.skillSection__title}>{category.title}</span>
          </div>
          <ul className={skillStyles.skillSection__list}>
            {category.items.map((item) => (
              <li key={item.name} className={skillStyles.skillSection__listItem}>
                <div className={skillStyles.skillSection__itemHeader}>
                  <span className={skillStyles.skillSection__itemName}>{item.name}</span>
                  <span
                    className={skillStyles.skillLevel}
                    aria-label={`5段階中 ${item.level}`}
                  >
                    {Array.from({ length: SKILL_MAX_LEVEL }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < item.level
                            ? skillStyles.skillLevel__dotFilled
                            : skillStyles.skillLevel__dot
                        }
                      />
                    ))}
                  </span>
                </div>
                <p className={skillStyles.skillSection__itemDescription}>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
