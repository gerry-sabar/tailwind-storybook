import type { Meta, StoryObj } from "@storybook/react";

import { Contact } from "./contact";

const meta = {
  title: "Atoms/Button/Contact",
  component: Contact,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    type: "phone",
    label: "015 - 79 00 100",
    link: 'tel://+31157900100'
  },
};