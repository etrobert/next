import { useRecoilValue } from 'recoil';

import { taskStateById } from 'atoms';
import { TaskId } from 'types';
import useDeleteTask from 'hooks/useDeleteTask';
import useUpdateTask from 'hooks/useUpdateTask';
import IconButton from 'components/IconButton/IconButton';

import './Task.css';

type Props = {
  id: TaskId;
};

const Task = ({ id }: Props) => {
  const { name, status } = useRecoilValue(taskStateById(id));

  const deleteTask = useDeleteTask();
  const updateTask = useUpdateTask();

  // TODO Use updater rather than local value
  const toggleStatus = () =>
    updateTask(id, { status: status === 'ready' ? 'completed' : 'ready' });

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
        <IconButton
          icon={'x-square'}
          title={'Delete'}
          onClick={() => deleteTask(id)}
        />
      </td>
    </tr>
  );
};

export default Task;
