import type Cy from 'cytoscape';
import { useEffect } from 'react';

const useCytoscapeEvent = (
  cy: Cy.Core | null,
  events: string,
  handler: Cy.EventHandler
) => {
  useEffect(() => {
    if (cy === null) return;

    cy.on(events, handler);

    return () => {
      cy.removeListener(events, handler);
    };
  }, [cy, events, handler]);
};

export default useCytoscapeEvent;
