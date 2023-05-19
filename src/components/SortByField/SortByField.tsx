import React from 'react';
import { Item, SelectField } from '@osuresearch/ui';
import { SortBy, UseSortByProps, useSortBy } from 'react-instantsearch-hooks-web';

export type SortByFieldProps = {};

export function SortByField(props: SortByFieldProps) {
  const { initialIndex, currentRefinement, options, refine, canRefine } = useSortBy({
    items: [
      // TODO: Obv configuration. I don't like the way 'value' works here,
      // makes sense for multi-indexing though.
      { label: 'Relevance', value: 'review' },
      { label: 'Updated (asc)', value: 'review_updated_asc' },
      { label: 'Updated (desc)', value: 'review_updated_desc' }
    ]
  });

  return (
    <SelectField
      p={0}
      name="sort"
      aria-label="Sort results"
      value={currentRefinement}
      onChange={(value) => refine(value as string)}
    >
      {options.map((item) => (
        <Item key={item.value}>{item.label}</Item>
      ))}
    </SelectField>
  );
}
