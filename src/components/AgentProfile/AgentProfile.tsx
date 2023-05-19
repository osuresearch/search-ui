import React from 'react';
import { Person, Organization, Software, Agent } from '@osuresearch/types';
import { Avatar, Group, Stack, Text } from '@osuresearch/ui';

export type AgentProfileProps = {
  variant?: 'default' | 'large';
  subtitle?: React.ReactNode;
  agent?: Agent;
};

export function AgentProfile({ agent, subtitle, variant }: AgentProfileProps) {
  if (!agent) {
    return null;
  }

  if (agent.type === 'Person') {
    if (variant === 'large' && agent.type === 'Person') {
      return (
        <Group>
          <Avatar
            alt=""
            name={agent.name}
            opicUsername={agent.nickname}
            size={42}
            style={{ display: 'inline-block', verticalAlign: 'top' }}
          />
          <Stack gap={0}>
            <Text>{agent.name}</Text>
            <Text fs="sm" c="dark">
              {subtitle ?? agent.nickname}
            </Text>
          </Stack>
        </Group>
      );
    }

    return (
      <span>
        <Avatar
          alt=""
          name={agent.name}
          opicUsername={agent.nickname}
          size={20}
          miw={20}
          style={{ display: 'inline-block', verticalAlign: 'top' }}
        />
        <Text ml="xxs">{agent.name}</Text>
      </span>
    );
  }

  // TODO: handle organizations and systems.
  return (
    <div>
      {agent.name} ({agent.type})
    </div>
  );
}
