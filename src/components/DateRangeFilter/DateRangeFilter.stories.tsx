import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateRangeFilter } from './DateRangeFilter';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof DateRangeFilter> = {
  title: 'Components/DateRangeFilter',
  component: DateRangeFilter,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof DateRangeFilter>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <DateRangeFilter {...args} />
    </StorybookMockSearch>
  ),
  args: {
    label: 'Due Date',
    attribute: 'reviewDueDate',
  }
}
