import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useRecoilValue } from 'recoil';

import useRecoilProjectState from './useRecoilProjectState';
import { projectIdState } from 'atoms';
import firestore from 'firestore';
import { Dependency, Task } from 'types';

const useSyncFirestore = (): void => {
  const projectId = useRecoilValue(projectIdState);
  const { addTask, setTask, removeTask, addDependency, removeDependency } =
    useRecoilProjectState();

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
            setTask(id, task);
            break;
          case 'removed':
            removeTask(id);
            break;
        }
      })
    );
    return unsubscribe;
  }, [projectId, addTask, removeTask, setTask]);

  useEffect(() => {
    const ref = collection(firestore, `projects/${projectId}/dependencies`);
    const unsubscribe = onSnapshot(ref, (snapshot) =>
      snapshot.docChanges().forEach((change) => {
        const { id } = change.doc;
        const dependency = change.doc.data() as Dependency;
        switch (change.type) {
          case 'added':
            addDependency(id, dependency);
            break;
          case 'modified':
            // setTask(id, task);
            break;
          case 'removed':
            removeDependency(id);
            break;
        }
      })
    );
    return unsubscribe;
  }, [projectId, addDependency, removeDependency]);
};

export default useSyncFirestore;
