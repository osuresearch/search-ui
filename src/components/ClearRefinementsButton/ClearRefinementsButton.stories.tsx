import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ClearRefinementsButton } from './ClearRefinementsButton';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof ClearRefinementsButton> = {
  title: 'Components/ClearRefinementsButton',
  component: ClearRefinementsButton,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof ClearRefinementsButton>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <ClearRefinementsButton {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
