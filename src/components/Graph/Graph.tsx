import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import CytoscapeComponent from 'react-cytoscapejs';

import { cytoscapeDataState } from 'atoms';

import './Graph.css';

import type Cy from 'cytoscape';

const cytoscapeStylesheet = [
  {
    selector: 'node',
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
  // const dependencies = useRecoilValue(projectDependenciesSelector);

  // const cyDependencyData = dependencies.map((dependency) => ({
  // data: {
  // source: dependency.predecessor,
  // target: dependency.successor,
  // },
  // }));
  // const cyDependencyData = [];

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