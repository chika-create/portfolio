import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";

import { Header } from "@components/Header";

const meta = {
  title: "Portfolio/Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const expectActiveNavigation = (canvasElement: HTMLElement, expectedLabel: string) => {
  const canvas = within(canvasElement);
  const activeItems = canvasElement.querySelectorAll("li.active");

  expect(activeItems.length).toBeGreaterThan(0);

  const hasExpectedActiveItem = Array.from(activeItems).some((item) => {
    const link = item.querySelector("a");
    return link?.textContent?.trim() === expectedLabel;
  });

  expect(hasExpectedActiveItem).toBe(true);
  expect(canvas.getByRole("link", { name: "本告 智香 CHIKA MOTOORI" })).toBeInTheDocument();
};

export const TopActive: Story = {
  play: async ({ canvasElement }) => {
    expectActiveNavigation(canvasElement, "TOP");
  },
};

export const ProjectsActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/portfolio",
      },
    },
  },
  play: async ({ canvasElement }) => {
    expectActiveNavigation(canvasElement, "Projects");
  },
};

export const AboutActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/about",
      },
    },
  },
  play: async ({ canvasElement }) => {
    expectActiveNavigation(canvasElement, "About");
  },
};

export const MobileMenuToggle: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole("button", { name: "メニューを開く" });

    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  },
};
