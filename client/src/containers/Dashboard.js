import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Link to='/events/create' >Create an event</Link>
      <Link to='/events'>Events list</Link>
      <Logout />
    </div>
  );
}

export default Dashboard;
