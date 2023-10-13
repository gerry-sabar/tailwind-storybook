import type { Meta, StoryObj } from "@storybook/react";
import { NavbarResponsive } from "./navbarresponsive";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta = {
  title: "Molecules/NavbarResponsive",
  component: NavbarResponsive,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
      viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone6',
        defaultOrientation: "landscape"
      },  
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavbarResponsive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {};