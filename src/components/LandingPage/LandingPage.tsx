import { useState } from 'react';

import useAddProject from 'hooks/useAddProject';

import './LandingPage.css';

const LandingPage = () => {
  const addProject = useAddProject();

  const [creatingProject, setCreatingProject] = useState(false);

  const onCtaClick = async () => {
    setCreatingProject(true);
    const ref = await addProject();
    window.location.href = `/next/project/${ref.id}`;
  };

  return (
    <div className="LandingPage">
      <h1 className="LandingPage__title">[next]</h1>
      <button
        className={'LandingPage__cta'}
        onClick={creatingProject ? undefined : onCtaClick}
      >
        {creatingProject ? 'Creating Project...' : 'START NOW'}
      </button>
    </div>
  );
};
export default LandingPage;
