import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Header from './Header';

const Public = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default Public;
