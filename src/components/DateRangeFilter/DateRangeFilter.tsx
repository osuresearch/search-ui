import React, { useEffect, useState } from 'react';
import {
  CheckboxSetField,
  Chip,
  DateField,
  Group,
  Item,
  Stack,
  Text,
  TextField
} from '@osuresearch/ui';
import {
  RefinementList,
  UseRefinementListProps,
  useConnector,
  useInstantSearch,
  useRange,
  useRefinementList,
  useToggleRefinement
} from 'react-instantsearch-hooks-web';

export type DateRangeFilterProps = {
  attribute: string;
  label: React.ReactNode;
};

export function DateRangeFilter({ attribute, label }: DateRangeFilterProps) {
  // TODO: Requires downstream fix: https://github.com/osuresearch/ui/issues/66

  const [minDate, setMinDate] = useState<any>();
  const [maxDate, setMaxDate] = useState<any>();

  const { start, range, canRefine, refine, sendEvent } = useRange({
    attribute
  });

  useEffect(() => {
    // Not supporting negatives at this time, see https://github.com/searchkit/searchkit/pull/1256
    let from = Math.max(new Date(minDate).getTime(), 0);
    let to = Math.max(new Date(maxDate).getTime(), 0);

    if (from < to) {
      const tmp = from;
      from = to;
      to = tmp;
    }

    refine([from, to]);
  }, [minDate, maxDate]);

  // let's pretend this works.. eventually...

  const from = new Date(start[0] ?? 0);
  const to = new Date(start[1] ?? 0);

  return (
    <Stack>
      <Text fw="bold">{label}</Text>
      {/* {JSON.stringify(minDate)} - {JSON.stringify(maxDate)}<br/>
      {JSON.stringify(from)} - {JSON.stringify(to)} */}
      <Group align="center">
        <DateField name="from" aria-label="from" value={minDate} onChange={setMinDate} />
        <Text fs="sm">→</Text>
        <DateField name="to" aria-label="to" value={maxDate} onChange={setMaxDate} />
      </Group>
    </Stack>
  );
}
