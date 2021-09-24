import { useRecoilValue } from 'recoil';

import { taskStateById } from 'atoms';
import { TaskId } from 'types';

import './Task.css';

type Props = {
  id: TaskId;
};

const Task = ({ id }: Props) => {
  const task = useRecoilValue(taskStateById(id));

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td className={'Task__name-td'}>{task.name}</td>
    </tr>
  );
};

export default Task;
