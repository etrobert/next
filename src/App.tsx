import { useRecoilValue } from 'recoil';

import TaskComponent from './Task';
import { projectState } from './atoms';

import './App.css';

function App() {
  const { tasks } = useRecoilValue(projectState);

  return (
    <div className="App">
      <h1>Next</h1>
      <ul>
        {tasks.map((task) => (
          <TaskComponent key={task} id={task} />
        ))}
      </ul>
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
