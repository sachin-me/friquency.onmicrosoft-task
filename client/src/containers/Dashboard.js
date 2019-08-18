import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to='/events/create' >Create an event</Link>
      <Link to='/events'>Events list</Link>
    </div>
  );
}

export default Dashboard;
