import React from 'react';
import { Atom } from '@osuresearch/types';
import { isText, isEmail, isAgent, isDateTime } from '../utils';
import { ExternalLink, Text } from '@osuresearch/ui';
import dayjs from 'dayjs';
import { AgentProfile } from '../AgentProfile';

export type AtomRendererProps = {
  value: Atom;
};

export function AtomRenderer({ value }: AtomRendererProps): JSX.Element {
  if (isText(value)) {
    return <>{value.text}</>;
  }

  if (isEmail(value)) {
    return value.email ? (
      <ExternalLink href={`mailto:${value.email}`}>{value.email}</ExternalLink>
    ) : (
      <>&mdash;</>
    );
  }

  if (isAgent(value)) {
    return <AgentProfile agent={value} />;
  }

  if (isDateTime(value)) {
    return <>{dayjs(value.dateTime).format('M/D/YYYY')}</>;
  }

  return <Text c="error">Unsupported type: {value.type}</Text>;
}
