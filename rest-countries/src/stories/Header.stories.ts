import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Header from "@/components/UI/Header/Header";

const meta = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
