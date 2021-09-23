import { atom, atomFamily } from 'recoil';

import { Project, Task, TaskId } from './types';

const taskStateById = atomFamily<Task, TaskId>({
  key: 'Task',
  default: {
    name: 'DEFAULT-NAME',
  },
});

const projectState = atom<Project>({
  key: 'Project',
  default: { tasks: [] },
});

export { taskStateById, projectState };
