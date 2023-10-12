import type { Meta, StoryObj } from "@storybook/react";
import { NavbarTop } from "./navbartop";

const meta = {
  title: "Molecules/NavbarTop",
  component: NavbarTop,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    }
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavbarTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {};