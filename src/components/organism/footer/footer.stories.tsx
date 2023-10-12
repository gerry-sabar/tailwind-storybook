import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./footer";

const meta = {
  title: "Organism/Footer",
  component: Footer,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};