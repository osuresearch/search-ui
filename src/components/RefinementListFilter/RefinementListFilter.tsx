import React from 'react';
import { Button, CheckboxSetField, Item, Stack, Text, TextField } from '@osuresearch/ui';
import {
  RefinementList,
  UseRefinementListProps,
  useInstantSearch,
  useRefinementList
} from 'react-instantsearch-hooks-web';
import { CountChip } from '../CountChip/CountChip';

export type RefinementListFilterProps = UseRefinementListProps & {
  label: React.ReactNode;

  /**
   * Should a search input be displayed to filter down values for this facet
   */
  hasFilter?: boolean;
};

export function RefinementListFilter(props: RefinementListFilterProps) {
  const {
    items,
    hasExhaustiveItems,
    createURL,
    refine,
    sendEvent,
    searchForItems,
    isFromSearch,
    canRefine,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore
  } = useRefinementList(props);

  const { uiState, setUiState } = useInstantSearch();

  const { label, attribute, hasFilter } = props;

  // const [selected, setSelected] = useState<string[]>([]);

  // const onChange = (values: string[] | undefined) => {
  //   setSelected([... (values ?? [])]);
  // }

  // useEffect(() => {
  //   // Ref: https://github.com/algolia/instantsearch-specs/issues/91
  //   // And: https://www.algolia.com/doc/api-reference/widgets/use-instantsearch/react-hooks/

  //   const indexName = 'review'; // TODO: Need to fetch somehow.

  //   setUiState((prev) => ({
  //     ...prev,
  //     [indexName]: {
  //       refinementList: {
  //         ...prev[indexName].refinementList,
  //         [attribute]: selected,
  //       }
  //     }
  //   }));

  // }, [selected]);

  // TODO: Assumes only one index is being used.
  const indexName = Object.keys(uiState)[0];

  const onChange = (values: string[] | undefined) => {
    if (values === undefined) {
      return;
    }

    // TODO: Duplicates are possible using this method.

    setUiState((prev) => ({
      ...prev,
      [indexName]: {
        refinementList: {
          ...prev[indexName].refinementList,
          [attribute]: values.map(
            // Make sure white space refinements are quoted
            // NOTE: This doesn't work with SK4 correctly.
            // (value) => value.indexOf(' ') >= 0 ? `"${value}"` : value
            (value) => value
          )
        }
      }
    }));
  };

  const indexState = uiState[indexName];

  let value: string[] = [];
  if (indexState.refinementList) {
    value = indexState.refinementList[attribute];
  }

  return (
    <Stack>
      <Text fw="bold">{label}</Text>

      {hasFilter && (
        <TextField
          fs="sm"
          name="filter"
          aria-label="Filter refinement"
          onChange={(value) => searchForItems(value ?? '')}
        />
      )}

      <CheckboxSetField
        name="filter"
        aria-label="TODO: a11y"
        value={value}
        onChange={onChange}
        placeholder={<em>No filters available</em>}
      >
        {items.map((item) => (
          <Item key={item.value} textValue={item.value}>
            {/* Highlighted items come with pre-markup  */}
            {item.highlighted && <span dangerouslySetInnerHTML={{ __html: item.highlighted }} />}

            {!item.highlighted && item.label}
            <CountChip count={item.count} />
          </Item>
        ))}
      </CheckboxSetField>

      {canToggleShowMore && (
        <Button onPress={toggleShowMore}>{isShowingMore ? 'Show fewer' : 'Show more'}</Button>
      )}
    </Stack>
  );
}
