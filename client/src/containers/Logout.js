import React from 'react';

const handleLogout = () => {
  localStorage.clear()
  window.location.href="/login"
}

const Logout = () => {
  return (
    <div className="logout">
      <p onClick={handleLogout}>Logout</p>
    </div>
  )
}


export default Logout;