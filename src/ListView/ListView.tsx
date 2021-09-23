import { useRecoilValue } from 'recoil';

import { projectState } from 'atoms';

import Task from './Task';

import './ListView.css';

const ListView = () => {
  const { tasks } = useRecoilValue(projectState);

  return (
    <table className="ListView">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>{/* Buttons */}</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task} id={task} />
        ))}
      </tbody>
    </table>
  );
};

export default ListView;
