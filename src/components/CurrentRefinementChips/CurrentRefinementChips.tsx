import React from 'react';
import { CurrentRefinements } from 'react-instantsearch-hooks-web';

export type CurrentRefinementChipsProps = {};

export function CurrentRefinementChips(props: CurrentRefinementChipsProps) {
  return (
    <CurrentRefinements
      classNames={{
        list: 'rui-flex',
        item: 'rui-bg-light rui-p-xxs rui-text-sm rui-mr-xs',
        label: 'rui-font-bold',
        category: 'rui-px-xxs',
        delete: 'rui-pl-xxs'
      }}
    />
  );
}
