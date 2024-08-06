import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Dropdown from "@/components/mainPage/DropDown/DropDown";


const meta = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSelect: (region: string) => {
      console.log(`Selected region: ${region}`);
    },
  },
};
