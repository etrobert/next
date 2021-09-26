import { doc, updateDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import firestore from 'firestore';

import { projectIdState } from 'atoms';
import { Task, TaskId } from 'types';

const useUpdateTask = () => {
  const projectId = useRecoilValue(projectIdState);

  return useCallback(
    (id: TaskId, update: Partial<Task>) =>
      updateDoc(doc(firestore, `projects/${projectId}/tasks/${id}`), update),
    [projectId]
  );
};

export default useUpdateTask;
