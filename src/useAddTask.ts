import { useRecoilCallback } from 'recoil';

import { projectState, taskStateById } from './atoms';

// TODO Replace
const generateId = () => Math.random().toString();

const useAddTask = () =>
  useRecoilCallback(({ set }) => (name: string) => {
    const newId = generateId();
    set(taskStateById(newId), { name, status: 'ready' as const });
    set(projectState, (state) => ({
      ...state,
      tasks: [...state.tasks, newId],
    }));
  });

export default useAddTask;
