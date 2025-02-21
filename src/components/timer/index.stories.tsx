import { Meta, StoryObj } from '@storybook/react';
import { Timer } from './index';

const meta: Meta<typeof Timer> = {
  component: Timer,
};
export default meta;
 
type Story = StoryObj<typeof Timer>;

export const Default: Story = {}
