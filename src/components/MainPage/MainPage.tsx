import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSetRecoilState } from 'recoil';

import { projectIdState } from 'atoms';
import useSyncFirestore from 'hooks/useSyncFirestore';
import useClearProjectOnNewId from 'hooks/useClearProjectOnNewId';
import ListView from 'components/ListView/ListView';
import NextPanel from 'components/NextPanel/NextPanel';
import Graph from 'components/Graph/Graph';

import './MainPage.css';

const MainPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const setProjectId = useSetRecoilState(projectIdState);

  useEffect(() => setProjectId(projectId), [projectId, setProjectId]);

  useSyncFirestore();
  useClearProjectOnNewId();

  return (
    <div className="MainPage">
      <div className="MainPage__left-pane">
        <h1 className="MainPage__title">Next</h1>
        <ListView />
      </div>
      <Graph />
      <NextPanel />
    </div>
  );
};
export default MainPage;
