import type { Meta, StoryObj } from "@storybook/react";

import footerMiddle from "./footermiddle";

const meta = {
  title: "Molecules/Footer Middle",
  component: footerMiddle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof footerMiddle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};