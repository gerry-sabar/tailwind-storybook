import type { Meta, StoryObj } from "@storybook/react";

import { Content } from "./content";

const meta = {
  title: "Organism/Content",
  component: Content,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};