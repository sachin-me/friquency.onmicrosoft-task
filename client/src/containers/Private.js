import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateEvent from '../components/CreateEvent';

const Private = () => {
  return (
    <div>
      <Router>
        <Dashboard />
        <Route exact path='/event/create' component={CreateEvent} />
      </Router>
    </div>
  );
}

export default Private;
