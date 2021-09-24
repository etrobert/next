import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useRecoilValue } from 'recoil';

import useRecoilProjectState from './useRecoilProjectState';
import { projectIdState } from './atoms';
import firestore from './firestore';
import { Task } from './types';

const useSyncFirestore = (): void => {
  const projectId = useRecoilValue(projectIdState);
  const { addTask, removeTask } = useRecoilProjectState();

  useEffect(() => {
    const ref = collection(firestore, `projects/${projectId}/tasks`);
    const unsubscribe = onSnapshot(ref, (snapshot) =>
      snapshot.docChanges().forEach((change) => {
        const { id } = change.doc;
        const task = change.doc.data() as Task;
        switch (change.type) {
          case 'added':
            addTask(id, task);
            break;
          case 'modified':
            console.log('setTask', id, task);
            // setTask(id, task);
            break;
          case 'removed':
            removeTask(id);
            break;
        }
      })
    );
    return unsubscribe;
  }, [projectId, addTask, removeTask]);
};

export default useSyncFirestore;
