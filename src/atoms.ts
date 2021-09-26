import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import partition from 'lodash/partition';

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

const projectWithoutCompletedState = selector<Project>({
  key: 'ProjectWithoutCompleted',
  get: ({ get }) => {
    const { tasks, dependencies } = get(projectState);
    const [completed, nonCompleted] = partition(
      tasks,
      (task) => get(taskStateById(task)).status === 'completed'
    );

    const deps = dependencies.filter((dep) => {
      const { predecessor, successor } = get(dependencyStateById(dep));
      // We filter out deps that have successor or predecessor completed
      return !completed.some(
        (task) => task === successor || task === predecessor
      );
    });

    return { tasks: nonCompleted, dependencies: deps };
  },
});

const hasTaskPredecessorStateById = selectorFamily<boolean, TaskId>({
  key: 'HasTaskPredecessor',
  get:
    (taskId) =>
    ({ get }) => {
      const { dependencies } = get(projectState);
      return dependencies.some((depId) => {
        const { successor } = get(dependencyStateById(depId));
        return successor === taskId;
      });
    },
});

const nextTaskIdState = selector<TaskId | null>({
  key: 'NextTaskId',
  get: ({ get }) => {
    const { tasks } = get(projectState);
    return (
      tasks.filter((taskId) => {
        return (
          !get(hasTaskPredecessorStateById(taskId)) &&
          get(taskStateById(taskId)).status === 'ready'
        );
      })[0] ?? null
    );
  },
});

const cytoscapeDataState = selector<Cy.ElementDefinition[]>({
  key: 'CytoscapeData',
  get: ({ get }) => {
    const { tasks, dependencies } = get(projectWithoutCompletedState);
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
