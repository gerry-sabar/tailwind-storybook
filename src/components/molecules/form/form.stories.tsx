import type { Meta, StoryObj } from "@storybook/react";

import form from "./form";

const meta = {
  title: "Molecules/Form",
  component: form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};