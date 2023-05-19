import React from 'react';
import { Item, SelectField } from '@osuresearch/ui';
import { useMenu } from 'react-instantsearch-hooks-web';

export type RefinementMenuFilterProps = {
  attribute: string;
  label: React.ReactNode;
};

export function RefinementMenuFilter({ label, attribute }: RefinementMenuFilterProps) {
  const { items, refine } = useMenu({
    attribute
  });

  return (
    <SelectField name={attribute} label={label} onChange={(key) => refine(key as string)}>
      {items.map((item) => (
        <Item key={item.label} textValue={item.label}>
          {item.label} - {item.count}
        </Item>
      ))}
    </SelectField>
  );
}
