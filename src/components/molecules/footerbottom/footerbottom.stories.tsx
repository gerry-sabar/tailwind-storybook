import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import footerBottom from "./footerbottom";

const meta = {
  title: "Molecules/Footer Bottom",
  component: footerBottom,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'light',
      viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone6',
        defaultOrientation: "landscape"
      },  
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof footerBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    id: "check",
    name: "check",
  },
};