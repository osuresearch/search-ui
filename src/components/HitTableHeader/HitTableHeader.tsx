import React from 'react';

export type HitTableHeader = {
  /**
   * Aggregate attribute names used for columns.
   *
   * This ensures ordering of each row when attributes
   * may be defined on each record out of order.
   */
  columns: string[];
};

export function HitTableHeader({ columns }: HitTableHeader) {
  // TODO: Need column count and value ordering based on count.

  return (
    <tr>
      <th>Name</th>
      <th>Description</th>

      {columns.map((name) => (
        <th key={name}>{name}</th>
      ))}
    </tr>
  );
}
