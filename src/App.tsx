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
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      {tasks.length === 0 ? "You're done!" : 'Next: ' + tasks[0].name}
    </div>
  );
}

export default App;
