import { without } from 'lodash';
import { useRecoilCallback } from 'recoil';

import { dependencyStateById, projectState, taskStateById } from 'atoms';
import { Dependency, DependencyId, Task, TaskId } from 'types';

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

  const addDependency = useRecoilCallback(
    ({ set }) =>
      (id: DependencyId, dependency: Dependency) => {
        set(dependencyStateById(id), dependency);
        set(projectState, (project) => ({
          ...project,
          dependencies: [...project.dependencies, id],
        }));
      }
  );

  return { addTask, setTask, removeTask, addDependency };
};

export default useRecoilProjectState;
