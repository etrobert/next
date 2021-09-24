type TaskId = string;

type Task = {
  name: string;
  status: 'ready' | 'completed';
};

type Project = {
  tasks: TaskId[];
};

export type { TaskId, Task, Project };
