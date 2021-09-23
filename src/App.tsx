import { useRecoilValue } from 'recoil';

import ListView from './ListView/ListView';
import TaskComponent from './ListView/Task';
import { projectState } from './atoms';

import './App.css';

function App() {
  const { tasks } = useRecoilValue(projectState);

  return (
    <div className="App">
      <h1>Next</h1>
      <ListView />
      <div className="App__next-panel">
        {tasks.length === 0 ? (
          <h2>You're done!</h2>
        ) : (
          <>
            <h2>Next</h2>
            <TaskComponent id={tasks[0]} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
