import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./checkbox";

const meta = {
  title: "Atoms/Input/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
    args: {
        isChecked: true,
        description: "description for checkbox"
      },    
};