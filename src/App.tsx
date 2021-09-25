import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';

import './App.css';

function App() {
  return (
    <Router basename="/next">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/project/:projectId">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
