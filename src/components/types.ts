import { Atom } from '@osuresearch/types';
import type { Hit } from 'instantsearch.js';

export type HitsViewMode = 'list' | 'table';

export type Resource = {
  name: string;
  textDescription: string;
  attributes: {
    [name: string]: Atom[];
  };
};

export type ResourceHit = Hit<Resource>;
