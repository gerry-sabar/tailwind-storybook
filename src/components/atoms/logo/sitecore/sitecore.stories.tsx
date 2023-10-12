import type { Meta, StoryObj } from "@storybook/react";

import { Sitecore } from "./sitecore";

const meta = {
  title: "Atoms/Logo/Sitecore",
  component: Sitecore,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sitecore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};