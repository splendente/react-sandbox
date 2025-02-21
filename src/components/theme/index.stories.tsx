import { Meta, StoryObj } from '@storybook/react';
import { Theme } from './index';

const meta: Meta<typeof Theme> = {
  component: Theme,
};
export default meta;
 
type Story = StoryObj<typeof Theme>;

export const Default: Story = {}
