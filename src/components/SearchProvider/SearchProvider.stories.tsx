import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchProvider } from './SearchProvider';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof SearchProvider> = {
  title: 'Components/SearchProvider',
  component: SearchProvider,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof SearchProvider>;

export const Example: Story = {
  render: (args) => (
    <div>TODO?</div>
  ),
  args: {

  }
}
