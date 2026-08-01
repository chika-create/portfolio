import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { Footer } from "@components/Footer";

const meta = {
  title: "Portfolio/Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const expectFooterActiveNavigation = (canvasElement: HTMLElement, expectedLabel: string) => {
  const activeItems = canvasElement.querySelectorAll("li.active");

  expect(activeItems.length).toBe(1);

  const activeLink = activeItems[0]?.querySelector("a");
  expect(activeLink?.textContent?.trim()).toBe(expectedLabel);
};

export const TopActive: Story = {
  play: async ({ canvasElement }) => {
    expectFooterActiveNavigation(canvasElement, "TOP");
  },
};

export const SkillSetActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/skillset",
      },
    },
  },
  play: async ({ canvasElement }) => {
    expectFooterActiveNavigation(canvasElement, "SkillSet");
  },
};
