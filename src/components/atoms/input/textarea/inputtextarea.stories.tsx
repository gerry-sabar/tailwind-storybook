import type { Meta, StoryObj } from "@storybook/react";

import InputTextArea from "./inputtextarea";

const meta = {
  title: "Atoms/Input/TextArea",
  component: InputTextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
    args: {
      placeholder: "Your question/message",
      showError: true,
      errorMessage: "This is a required"
    },    
};