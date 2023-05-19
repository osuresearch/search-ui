import React from 'react';
import { SearchProvider } from './SearchProvider';

export type StorybookMockSearchProps = {
  children: React.ReactNode
}

export function StorybookMockSearch({ children }: StorybookMockSearchProps) {
  return (
    <SearchProvider index="imdb_demo">
      {children}
    </SearchProvider>
  )
}
