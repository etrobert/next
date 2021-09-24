type TaskId = string;

type Task = {
  name: string;
  status: 'ready' | 'completed';
};

type ProjectId = string;

type Project = {
  tasks: TaskId[];
};

export type { TaskId, Task, ProjectId, Project };
