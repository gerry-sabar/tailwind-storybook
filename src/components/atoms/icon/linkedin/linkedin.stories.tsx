import type { Meta, StoryObj } from "@storybook/react";

import { Linkedin } from "./linkedin";

const meta = {
  title: "Atoms/Icon/Linkedin",
  component: Linkedin,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Linkedin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
    args: {
        type: "black",
      },    
};