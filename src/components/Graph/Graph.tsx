import { useRecoilValue } from 'recoil';
import CytoscapeComponent from 'react-cytoscapejs';

import { projectState } from 'atoms';

import './Graph.css';

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
  const { tasks } = useRecoilValue(projectState);
  // const dependencies = useRecoilValue(projectDependenciesSelector);

  const cyTaskData = tasks.map((task) => ({
    data: { id: task, name: task },
  }));

  // const cyDependencyData = dependencies.map((dependency) => ({
  // data: {
  // source: dependency.predecessor,
  // target: dependency.successor,
  // },
  // }));
  // const cyDependencyData = [];

  return (
    <div className="Graph">
      <CytoscapeComponent
        className="Graph__cytoscape"
        elements={cyTaskData}
        stylesheet={cytoscapeStylesheet}
      />
    </div>
  );
};

export default Graph;
