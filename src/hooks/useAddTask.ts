import { addDoc, collection } from 'firebase/firestore';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import firestore from 'firestore';

import { projectIdState } from 'atoms';

const useAddTask = () => {
  const projectId = useRecoilValue(projectIdState);

  return useCallback(
    (name: string) => {
      const ref = collection(firestore, `projects/${projectId}/tasks`);
      const task = {
        name,
        status: 'ready',
      };
      return addDoc(ref, task);
    },
    [projectId]
  );
};

export default useAddTask;
