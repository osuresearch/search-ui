import React from 'react';
import { CheckboxField, Text } from '@osuresearch/ui';
import {
  RefinementList,
  ToggleRefinement,
  UseToggleRefinementProps,
  useToggleRefinement
} from 'react-instantsearch-hooks-web';

export type ToggleRefinementFilterProps = UseToggleRefinementProps & {
  label: React.ReactNode;
};

export function ToggleRefinementFilter({
  label,
  attribute,
  on = true,
  off = undefined
}: ToggleRefinementFilterProps) {
  const { value, canRefine, refine, sendEvent, createURL } = useToggleRefinement({
    attribute,
    on,
    off
  });

  return (
    <div>
      <Text fw="bold">{label}</Text>
      <CheckboxField
        name={value.name}
        value={value.isRefined}
        // isReadOnly={!canRefine}
        label={`${label} [${value.count}] - ${value.isRefined ? 'yes' : 'no'} ${
          canRefine ? 'canref ' : 'noref'
        }`}
        onChange={(checked) => {
          refine({ isRefined: !checked });
        }}
      />
    </div>
  );
}
