import type { Meta, StoryObj } from "@storybook/react";

import { Uxbee } from "./uxbee";

const meta = {
  title: "Atoms/Logo/Uxbee",
  component: Uxbee,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Uxbee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
    args: {
        type: "navbar",
    },        
};