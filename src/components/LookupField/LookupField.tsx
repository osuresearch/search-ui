import React from 'react';
import { FormFieldBase, TextField } from '@osuresearch/ui';

export type LookupFieldFieldProps<TDocument> = FormFieldBase<TDocument> & {
  // Props wanted:
  //  filter to exclude records. E.g. I want all group members
  //  excluded when searching for new group members to add.
  // filter for excluding data types in general, e.g. I want to
  //  only search for people, not for grants and such.
  // need a renderer for a record so I can show person cards,
  // resource lookups, etc etc.
};

/**
 * Simple form component for fast lookups against resource indices.
 *
 * Can scope it down to a particular index (people, submissions, reviews, etc)
 * and may, eventually, support advanced filters! OooOooo
 */
export function LookupField<TDocument>(props: LookupFieldFieldProps<TDocument>) {
  const { name, value, defaultValue, onChange, ...textFieldProps } = props;

  // TODO: Lookup provider wrapper and all that magic.

  return <TextField name={name} {...textFieldProps} />;
}
