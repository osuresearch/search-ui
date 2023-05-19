import React from 'react';
import {
  InstantSearch,
  Hits as InstantSearchHits,
  Pagination,
  useHits
} from 'react-instantsearch-hooks-web';
import { Hit } from 'instantsearch.js';
import { Hit as HitView } from '../Hit';
import { PaginationButtons } from '../PaginationButtons/PaginationButtons';
import { Group, Stack } from '@osuresearch/ui';
import { HitsViewButtons } from '../HitsViewButtons';
import { useState } from 'react';
import { HitsViewMode, ResourceHit } from '../types';
import { SortByField } from '../SortByField';
import { HitStatistics } from '../HitStatistics';
import { HitTableRow } from '../HitTableRow';
import { HitTableHeader } from '../HitTableHeader';
import { aggregateAttributeNames } from '../utils';
import { ErrorMiddleware } from '../ErrorMiddleware';

export type HitsProps = {
  onPress?: (hit: Hit<ResourceHit>) => void;
};

/**
 * Manages the rendering and pagination through search hits
 */
export function Hits({ onPress }: HitsProps) {
  const { hits, results, sendEvent } = useHits<ResourceHit>({});

  const attributeNames = aggregateAttributeNames(hits);

  const [viewMode, setViewMode] = useState<HitsViewMode>('list');
  return (
    <Stack w="100%">
      <ErrorMiddleware />

      <Group justify="apart" w="100%">
        <HitStatistics />

        <Group>
          <SortByField />
          <HitsViewButtons value={viewMode} onChange={setViewMode} />
        </Group>
      </Group>

      {viewMode === 'list' && (
        <Stack gap="md">
          {hits.map((hit) => (
            <HitView key={hit.objectID} hit={hit} onPress={onPress} />
          ))}
        </Stack>
      )}

      {viewMode === 'table' && (
        <table>
          <thead>
            <HitTableHeader columns={attributeNames} />
          </thead>
          <tbody>
            {hits.map((hit) => (
              <HitTableRow key={hit.objectID} hit={hit} columns={attributeNames} />
            ))}
          </tbody>
        </table>
      )}

      <PaginationButtons />
    </Stack>
  );
}
