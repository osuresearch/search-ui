import React from 'react';
import { Pagination } from 'react-instantsearch-hooks-web';

export type PaginationButtonsProps = {};

export function PaginationButtons(props: PaginationButtonsProps) {
  // TODO: Need a jump to top of results each click. onNavigate isn't supported in hooks
  // TODO: I'm just hacking the CSS temporarily. These buttons actually suck and need to
  // use the actual RUI buttons
  return (
    <Pagination
      classNames={{
        // Ref: https://www.algolia.com/doc/api-reference/widgets/pagination/react-hooks/#widget-param-classnames
        list: 'rui-flex',
        item: 'hover:rui-bg-light rui-w-xl rui-text-center rui-px-xs rui-py-xxs'
      }}
    />
  );
}
