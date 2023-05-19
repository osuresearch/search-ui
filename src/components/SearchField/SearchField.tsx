import React from 'react';
import { TextField, VisuallyHidden, Stack, TextInputSlot, Icon, IconButton } from '@osuresearch/ui';
import { ChangeEvent } from 'react';
import { SearchBox, useSearchBox } from 'react-instantsearch-hooks-web';

export type SearchFieldProps = {};

export function SearchField(props: SearchFieldProps) {
  const { query, refine, clear } = useSearchBox(props);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    refine(e.currentTarget.value ?? '');
  };

  return (
    <TextField
      name="search"
      aria-label="Search"
      value={query}
      onChange={(value) => refine(value ?? '')}
      rightWidth={32}
      rightSlot={
        query !== '' ? (
          <IconButton
            label="Clear search"
            size={16}
            h="100%"
            px="xs"
            name="xmark"
            variant="fade"
            onPress={clear}
          />
        ) : undefined
      }
    />
  );
}
