import React from 'react';
import { Button, ResponsiveProp, Spacing, Stack, Text } from '@osuresearch/ui';
import {
  UseHierarchicalMenuProps,
  useHierarchicalMenu
} from 'react-instantsearch-hooks-web';

import {
  HierarchicalMenuItem,
  HierarchicalMenuRenderState
} from 'instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu';

import { CountChip } from '../CountChip/CountChip';

export type CategoryRefinementFilterProps = Omit<UseHierarchicalMenuProps, 'attributes'> & {
  label?: React.ReactNode;
};

type NestedHierarchicalListProps = {
  pl?: ResponsiveProp<Spacing>;
  items: HierarchicalMenuItem[];
  refine: HierarchicalMenuRenderState['refine'];
  createURL: HierarchicalMenuRenderState['createURL'];
};

/**
 * Recursive list of links that allow category drilldowns
 */
function NestedHierarchicalList({ items, pl, createURL, refine }: NestedHierarchicalListProps) {
  return (
    <Stack as="ul" pl={pl}>
      {items
        .filter((item) => item.label.length > 0)
        .map((item) => (
          <li key={item.label}>
            <a
              href={createURL(item.value)}
              style={{ fontWeight: item.isRefined ? 'bold' : '' }}
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {item.label} <CountChip count={item.count} />
            </a>
            {item.data && (
              <NestedHierarchicalList
                pl="sm"
                items={item.data}
                refine={refine}
                createURL={createURL}
              />
            )}
          </li>
        ))}
    </Stack>
  );
}

export function CategoryRefinementFilter(props: CategoryRefinementFilterProps) {
  const {
    items,
    isShowingMore,
    canToggleShowMore,
    canRefine,
    refine,
    sendEvent,
    toggleShowMore,
    createURL
  } = useHierarchicalMenu({
    ...props,
    showParentLevel: true,
    attributes: ['categoryLvl1', 'categoryLvl2', 'categoryLvl3', 'categoryLvl4']
  });

  const { label } = props;

  return (
    <Stack>
      <Text fw="bold">{label}</Text>
      <NestedHierarchicalList items={items} createURL={createURL} refine={refine} />
      {canToggleShowMore && (
        <Button onPress={toggleShowMore}>{isShowingMore ? 'Show fewer' : 'Show more'}</Button>
      )}
    </Stack>
  );
}
