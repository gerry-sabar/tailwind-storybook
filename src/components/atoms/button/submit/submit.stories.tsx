import type { Meta, StoryObj } from "@storybook/react";

import { Submit } from "./submit";

const meta = {
  title: "Atoms/Button/Submit",
  component: Submit,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Submit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    label: "Submit",
  },
};