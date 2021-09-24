import { useRecoilValue } from 'recoil';

import { projectIdState } from './atoms';
import { TaskId } from './types';
import { useCallback } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import firestore from 'firestore';

const useDeleteTask = () => {
  const projectId = useRecoilValue(projectIdState);

  return useCallback(
    (id: TaskId) =>
      deleteDoc(doc(firestore, `projects/${projectId}/tasks/${id}`)),
    [projectId]
  );
};

export default useDeleteTask;
