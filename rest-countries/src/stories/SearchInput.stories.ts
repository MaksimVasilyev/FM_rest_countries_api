import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SearchInput from "@/components/mainPage/SearchInput/SearchInput";

const meta = {
  title: "SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { onChange: () => {} },
};
