import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { deleteDoc, doc } from 'firebase/firestore';

import { projectIdState } from 'atoms';
import { TaskId } from 'types';
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
