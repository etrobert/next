import { useState } from 'react';

import './App.css';

type TaskId = string;

type Task = {
  id: TaskId;
  name: string;
};

const mockTask1 = {
  id: '1',
  name: 'task-1',
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([mockTask1]);

  return (
    <div className="App">
      <h1>Next</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <div className="App__next-panel">
        {tasks.length === 0 ? (
          <h2>You're done!</h2>
        ) : (
          <>
            <h2>Next</h2>
            {tasks[0].name}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
