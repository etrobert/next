import { addDoc, collection } from 'firebase/firestore';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import firestore from 'firestore';
import { projectIdState } from 'atoms';

import type { TaskId } from 'types';

const useAddTask = () => {
  const projectId = useRecoilValue(projectIdState);

  return useCallback(
    (predecessor: TaskId, successor: TaskId) => {
      const ref = collection(firestore, `projects/${projectId}/dependencies`);
      const dependency = {
        predecessor,
        successor,
      };
      return addDoc(ref, dependency);
    },
    [projectId]
  );
};

export default useAddTask;
