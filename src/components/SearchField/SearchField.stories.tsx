import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchField } from './SearchField';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <SearchField {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
