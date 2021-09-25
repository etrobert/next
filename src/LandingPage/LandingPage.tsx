import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './LandingPage.css';

const LandingPage = () => {
  const [newProjectId] = useState(uuidv4());

  return (
    <div className="LandingPage">
      <h1 className="LandingPage__title">Next</h1>
      <Link className={'LandingPage__cta'} to={`/project/${newProjectId}`}>
        START NOW
      </Link>
    </div>
  );
};
export default LandingPage;
