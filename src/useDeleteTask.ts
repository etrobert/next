import { useRecoilCallback } from 'recoil';
import without from 'lodash/without';

import { projectState } from './atoms';
import { TaskId } from './types';

const useDeleteTask = () =>
  useRecoilCallback(({ set }) => (id: TaskId) => {
    set(projectState, (project) => ({
      ...project,
      tasks: without(project.tasks, id),
    }));
  });

export default useDeleteTask;
