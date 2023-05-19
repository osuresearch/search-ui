import React from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import Searchkit from 'searchkit';
import Client from '@searchkit/instantsearch-client';

export type SearchProviderProps = {
  /** OpenSearch index or alias to search against */
  index: string;

  children: React.ReactNode;
};

// TODO: Searchkit configuration will become dynamic based on the
// application needs. We should be able to generate facet attributes
// from everything we know about searchable resources on the fly
// and leave it to the components to define which attributes they
// actually care to render facets/filters against.
const sk = new Searchkit(
  {
    connection: {
      // Public demo account with access to IMDb results.
      host: 'https://search-public-demo-eaxulbttducvb4jllruv47r7da.us-east-2.es.amazonaws.com:443',
      auth: {
        username: 'Public-Demo1',
        password: 'Public-Demo#1'
      }
    },
    search_settings: {
      sorting: {
        default: {
          field: '_score',
          order: 'desc'
        },
        _updated_desc: {
          field: 'updatedDate',
          order: 'desc'
        },
        _updated_asc: {
          field: 'updatedDate',
          order: 'asc'
        }
      },

      highlight_attributes: ['name', 'attributes.*', 'searchables.*'],

      snippet_attributes: ['textDescription'],

      // Weighted attributes that the organic search box can search on
      search_attributes: [
        { field: 'name', weight: 3 },
        { field: 'textDescription', weight: 2 },
        { field: 'searchables.*', weight: 1 }
      ],

      // Attributes to be returned in hits
      result_attributes: ['id', 'name', 'textDescription', 'attributes.*'],

      facet_attributes: [
        // All search pages for hierarchical drilldowns
        {
          attribute: 'categoryLvl1',
          field: 'categoryLvl1.keyword',
          type: 'string'
        },
        {
          attribute: 'categoryLvl2',
          field: 'categoryLvl2.keyword',
          type: 'string'
        },
        {
          attribute: 'categoryLvl3',
          field: 'categoryLvl3.keyword',
          type: 'string'
        },
        {
          attribute: 'categoryLvl4',
          field: 'categoryLvl4.keyword',
          type: 'string'
        },
        {
          attribute: 'Rating',
          field: 'attributes.Rated.text.keyword',
          type: 'string'
        },
        {
          attribute: 'Director',
          field: 'attributes.Director.name.keyword',
          type: 'string'
        },
        {
          attribute: 'Actor',
          field: 'attributes.Actor.name.keyword',
          type: 'string'
        },

        {
          attribute: 'person2',
          field: 'facets.__Person.keyword',
          type: 'string'
        },

        // Nested path testing
        {
          // The AGG on the refinement needs to be a particular keyword field.
          // BUT! The Person data is an entire object. Now if I serialize an entire
          // JSON blob as a keyword field, totally doable. Yet, that's hacky.
          // The alternative, then, is https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html
          // But there's substantial limitation against something like this. So it'd make
          // more sense to just have flattened references and use a secondary source as
          // hydration of those results. ... or keyword JSON ...
          attribute: 'principalInvestigator',
          field: 'attributes.Principal Investigator.name.keyword',
          type: 'string'
          // nestedPath: 'attributes',
        }
      ],
      filter_attributes: [
        // Used by Inbox and Review search
        {
          attribute: 'Released',
          field: 'attributes.Released.dateTime',
          type: 'date'
        },

        // Unused
        {
          attribute: 'createdDate',
          field: 'createdDate',
          type: 'date'
        },
        {
          attribute: 'updatedDate',
          field: 'updatedDate',
          type: 'date'
        }
      ]
    }
  },
  { debug: true }
);

const searchClient = Client(sk);

export function SearchProvider({ index, children }: SearchProviderProps) {
  // need base filters

  return (
    <InstantSearch indexName={index} searchClient={searchClient as any}>
      <Configure hitsPerPage={10} />

      {children}
    </InstantSearch>
  );
}
