import { useRecoilValue } from 'recoil';

import { projectState, taskStateById } from 'atoms';

import './NextPanel.css';

const NextPanel = () => {
  const { tasks } = useRecoilValue(projectState);
  const firstTask = useRecoilValue(taskStateById(tasks[0]));

  return (
    <div className="NextPanel">
      {tasks.length === 0 ? (
        <h2>You're done!</h2>
      ) : (
        <>
          <h2>Next</h2>
          {firstTask.name}
        </>
      )}
    </div>
  );
};
export default NextPanel;
