import type { Meta, StoryObj } from "@storybook/react";

import InputText from "./inputtext";

const meta = {
  title: "Atoms/Input/Text",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
    args: {
      placeholder: "Name",
      showError: true,
      errorMessage: "This is a required"
    },    
};