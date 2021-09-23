import { useRecoilValue } from 'recoil';

import { taskStateById } from 'atoms';
import { TaskId } from 'types';

type Props = {
  id: TaskId;
};

const Task = ({ id }: Props) => {
  const task = useRecoilValue(taskStateById(id));

  return (
    <tr>
      <td>{task.name}</td>
      <td>Ready</td>
      <td>
        <button>Done!</button>
      </td>
    </tr>
  );
};

export default Task;
