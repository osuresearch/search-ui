import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RefinementMenuFilter } from './RefinementMenuFilter';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof RefinementMenuFilter> = {
  title: 'Components/RefinementMenuFilter',
  component: RefinementMenuFilter,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof RefinementMenuFilter>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <RefinementMenuFilter {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
