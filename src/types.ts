type TaskId = string;

type Task = {
  name: string;
};

type Project = {
  tasks: TaskId[];
};

export type { TaskId, Task, Project };
