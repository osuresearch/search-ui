import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AtomRenderer } from './AtomRenderer';
import { DateTime, Organization as OrganizationAtom, Person as PersonAtom, Text as TextAtom } from '@osuresearch/types';
import dayjs from 'dayjs';

const meta: Meta<typeof AtomRenderer> = {
  title: 'Components/AtomRenderer',
  component: AtomRenderer,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof AtomRenderer>;

export const Text: Story = {
  render: (args) => (
    <AtomRenderer {...args} />
  ),
  args: {
    value: {
      type: 'Text',
      text: 'Text value',
    } as TextAtom
  }
}

export const Date: Story = {
  render: (args) => (
    <AtomRenderer {...args} />
  ),
  args: {
    value: {
      type: 'DateTime',
      dateTime: dayjs().toISOString(),
    } as DateTime
  }
}

export const Person: Story = {
  render: (args) => (
    <AtomRenderer {...args} />
  ),
  args: {
    value: {
      type: 'Person',
      name: 'Chase McManning',
      email: 'mcmanning.1@osu.edu',
      nickname: 'mcmanning.1'
    } as PersonAtom
  }
}

export const Organization: Story = {
  render: (args) => (
    <AtomRenderer {...args} />
  ),
  args: {
    value: {
      type: 'Organization',
      name: 'Office of Research',
      email: 'research@osu.edu',
    } as OrganizationAtom
  }
}
