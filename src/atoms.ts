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

export { taskStateById, projectState, nextTaskIdState };
