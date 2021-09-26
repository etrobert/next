import { without } from 'lodash';
import { useRecoilCallback } from 'recoil';

import { projectState, taskStateById } from 'atoms';
import { Task, TaskId } from 'types';

const useRecoilProjectState = () => {
  const addTask = useRecoilCallback(({ set }) => (id: TaskId, task: Task) => {
    set(taskStateById(id), task);
    set(projectState, (project) => ({
      ...project,
      tasks: [...project.tasks, id],
    }));
  });

  const removeTask = useRecoilCallback(
    ({ set }) =>
      (id: TaskId) =>
        set(projectState, (project) => ({
          ...project,
          tasks: without(project.tasks, id),
        }))
  );

  const setTask = useRecoilCallback(
    ({ set }) =>
      (id: TaskId, task: Task) =>
        set(taskStateById(id), task)
  );

  return { addTask, setTask, removeTask };
};

export default useRecoilProjectState;
