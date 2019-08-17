import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const Private = () => {
  return (
    <div>
      <Router>
        <Dashboard />
      </Router>
    </div>
  );
}

export default Private;
