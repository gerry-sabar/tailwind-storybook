import type { Meta, StoryObj } from "@storybook/react";

import { Leadinfo } from "./leadinfo";

const meta = {
  title: "Atoms/Logo/Leadinfo",
  component: Leadinfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Leadinfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};