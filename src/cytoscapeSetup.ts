import cytoscape from 'cytoscape';
import edgehandles from 'cytoscape-edgehandles';
// @ts-expect-error Module is not typed
import cola from 'cytoscape-cola';

// @ts-expect-error Typing does not work
cytoscape.use(edgehandles);
cytoscape.use(cola);
