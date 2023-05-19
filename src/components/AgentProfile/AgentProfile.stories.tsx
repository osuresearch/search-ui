import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AgentProfile } from './AgentProfile';
import { Text } from '@osuresearch/types';

const meta: Meta<typeof AgentProfile> = {
  title: 'Components/AgentProfile',
  component: AgentProfile,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof AgentProfile>;

export const Person: Story = {
  render: (args) => (
    <AgentProfile {...args} />
  ),
  args: {
    agent: {
      type: 'Person',
      name: 'Chase McManning',
      email: 'mcmanning.1@osu.edu',
      nickname: 'mcmanning.1'
    }
  }
}
