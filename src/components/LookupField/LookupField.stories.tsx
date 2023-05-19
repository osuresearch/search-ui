import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { LookupField } from './LookupField';
import { StorybookMockSearch } from '../StorybookMockSearch';

const meta: Meta<typeof LookupField> = {
  title: 'Components/LookupField',
  component: LookupField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof LookupField>;

export const Example: Story = {
  render: (args) => (
    <StorybookMockSearch>
      <LookupField {...args} />
    </StorybookMockSearch>
  ),
  args: {

  }
}
