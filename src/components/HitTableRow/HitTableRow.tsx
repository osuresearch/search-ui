import React from 'react';
import { Agent, Atom, Person, Text as TextAtomic } from '@osuresearch/types';
import { Stack, ExternalLink, Text } from '@osuresearch/ui';
import { Highlight, Snippet } from 'react-instantsearch-hooks-web';
import { ResourceHit } from '../types';
import { AtomRenderer } from '../AtomRenderer';

export type HitTableRowProps = {
  hit: ResourceHit;

  /**
   * Aggregate attribute names used for columns.
   *
   * This ensures ordering of each row when attributes
   * may be defined on each record out of order.
   */
  columns: string[];
};

export function HitTableRow({ hit, columns }: HitTableRowProps) {
  // TODO: Need column count and value ordering based on count.

  return (
    <tr>
      <td
        style={{
          whiteSpace: 'nowrap',
          maxWidth: 300,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <ExternalLink href="#">
          <Highlight hit={hit} attribute="name" />
        </ExternalLink>
      </td>
      <td>
        <Snippet hit={hit} attribute="textDescription" />
      </td>

      {columns.map((name) =>
        hit.attributes[name] ? (
          <td key={name}>
            <Text fs="sm">
              {hit.attributes[name]
                .map<React.ReactNode>((atom, i) => <AtomRenderer key={i} value={atom} />)
                .reduce((p, c) => [p, c, ', '], [])}
            </Text>
          </td>
        ) : (
          <td key={name}>&mdash;</td>
        )
      )}
    </tr>
  );
}
