import { Meta, StoryObj } from '@storybook/react-vite';
import { EmailField } from './index';

const meta: Meta<typeof EmailField> = {
  component: EmailField,
};
export default meta;
 
type Story = StoryObj<typeof EmailField>;

export const Default: Story = {}
