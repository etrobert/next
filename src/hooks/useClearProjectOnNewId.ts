import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { projectState } from 'atoms';

const useClearProjectOnNewId = () => {
  const setProject = useSetRecoilState(projectState);
  useEffect(() => setProject({ tasks: [] }));
};

export default useClearProjectOnNewId;
