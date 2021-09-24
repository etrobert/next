import { useRecoilValue } from 'recoil';

import { nextTaskState } from 'atoms';

import './NextPanel.css';

const NextPanel = () => {
  const nextTask = useRecoilValue(nextTaskState);

  return (
    <div className="NextPanel">
      {nextTask === null ? (
        <h2>You're done!</h2>
      ) : (
        <>
          <h2>Next</h2>
          {nextTask.name}
          <button>DONE!</button>
        </>
      )}
    </div>
  );
};
export default NextPanel;
