import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';

import { projectIdState } from 'atoms';
import useSyncFirestore from 'useSyncFirestore';
import useClearProjectOnNewId from 'useClearProjectOnNewId';

import ListView from '../ListView/ListView';
import NextPanel from '../NextPanel/NextPanel';

import './MainPage.css';

const MainPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const setProjectId = useSetRecoilState(projectIdState);

  useEffect(() => setProjectId(projectId), [projectId, setProjectId]);

  useSyncFirestore();
  useClearProjectOnNewId();

  return (
    <div className="MainPage">
      <h1 className="MainPage__title">Next</h1>
      <ListView />
      <NextPanel />
    </div>
  );
};
export default MainPage;
