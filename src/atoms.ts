import { atom, atomFamily, selector } from 'recoil';

import type {
  DependencyId,
  Dependency,
  Project,
  ProjectId,
  Task,
  TaskId,
} from './types';

import type Cy from 'cytoscape';

const taskStateById = atomFamily<Task, TaskId>({
  key: 'Task',
  default: {
    name: 'DEFAULT-NAME',
    status: 'ready',
  },
});

const dependencyStateById = atomFamily<Dependency, DependencyId>({
  key: 'Dependency',
  default: {
    predecessor: 'DEFAULT-ID',
    successor: 'DEFAULT-ID',
  },
});

const projectIdState = atom<ProjectId>({
  key: 'ProjectId',
  default: 'AY61ltFwdgzx8AgBFqKC',
});

const projectState = atom<Project>({
  key: 'Project',
  default: { tasks: [], dependencies: [] },
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
    const { tasks, dependencies } = get(projectState);
    const tasksData = tasks.map((id) => {
      const { name } = get(taskStateById(id));
      return { data: { id, name } };
    });

    const dependenciesData = dependencies.map((id) => {
      const { predecessor: source, successor: target } = get(
        dependencyStateById(id)
      );
      return { data: { id, source, target } };
    });

    return [...tasksData, ...dependenciesData];
  },
});

export {
  taskStateById,
  dependencyStateById,
  projectIdState,
  projectState,
  nextTaskIdState,
  cytoscapeDataState,
};
