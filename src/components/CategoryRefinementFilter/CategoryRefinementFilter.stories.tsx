import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CategoryRefinementFilter } from './CategoryRefinementFilter';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof CategoryRefinementFilter> = {
  title: 'Components/CategoryRefinementFilter',
  component: CategoryRefinementFilter,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CategoryRefinementFilter>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <CategoryRefinementFilter {...args} />
    </StorybookMockSearch>
  ),
  args: {
    label: 'Category',
  }
}
