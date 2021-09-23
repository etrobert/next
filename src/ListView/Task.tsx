import { useRecoilValue } from 'recoil';

import { taskStateById } from 'atoms';
import { TaskId } from 'types';

type Props = {
  id: TaskId;
};

const Task = ({ id }: Props) => {
  const task = useRecoilValue(taskStateById(id));

  return <div>{task.name}</div>;
};

export default Task;
