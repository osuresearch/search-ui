import React from 'react';
import { Chip } from '@osuresearch/ui';

export type CountChipProps = {
  count: number;
};

export function CountChip({ count }: CountChipProps) {
  return <Chip ml="sm">{count}</Chip>;
}
