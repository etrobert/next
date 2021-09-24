import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { projectState } from 'atoms';
import useAddTask from 'useAddTask';

import Task from './Task';

import './ListView.css';

const ListView = () => {
  const { tasks } = useRecoilValue(projectState);
  const [newTaskName, setNewTaskName] = useState<string>('');

  const addTask = useAddTask();

  return (
    <>
      <form
        id="new-task-form"
        onSubmit={(e) => {
          e.preventDefault();
          addTask(newTaskName);
          setNewTaskName('');
        }}
      />
      <table className="ListView">
        <tbody>
          {tasks.map((task) => (
            <Task key={task} id={task} />
          ))}
          <tr>
            <td>
              <button
                className="ListView__new-task-submit"
                type="submit"
                form="new-task-form"
              />
            </td>
            <td>
              <input
                className="ListView__new-task-input"
                type="text"
                form="new-task-form"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListView;
