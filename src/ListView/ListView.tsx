import { useRecoilValue } from 'recoil';

import { projectState } from '../atoms';
import Task from '../Task';

const ListView = () => {
  const { tasks } = useRecoilValue(projectState);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task} id={task} />
      ))}
    </ul>
  );
};

export default ListView;
