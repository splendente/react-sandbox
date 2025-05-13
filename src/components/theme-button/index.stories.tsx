import { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeButton } from './index';

const meta: Meta<typeof ThemeButton> = {
  component: ThemeButton,
};
export default meta;
 
type Story = StoryObj<typeof ThemeButton>;

export const Default: Story = {}
