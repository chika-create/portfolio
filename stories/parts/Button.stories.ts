import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { Button } from "@components/parts/Button";

const meta = {
  title: "Portfolio/Parts/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: {
      control: "text",
      description: "指定するとNext.jsのLinkとして描画されます。",
    },
    className: {
      control: "text",
    },
  },
  args: {
    children: "View Portfolio",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsButton: Story = {
  args: {
    href: undefined,
    children: "お問い合わせ",
  },
};

export const AsLink: Story = {
  args: {
    href: "/portfolio",
    children: "制作実績を見る",
  },
};

export const LongText: Story = {
  args: {
    children: "スキルセットと制作実績をまとめて確認する",
  },
};
