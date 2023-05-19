import React from 'react';

import { Group, RUIProvider, Stack } from '@osuresearch/ui';
import { SearchProvider } from '../src/components/SearchProvider';
import { ToggleRefinementFilter } from '../src/components/ToggleRefinementFilter';
import { RefinementListFilter } from '../src/components/RefinementListFilter';
import { DateRangeFilter } from '../src/components/DateRangeFilter';
import { ClearRefinementsButton } from '../src/components/ClearRefinementsButton';
import { SearchField } from '../src/components/SearchField';
import { CurrentRefinementChips } from '../src/components/CurrentRefinementChips';
import { Hits } from '../src/components/Hits';
import { CategoryRefinementFilter } from '../src/components/CategoryRefinementFilter';

export const Demo = () =>
  <RUIProvider theme="light">

  <SearchProvider index="imdb_demo">
    <Group w="100%">
      <Stack>
        <CategoryRefinementFilter label="Category" />
        {/* <ToggleRefinementFilter label="Kid Friendly" attribute="kidFriendly" /> */}

        <RefinementListFilter label="Rating" attribute="Rating" />

        <RefinementListFilter label="Director" attribute="Director" hasFilter />
        <DateRangeFilter label="Released" attribute="Released" />

        <ClearRefinementsButton />
      </Stack>
      <Stack w="100%">
        <SearchField />
        <CurrentRefinementChips />
        <Hits />
      </Stack>
    </Group>
  </SearchProvider>

  </RUIProvider>
