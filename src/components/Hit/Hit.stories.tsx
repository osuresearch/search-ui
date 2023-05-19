import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Hit } from './Hit';
import { DateTime, Person } from '@osuresearch/types';
import dayjs from 'dayjs';

const meta: Meta<typeof Hit> = {
  title: 'Components/Hit',
  component: Hit,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Hit>;

export const Example: Story = {
  render: (args) => (
    <Hit {...args} />
  ),
  args: {
    hit: {
      __position: 0,
      objectID: '1',
      _highlightResult: {
        name: {
          value: 'Example hit',
          matchLevel: 'partial',
          matchedWords: ['Example'],
          fullyHighlighted: false,
        }
      },
      name: 'Example hit',
      textDescription: 'Example text description',
      attributes: {
        Author: [{
          type: 'Person',
          name: 'Chase McManning',
          email: 'mcmanning.1@osu.edu',
          nickname: 'mcmanning.1'
        } as Person],
        Submitted: [{
          type: 'DateTime',
          dateTime: dayjs().toISOString(),
        } as DateTime],
      }
    }
  }
}
