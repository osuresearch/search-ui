import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RefinementListFilter } from './RefinementListFilter';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof RefinementListFilter> = {
  title: 'Components/RefinementListFilter',
  component: RefinementListFilter,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof RefinementListFilter>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <RefinementListFilter {...args} />
    </StorybookMockSearch>
  ),
  args: {
    label: 'Reviewer',
    attribute: 'reviewer',
  }
}
