import React from 'react';
import { Alert } from '@osuresearch/ui';
import { useState, useEffect } from 'react';
import { useInstantSearch } from 'react-instantsearch-hooks-web';

/**
 * Middleware for reporting InstantSearch errors
 */
export function ErrorMiddleware() {
  const { use } = useInstantSearch();
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const middleware = ({ instantSearchInstance }: any) => {
      function handleError(searchError: any) {
        setError(searchError);
      }

      return {
        subscribe() {
          instantSearchInstance.addListener('error', handleError);
        },
        unsubscribe() {
          instantSearchInstance.removeListener('error', handleError);
        }
      };
    };

    return use(middleware);
  }, [use]);

  if (!error) {
    return null;
  }

  return (
    <Alert variant="error" title="Search error">
      {error.name} - {error.message}
    </Alert>
  );
}
