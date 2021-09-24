import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { projectState, taskStateById } from './atoms';

import './index.css';

const mockTaskFactory = (n: number) => ({
  name: `task-${n}`,
  status: Math.random() > 0.5 ? ('ready' as const) : ('completed' as const),
});

const mockTasks = [0, 1, 2, 3, 4, 5, 6].map(mockTaskFactory);
const mockTasksIds = mockTasks.map((task) => task.name);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot
      initializeState={({ set }) => {
        set(projectState, { tasks: mockTasksIds });
        mockTasks.forEach((task) => set(taskStateById(task.name), task));
      }}
    >
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
