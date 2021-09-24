import { useRecoilState } from 'recoil';

import { taskStateById } from 'atoms';
import { TaskId } from 'types';
import useDeleteTask from 'useDeleteTask';

import './Task.css';

type Props = {
  id: TaskId;
};

const Task = ({ id }: Props) => {
  const [{ name, status }, setTask] = useRecoilState(taskStateById(id));

  const deleteTask = useDeleteTask();

  const toggleStatus = () => {
    setTask((task) => ({
      ...task,
      status: task.status === 'ready' ? 'completed' : 'ready',
    }));
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={status === 'completed'}
          onChange={toggleStatus}
        />
      </td>
      <td className={'Task__name-td'}>{name}</td>
      <td>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
