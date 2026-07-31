import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Title } from "@components/parts/Title";

const meta = {
  title: "Portfolio/Parts/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    level: {
      control: "inline-radio",
      options: ["h1", "h2", "h3"],
    },
    style: {
      control: "inline-radio",
      options: ["h1", "h2", "h3"],
      description: "見た目だけを切り替える任意指定。",
    },
  },
  args: {
    children: "Portfolio Section Title",
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: "h1",
    children: "About Me",
  },
};

export const Heading2: Story = {
  args: {
    level: "h2",
    children: "Skill Set",
  },
};

export const Heading3: Story = {
  args: {
    level: "h3",
    children: "Frontend",
  },
};

export const SemanticAndVisualSeparated: Story = {
  args: {
    level: "h1",
    style: "h2",
    children: "Semantics: h1 / Visual: h2",
  },
};
