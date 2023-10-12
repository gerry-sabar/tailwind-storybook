import type { Meta, StoryObj } from "@storybook/react";

import footerBottom from "./footerbottom";

const meta = {
  title: "Molecules/Footer Bottom",
  component: footerBottom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof footerBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};