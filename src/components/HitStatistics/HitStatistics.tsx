import React from 'react';
import { Text } from '@osuresearch/ui';
import { useStats } from 'react-instantsearch-hooks-web';

export function HitStatistics() {
  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query
  } = useStats({});

  return (
    <Text fs="sm" c="dark">
      {nbHits > 0 ? nbHits : 'No'} results found in {processingTimeMS}ms
    </Text>
  );
}
