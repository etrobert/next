import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import {
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  where,
  writeBatch,
} from 'firebase/firestore';

import { projectIdState } from 'atoms';
import { TaskId } from 'types';
import firestore from 'firestore';

const useDeleteTask = () => {
  const projectId = useRecoilValue(projectIdState);

  return useCallback(
    async (id: TaskId) => {
      const batch = writeBatch(firestore);
      const depsRef = collection(
        firestore,
        `projects/${projectId}/dependencies`
      );
      const predsQuery = query(depsRef, where('successor', '==', id));
      const succsQuery = query(depsRef, where('predecessor', '==', id));

      const [preds, succs] = await Promise.all([
        getDocs(predsQuery),
        getDocs(succsQuery),
      ]);

      const deleteFromSnapshot = (
        snapshot: QueryDocumentSnapshot<DocumentData>
      ) => {
        const ref = doc(
          firestore,
          `projects/${projectId}/dependencies/${snapshot.id}`
        );
        batch.delete(ref);
      };

      preds.forEach(deleteFromSnapshot);
      succs.forEach(deleteFromSnapshot);

      batch.delete(doc(firestore, `projects/${projectId}/tasks/${id}`));
      return batch.commit();
    },
    [projectId]
  );
};

export default useDeleteTask;
