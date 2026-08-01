import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@components/parts/Button";
import { CodeSection } from "@components/parts/CodeSection";
import pageStyles from "@styles/common/page.module.scss";

const meta = {
  title: "Portfolio/Parts/CodeSection",
  component: CodeSection,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "セクション見出し",
    openingCode: "const section = () => ",
    closingCode: undefined,
    sectionId: "sample-section",
    titleLevel: "h2",
    titleStyle: "h1",
  },
  argTypes: {
    titleLevel: {
      control: "inline-radio",
      options: ["h1", "h2", "h3"],
    },
    titleStyle: {
      control: "inline-radio",
      options: ["h1", "h2", "h3"],
    },
    sectionClassName: {
      control: false,
    },
    innerClassName: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof CodeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    sectionClassName: pageStyles.sectionInner,
  },
  render: (args) => (
    <CodeSection {...args}>
      <p>この領域に本文コンテンツを配置します。</p>
    </CodeSection>
  ),
};

export const WithInnerWrapper: Story = {
  args: {
    sectionClassName: pageStyles.sectionInner,
    innerClassName: pageStyles.main,
    openingCode: "const about = () => ",
    title: "私について",
  },
  render: (args) => (
    <CodeSection {...args}>
      <p>本文を innerClassName で囲みたい場合の利用例です。</p>
      <ul>
        <li>
          <Button href="/about">詳しく見る</Button>
        </li>
      </ul>
    </CodeSection>
  ),
};

export const WithClosingCode: Story = {
  args: {
    sectionClassName: pageStyles.sectionInner,
    title: "スキルセット",
    openingCode: "const skillSet = () => {",
    closingCode: "};",
  },
  render: (args) => (
    <CodeSection {...args}>
      <p>openingCode と closingCode の両方を表示するケースです。</p>
    </CodeSection>
  ),
};
