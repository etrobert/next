type TaskId = string;

type Task = {
  name: string;
  status: 'ready' | 'completed';
};

type DependencyId = string;

type Dependency = {
  predecessor: TaskId;
  successor: TaskId;
};

type ProjectId = string;

type Project = {
  tasks: TaskId[];
  dependencies: DependencyId[];
};

export type { TaskId, Task, DependencyId, Dependency, ProjectId, Project };
