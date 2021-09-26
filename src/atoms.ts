import { atom, atomFamily, selector } from 'recoil';

import { Project, ProjectId, Task, TaskId } from './types';

import type Cy from 'cytoscape';

const taskStateById = atomFamily<Task, TaskId>({
  key: 'Task',
  default: {
    name: 'DEFAULT-NAME',
    status: 'ready',
  },
});

const projectIdState = atom<ProjectId>({
  key: 'ProjectId',
  default: 'AY61ltFwdgzx8AgBFqKC',
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

const cytoscapeDataState = selector<Cy.ElementDefinition[]>({
  key: 'CytoscapeData',
  get: ({ get }) => {
    const { tasks } = get(projectState);
    return tasks.map((id) => {
      const { name } = get(taskStateById(id));
      return { data: { id, name } };
    });
  },
});

export {
  taskStateById,
  projectIdState,
  projectState,
  nextTaskIdState,
  cytoscapeDataState,
};
