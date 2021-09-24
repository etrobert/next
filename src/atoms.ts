import { atom, atomFamily, selector } from 'recoil';

import { Project, Task, TaskId } from './types';

const taskStateById = atomFamily<Task, TaskId>({
  key: 'Task',
  default: {
    name: 'DEFAULT-NAME',
    status: 'ready',
  },
});

const projectState = atom<Project>({
  key: 'Project',
  default: { tasks: [] },
});

const nextTaskIdState = selector<TaskId | null>({
  key: 'NextTaskId',
  get: ({ get }) => {
    const { tasks } = get(projectState);
    return (
      tasks.filter(
        (taskId) => get(taskStateById(taskId)).status !== 'completed'
      )[0] ?? null
    );
  },
});

const nextTaskState = selector<Task | null>({
  key: 'NextTask',
  get: ({ get }) => {
    const nextTaskId = get(nextTaskIdState);
    return nextTaskId === null ? null : get(taskStateById(nextTaskId));
  },
});

export { taskStateById, projectState, nextTaskState };
