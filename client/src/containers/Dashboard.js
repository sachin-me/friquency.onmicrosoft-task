import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      I am a Dashboard
      <Link to='/events/create' >Create an event</Link>
    </div>
  );
}

export default Dashboard;
