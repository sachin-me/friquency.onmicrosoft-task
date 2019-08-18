import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateEvent from '../components/CreateEvent';
import Events from '../components/Events';
import Header from './Header';

const Private = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/events/create' component={CreateEvent} />
        <Route exact path='/events' component={Events} />
      </Router>
    </div>
  );
}

export default Private;
