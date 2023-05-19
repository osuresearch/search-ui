import type { SearchResults } from 'algoliasearch-helper';
import type { Connector } from 'instantsearch.js';

export type DateRangeRefinementConnectorParams = {
  attribute: string;
};

export type DateRangeRefinementRenderState = {
  items: SearchResults.FacetValue[];
  refine: (value: string) => void;
};

type DateRangeRefinementWidgetDescription = {
  $$type: 'osuresearch.dateRangeRefinement';
  renderState: DateRangeRefinementRenderState;
  indexRenderState: {
    dateRangeRefinement: {
      [attribute: string]: DateRangeRefinementRenderState;
    };
  };
  indexUiState: {
    dateRangeRefinement: {
      [attribute: string]: string[];
    };
  };
};

type DateRangeRefinementConnector = Connector<
  DateRangeRefinementWidgetDescription,
  DateRangeRefinementConnectorParams
>;

export const connectDateRangeRefinement: DateRangeRefinementConnector = (
  renderFn,
  unmountFn = noop
) => {
  return function dateRangeRefinement(widgetParams) {
    type ConnectorState = {
      refine?(value: string): void;
    };

    // An empty `connectorState` object is used to store information
    // that needs to be shared across multiple method calls.
    const connectorState: ConnectorState = {};

    return {
      $$type: 'osuresearch.dateRangeRefinement',

      getWidgetRenderState({ results, helper }) {
        // To ensure `refine` keeps the same reference across renders, create
        // and store it once outside the method scope.
        if (!connectorState.refine) {
          connectorState.refine = (value) =>
            helper.toggleFacetExclusion(widgetParams.attribute, value).search();
        }

        // When there are no results, return the API with default values.
        // It's helpful to render a default UI until results are available.
        if (!results) {
          return { items: [], refine: connectorState.refine, widgetParams };
        }

        // Retrieve facet values from the results for the given attribute
        // and sort them by ascending name.
        // Later on, you could let users pass a `sortBy` parameter.
        const items =
          (results?.getFacetValues(widgetParams.attribute, {
            sortBy: ['name:asc']
          }) as SearchResults.FacetValue[]) || [];

        return {
          items,
          // A function to toggle a value when selected.
          // If the value is already excluded, the exclusion is unset.
          // Otherwise, it's added to the exclusion list.
          // Then, a search is triggered.
          refine: connectorState.refine,
          widgetParams
        };
      }
    };
  };
};

const noop = () => {};
