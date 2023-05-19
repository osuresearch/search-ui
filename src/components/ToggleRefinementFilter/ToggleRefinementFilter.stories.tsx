import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToggleRefinementFilter } from './ToggleRefinementFilter';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof ToggleRefinementFilter> = {
  title: 'Components/ToggleRefinementFilter',
  component: ToggleRefinementFilter,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof ToggleRefinementFilter>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <ToggleRefinementFilter {...args} />
    </StorybookMockSearch>
  ),
  args: {
    label: 'Unassigned reviews',
    attribute: 'unassigned',
  }
}
