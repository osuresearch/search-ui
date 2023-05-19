import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CurrentRefinementChips } from './CurrentRefinementChips';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof CurrentRefinementChips> = {
  title: 'Components/CurrentRefinementChips',
  component: CurrentRefinementChips,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof CurrentRefinementChips>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <CurrentRefinementChips {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
