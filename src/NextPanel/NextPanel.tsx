import { useRecoilState, useRecoilValue } from 'recoil';

import { nextTaskIdState, taskStateById } from 'atoms';

import './NextPanel.css';

const NextPanel = () => {
  const nextTaskId = useRecoilValue(nextTaskIdState);
  const [nextTask, setNextTask] = useRecoilState(
    taskStateById(nextTaskId ?? '')
  );

  return (
    <div className="NextPanel">
      {nextTaskId === null ? (
        <h2>You're done!</h2>
      ) : (
        <>
          <h2>Next Task</h2>
          {nextTask.name}
          <button
            onClick={() =>
              setNextTask((task) => ({ ...task, status: 'completed' }))
            }
          >
            DONE!
          </button>
        </>
      )}
    </div>
  );
};
export default NextPanel;
