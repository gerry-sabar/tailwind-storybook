import type { Meta, StoryObj } from "@storybook/react";

import footerTop from "./footertop";

const meta = {
  title: "Molecules/Footer Top",
  component: footerTop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof footerTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};