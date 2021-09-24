import { useRecoilState } from 'recoil';

import { taskStateById } from 'atoms';
import { TaskId } from 'types';

import './Task.css';

type Props = {
  id: TaskId;
};

const Task = ({ id }: Props) => {
  const [{ name, status }, setTask] = useRecoilState(taskStateById(id));

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
    </tr>
  );
};

export default Task;
