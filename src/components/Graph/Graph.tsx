import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import CytoscapeComponent from 'react-cytoscapejs';

import { cytoscapeDataState } from 'atoms';
import useAddDependency from 'hooks/useAddDependency';

import './Graph.css';

import type Cy from 'cytoscape';

const cytoscapeStylesheet = [
  {
    // [name] restricts the styling to elements with a name property
    // This is useful because edgehandles creates ghost nodes
    selector: 'node[name]',
    style: {
      // TODO Replace: label is deprecated
      // Source https://github.com/cytoscape/cytoscape.js/issues/2713#issuecomment-712247855
      width: 'label',
      height: 'label',
      shape: 'round-rectangle',
      label: 'data(name)',
      'text-valign': 'center' as const,
      padding: '10px',
    },
  },
  {
    selector: 'edge',
    style: {
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
      width: '5',
      'target-distance-from-node': 5,
      'source-distance-from-node': 5,
    },
  },
];

/**
 * Interactive canvas displaying a Task Graph
 */
const Graph = (): JSX.Element => {
  const [cy, setCy] = useState<Cy.Core | null>(null);

  const data = useRecoilValue(cytoscapeDataState);

  useEffect(() => {
    if (cy === null) return;
    const layout = cy.layout({
      name: 'random',
      animate: true,
    });
    layout.run();
    return () => {
      layout.stop();
    };
  }, [cy, data]);

  // Configure cytoscape edgehandles
  useEffect(() => {
    if (cy === null) return;

    const eh = cy.edgehandles({ snap: false, hoverDelay: 0 });
    eh.enableDrawMode();

    return () => eh.destroy();
  }, [cy]);

  const addDependency = useAddDependency();

  // Setup cytoscape edgehandles onComplete event
  useEffect(() => {
    if (cy === null) return;

    const handler = (
      event: Cy.EventObject,
      sourceNode: Cy.NodeSingular,
      targetNode: Cy.NodeSingular,
      addedEdge: Cy.EdgeSingular
    ) => addDependency(sourceNode.id(), targetNode.id());

    // @ts-expect-error Typing is wrong
    cy.on('ehcomplete', handler);

    return () => {
      // @ts-expect-error Typing is wrong
      cy.removeListener(handler);
    };
  }, [addDependency, cy]);

  return (
    <div className="Graph">
      <CytoscapeComponent
        className="Graph__cytoscape"
        elements={data}
        stylesheet={cytoscapeStylesheet}
        cy={(cy) => setCy(cy)}
      />
    </div>
  );
};

export default Graph;
