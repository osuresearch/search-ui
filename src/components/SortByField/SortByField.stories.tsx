import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SortByField } from './SortByField';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof SortByField> = {
  title: 'Components/SortByField',
  component: SortByField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof SortByField>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <SortByField {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
