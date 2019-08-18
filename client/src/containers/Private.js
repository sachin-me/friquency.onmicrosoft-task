import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateEvent from '../components/CreateEvent';
import Events from '../components/Events';

const Private = () => {
  return (
    <div>
      <Router>
        <Dashboard />
        <Route exact path='/events/create' component={CreateEvent} />
        <Route exact path='/events' component={Events} />
      </Router>
    </div>
  );
}

export default Private;
