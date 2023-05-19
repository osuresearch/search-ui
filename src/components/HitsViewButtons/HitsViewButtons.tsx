import React from 'react';
import { Button, ToggleButton } from '@osuresearch/ui';
import { HitsViewMode } from '../types';

export type HitsViewButtonsProps = {
  value: HitsViewMode;
  onChange: (mode: HitsViewMode) => void;
};

export function HitsViewButtons({ value, onChange }: HitsViewButtonsProps) {
  return (
    <div>
      <ToggleButton isSelected={value === 'list'} onPress={() => onChange('list')}>
        List
      </ToggleButton>
      <ToggleButton isSelected={value === 'table'} onPress={() => onChange('table')}>
        Table
      </ToggleButton>
    </div>
  );
}
