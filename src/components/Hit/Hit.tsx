import React from 'react';
import { Agent, Atom, Person, Text as TextAtomic } from '@osuresearch/types';
import { Stack, ExternalLink, Text, Group, Avatar } from '@osuresearch/ui';
import type { BaseHit, Hit as InstantSearchHit } from 'instantsearch.js';
import { Highlight, Snippet } from 'react-instantsearch-hooks-web';
import { AtomRenderer } from '../AtomRenderer';

type ResourceHit = {
  name: string;
  textDescription: string;
  attributes: {
    [name: string]: Atom[];
  };

  // This is all part of an AlgoliaHit

  // objectID: string
  // _highlightResult: {
  //   // TODO: Check type
  //   [field: string]: {
  //     matchLevel: string
  //     matchWords: string[]
  //     value: string
  //   }
  // },
  // _snippetResult: {
  //   // TODO: Check type
  //   [field: string]: {
  //     matchLevel: string
  //     matchWords: string[]
  //     value: string
  //   }
  // },
  // __position: number
};

export type HitProps = {
  hit: InstantSearchHit<ResourceHit>;
  onPress?: (hit: InstantSearchHit<ResourceHit>) => void;
};

type AttributeSet = Record<string, Atom[]>;

function filterHidden(attributes: AttributeSet): string[] {
  return Object.keys(attributes).filter((name) => name.indexOf('_') !== 0);
}

function sortByHighlights(hit: InstantSearchHit<ResourceHit>, a: string, b: string) {
  return 0;
}

function HighlightAttribute({
  hit,
  name,
  atom
}: {
  hit: InstantSearchHit<ResourceHit>;
  name: string;
  atom: Atom;
}) {
  // NOTE: A simpler method using InstantSearch's <Highlight> *should* be supported, but isn't.
  // See: https://github.com/searchkit/searchkit/issues/1259

  /*
    Going to do some magic here.
    Basically we get nested highlights like the following:

    attributes.Username.text: ['<em>...</em>']
    attributes.Username.text.keyword: ['<em>...</em>']
    attributes.__Person.nickname: ['<em>...</em>']
    attributes.__Person.nickname.keyword: ['<em>...</em>']

    We want to replace *individual fields* of the atomic with the highlight variant.
    And then render that atomic.

    BUT! We also need to make sure we use original fields for certain atomics.
    E.g. if it's an email, the link has to be the original while the display value
    can be the highlight.
  */

  return <AtomRenderer value={atom} />;
}

export function Hit({ hit, onPress }: HitProps) {
  const attributeNames = Object.keys(hit.attributes)
    .filter((name) => name.indexOf('_') !== 0)
    .sort((a, b) => sortByHighlights(hit, a, b));

  return (
    <Stack gap="xxs">
      {/* TODO: Swap with a button if it's an onPress handler  */}
      <ExternalLink
        href={`/review/${hit.objectID}`}
        onClick={(e) => {
          if (onPress) {
            onPress(hit);
            e.preventDefault();
          }
        }}
        style={{
          whiteSpace: 'nowrap',
          maxWidth: 600,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <Highlight hit={hit} attribute="name" />
      </ExternalLink>

      <Snippet hit={hit} attribute="textDescription" />

      <div style={{ columnCount: 2 }}>
        <ul>
          {attributeNames.map((name) => (
            <Text key={name} fs="sm" as="li" style={{ breakInside: 'avoid-column' }}>
              <Text c="dark">{name}: </Text>
              {hit.attributes[name]
                .map<React.ReactNode>((atom, key) => (
                  <HighlightAttribute key={key} name={name} hit={hit} atom={atom} />
                ))
                .reduce((p, c) => [p, c, ', '], [])}
            </Text>
          ))}
        </ul>
      </div>
    </Stack>
  );
}
