import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PaginationButtons } from './PaginationButtons';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof PaginationButtons> = {
  title: 'Components/PaginationButtons',
  component: PaginationButtons,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof PaginationButtons>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <PaginationButtons {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
