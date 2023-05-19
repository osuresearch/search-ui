import React from 'react';
import { Button } from '@osuresearch/ui';
import { UseClearRefinementsProps, useClearRefinements } from 'react-instantsearch-hooks-web';

export type ClearRefinementsButtonProps = UseClearRefinementsProps;

export function ClearRefinementsButton(props: ClearRefinementsButtonProps) {
  const { refine, canRefine } = useClearRefinements(props);
  return (
    <Button onPress={refine} isDisabled={!canRefine}>
      Clear refinements
    </Button>
  );
}
