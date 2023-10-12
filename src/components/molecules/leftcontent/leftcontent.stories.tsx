import type { Meta, StoryObj } from "@storybook/react";

import leftcontent from "./leftcontent";

const meta = {
  title: "Molecules/Left Content",
  component: leftcontent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof leftcontent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};