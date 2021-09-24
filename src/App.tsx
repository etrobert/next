import ListView from './ListView/ListView';
import NextPanel from './NextPanel/NextPanel';
import useSyncFirestore from './useSyncFirestore';

import './App.css';

function App() {
  useSyncFirestore();

  return (
    <div className="App">
      <h1>Next</h1>
      <ListView />
      <NextPanel />
    </div>
  );
}

export default App;
