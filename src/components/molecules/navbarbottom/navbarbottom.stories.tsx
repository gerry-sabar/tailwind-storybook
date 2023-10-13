import type { Meta, StoryObj } from "@storybook/react";
import { NavbarBottom } from "./navbarbottom";

const meta = {
  title: "Molecules/NavbarBottom",
  component: NavbarBottom,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavbarBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {};