import { Meta, StoryObj } from '@storybook/react';
import { Counter2 } from './index';

const meta: Meta<typeof Counter2> = {
  component: Counter2,
};
export default meta;
 
type Story = StoryObj<typeof Counter2>;

export const Default: Story = {}
