import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CountChip } from './CountChip';

const meta: Meta<typeof CountChip> = {
  title: 'Components/CountChip',
  component: CountChip,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CountChip>;

export const Example: Story = {
  render: (args) => (
    <CountChip {...args} />
  ),
  args: {
    count: 100
  }
}
