import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import 'sanitize.css';
import './themes/light/style.scss';
import ProgressBarDemo from './pages/ProgressBarDemo';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet titleTemplate="Ray Ranola - %s" defaultTitle="Ray Ranola - Progress Bar Demo">
        <meta name="description" content=""/>
      </Helmet>
      <main className="main">
        <Switch>
          <Route exact path="/" component={ProgressBarDemo}/>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
